import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
  GoogleTrendsTimeRange,
  GoogleTrendsGeo,
  GoogleTrendsSearchType,
  GoogleTrendsMainCategory,
  GoogleTrendsQueryParams
} from '@/types/googleTrends';

function mapTimeRange(timeRange: GoogleTrendsTimeRange): string {
  const mapping: { [key in GoogleTrendsTimeRange]: string } = {
    [GoogleTrendsTimeRange.PAST_HOUR]: 'now 1-H',
    [GoogleTrendsTimeRange.PAST_4_HOURS]: 'now 4-H',
    [GoogleTrendsTimeRange.PAST_DAY]: 'now 1-d',
    [GoogleTrendsTimeRange.PAST_7_DAYS]: 'now 7-d',
    [GoogleTrendsTimeRange.PAST_30_DAYS]: 'today 1-m',
    [GoogleTrendsTimeRange.PAST_90_DAYS]: 'today 3-m',
    [GoogleTrendsTimeRange.PAST_12_MONTHS]: 'today 12-m',
    [GoogleTrendsTimeRange.PAST_5_YEARS]: 'today 5-y',
    [GoogleTrendsTimeRange.SINCE_2004]: 'all',
    [GoogleTrendsTimeRange.PAST_24_HOURS]: 'now 24-H',
  };
  return mapping[timeRange] || '';
}

function processApifyData(data: any) {
  console.log('Raw Apify data structure:', JSON.stringify(Object.keys(data), null, 2));

  const interestByRegion = Array.isArray(data.interestBy)
    ? data.interestBy
        .filter((region: any) => region.hasData && region.hasData[0])
        .map((region: any) => ({
          geoCode: region.geoCode,
          geoName: region.geoName,
          value: region.value[0],
        }))
        .sort((a: any, b: any) => b.value - a.value)
        .slice(0, 10)
    : [];

  const relatedQueries = {
    top: Array.isArray(data.relatedQueries_top)
      ? data.relatedQueries_top.map((item: any) => ({
          query: item.query,
          value: item.value
        }))
      : [],
    rising: Array.isArray(data.relatedQueries_rising)
      ? data.relatedQueries_rising.map((item: any) => ({
          query: item.query,
          value: item.value
        }))
      : []
  };

  const interestOverTime = Array.isArray(data.interestOverTime_timelineData)
    ? data.interestOverTime_timelineData.map((item: any) => ({
        date: item.formattedAxisTime,
        value: item.value[0]
      }))
    : [];

  // Only process relatedTopics if it's included in the data
  const relatedTopics = data.relatedTopics_top ? {
    top: data.relatedTopics_top.map((item: any) => ({
      topic: item.topic,
      value: item.value
    })),
    rising: data.relatedTopics_rising ? data.relatedTopics_rising.map((item: any) => ({
      topic: item.topic,
      value: item.value
    })) : []
  } : { top: [], rising: [] };

  console.log('Processed data structure:', {
    interestByRegion: interestByRegion.length,
    relatedQueries: {
      top: relatedQueries.top.length,
      rising: relatedQueries.rising.length
    },
    interestOverTime: interestOverTime.length,
    relatedTopics: {
      top: relatedTopics.top.length,
      rising: relatedTopics.rising.length
    }
  });

  return {
    interestOverTime,
    interestByRegion,
    relatedQueries,
    relatedTopics
  };
}

async function fetchGoogleTrendsData(params: GoogleTrendsQueryParams) {
  const input = {
    searchTerms: [params.searchTerm],
    timeRange: mapTimeRange(params.timeRange),
    geo: params.geo,
    category: params.category === GoogleTrendsMainCategory.ALL_CATEGORIES ? "" : params.category.toString(),
    searchType: params.searchType,
    // Add these parameters to specify what data to fetch
    onlyInterestOverTime: true,
    onlyInterestByRegion: true,
    onlyRelatedQueries: true,
    onlyRelatedTopics: false, // Set to true if you need this data
  };

  const apiUrl = 'https://api.apify.com/v2/acts/emastra~google-trends-scraper/run-sync-get-dataset-items';
  const apiToken = process.env.APIFY_API_TOKEN;

  if (!apiToken) {
    throw new Error('APIFY_API_TOKEN is not set in environment variables');
  }

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiToken}`,
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }

  const data = await response.json();
  console.log('Raw response from Apify:', JSON.stringify(data, null, 2).slice(0, 1000) + '...');

  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error('Unexpected data format received from Apify');
    return {
      interestOverTime: [],
      interestByRegion: [],
      relatedQueries: { top: [], rising: [] },
      relatedTopics: { top: [], rising: [] }
    };
  }
  return processApifyData(data[0]);
}

export async function POST(request: NextRequest) {
  const searchParams: GoogleTrendsQueryParams = await request.json();
  
  try {
    const trendsData = await fetchGoogleTrendsData(searchParams);
    return NextResponse.json({ data: trendsData }, { status: 200 });
  } catch (error) {
    console.error('Error fetching Google Trends data:', error);
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: (error as Error).message,
    }, { status: 500 });
  }
}