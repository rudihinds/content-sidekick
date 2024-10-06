'use client';

import React, { useState, useCallback } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  GoogleTrendsTimeRange,
  GoogleTrendsGeo,
  GoogleTrendsQueryParams,
  convertGeoForApify
} from '@/types/googleTrends';
import { TrendsVisualization } from './TrendsVisualization';

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleNewSearch: (params: GoogleTrendsQueryParams) => void;
}

const timeRangeOptions = {
  "Past Hour": GoogleTrendsTimeRange.PAST_HOUR,
  "Past 4 Hours": GoogleTrendsTimeRange.PAST_4_HOURS,
  "Past Day": GoogleTrendsTimeRange.PAST_DAY,
  "Past 7 Days": GoogleTrendsTimeRange.PAST_7_DAYS,
  "Past 30 Days": GoogleTrendsTimeRange.PAST_30_DAYS,
  "Past 90 Days": GoogleTrendsTimeRange.PAST_90_DAYS,
  "Past 12 Months": GoogleTrendsTimeRange.PAST_12_MONTHS,
};

const geoOptions = {
  "Global": GoogleTrendsGeo.GLOBAL,
  "United States": GoogleTrendsGeo.UNITED_STATES,
  "United Kingdom": GoogleTrendsGeo.UNITED_KINGDOM,
  "Canada": GoogleTrendsGeo.CANADA,
  "Australia": GoogleTrendsGeo.AUSTRALIA,
  "India": GoogleTrendsGeo.INDIA,
  "Germany": GoogleTrendsGeo.GERMANY,
  "France": GoogleTrendsGeo.FRANCE,
  "Brazil": GoogleTrendsGeo.BRAZIL,
  "Japan": GoogleTrendsGeo.JAPAN,
};

interface FormInputs {
  searchTerm: string;
}

const fetchTrendsData = async (searchParams: GoogleTrendsQueryParams) => {
  console.log('Sending request to /api/googleTrends with params:', searchParams);
  const response = await fetch('/api/googleTrends', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(searchParams),
  });
  console.log('Response status:', response.status);
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error(`Network response was not ok: ${errorText}`);
  }
  const data = await response.json();
  console.log('Received data:', data);
  return data;
};

export function SearchSection({ searchTerm, setSearchTerm, handleNewSearch }: SearchSectionProps) {
  const [timeRange, setTimeRange] = useState<GoogleTrendsTimeRange>(GoogleTrendsTimeRange.PAST_30_DAYS);
  const [geo, setGeo] = useState<GoogleTrendsGeo>(GoogleTrendsGeo.GLOBAL);
  const [searchParams, setSearchParams] = useState<GoogleTrendsQueryParams>({
    searchTerms: [searchTerm],
    timeRange: GoogleTrendsTimeRange.PAST_30_DAYS,
    geo: GoogleTrendsGeo.GLOBAL,
  });
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      searchTerm: searchTerm
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = useCallback(async (formData) => {
    setIsSearching(true);
    setError(null);
    const newParams: GoogleTrendsQueryParams = {
      searchTerms: [formData.searchTerm],
      timeRange,
      geo,
    };
    console.log('Submitting search with params:', newParams);
    setSearchParams(newParams);
    setSearchTerm(formData.searchTerm);
    handleNewSearch(newParams);
    try {
      const result = await fetchTrendsData({
        ...newParams,
        geo: convertGeoForApify(newParams.geo),
      });
      console.log('Search result:', result);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error instanceof Error ? error : new Error('An unknown error occurred'));
    } finally {
      setIsSearching(false);
    }
  }, [timeRange, geo, setSearchTerm, handleNewSearch]);

  const handleSidebarChange = useCallback((newParams: Partial<GoogleTrendsQueryParams>) => {
    setSearchParams(prev => ({ ...prev, ...newParams }));
  }, []);

  return (
    <>
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 text-2xl font-bold">New Search</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4">
              <Input
                {...register("searchTerm", { required: true })}
                type="text"
                placeholder="Enter new search term"
                className="flex-grow"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Select value={timeRange} onValueChange={(value: GoogleTrendsTimeRange) => setTimeRange(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Time Range" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(timeRangeOptions).map(([label, value]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={geo} onValueChange={(value: GoogleTrendsGeo) => setGeo(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(geoOptions).map(([label, value]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isSearching}>
              {isSearching ? 'Searching...' : 'Search Data'}
            </Button>
          </form>
        </CardContent>
      </Card>
      {error && <p className="text-red-500 mt-4">Error: {error.message}</p>}
      {data && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Search Results</h3>
          <p className="mb-2">
            Data {data.isCached ? 'loaded from cache' : 'freshly fetched'} at: {data.timestamp}
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
          </div>
          <TrendsVisualization 
            data={data} 
            onParamChange={handleSidebarChange}
            currentParams={searchParams}
          />
        </div>
      )}
    </>
  );
}