import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { GoogleTrendsQueryParams } from '@/types/googleTrends';
import { ApifyClient } from 'apify-client';

const APIFY_API_TOKEN = process.env.APIFY_API_TOKEN;

async function fetchGoogleTrendsData(params: GoogleTrendsQueryParams) {
  console.log('Fetching fresh data from Apify API with params:', params);

  if (!APIFY_API_TOKEN) {
    throw new Error('APIFY_API_TOKEN is not set in environment variables');
  }

  // Initialize the ApifyClient with your Apify API token
  const client = new ApifyClient({
    token: APIFY_API_TOKEN,
  });

  // Prepare Actor input
  const input = {
    searchTerms: ["London"],
    timeRange: "",
    viewedFrom: "",
  };

  console.log('Exact Apify input:', JSON.stringify(input, null, 2));

  try {
    // Run the Actor and wait for it to finish
    const run = await client.actor("emastra/google-trends-scraper").call(input);

    console.log(`💾 Check your data here: https://console.apify.com/storage/datasets/${run.defaultDatasetId}`);

    // Fetch results from the dataset
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    console.log('Dataset data:', items);

    return items;
  } catch (error) {
    console.error('Error running Apify actor:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  console.log('Starting POST request');

  try {
    console.log('Fetching fresh data from Apify.');
    const trendsData = await fetchGoogleTrendsData({} as GoogleTrendsQueryParams); // Pass empty object, it won't be used
    console.log('Fresh data fetched:', trendsData);

    // Add a timestamp to the data
    const responseData = {
      data: trendsData,
      timestamp: new Date().toISOString(),
      isCached: false
    };

    console.log('Returning data:', responseData);
    return NextResponse.json(responseData, { status: 200 });
  } catch (error) {
    console.error('Error fetching Google Trends data:', error);
    return NextResponse.json({
      error: 'Internal server error',
      details: (error as Error).message,
    }, { status: 500 });
  } finally {
    console.log('POST request completed');
  }
}

export const config = {
  runtime: 'edge',
};
