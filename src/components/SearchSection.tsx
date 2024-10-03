'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  GoogleTrendsTimeRange,
  GoogleTrendsGeo,
  GoogleTrendsSearchType,
  GoogleTrendsMainCategory,
  GoogleTrendsQueryParams
} from '@/types/googleTrends';
import { TrendsVisualization } from './TrendsVisualization'; // Add this import

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleNewSearch: (params: GoogleTrendsQueryParams) => void;
}

const timeRangeOptions = {
  "Past 30 Days": GoogleTrendsTimeRange.PAST_30_DAYS,
  "Past Hour": GoogleTrendsTimeRange.PAST_HOUR,
  "Past 4 Hours": GoogleTrendsTimeRange.PAST_4_HOURS,
  "Past Day": GoogleTrendsTimeRange.PAST_DAY,
  "Past 7 Days": GoogleTrendsTimeRange.PAST_7_DAYS,
  "Past 90 Days": GoogleTrendsTimeRange.PAST_90_DAYS,
  "Past 12 Months": GoogleTrendsTimeRange.PAST_12_MONTHS,
  "Past 5 Years": GoogleTrendsTimeRange.PAST_5_YEARS,
  "Since 2004": GoogleTrendsTimeRange.SINCE_2004,
};

const geoOptions = {
  "Global": "GLOBAL",
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

const searchTypeOptions = {
  "YouTube Search": GoogleTrendsSearchType.YOUTUBE_SEARCH,
  "Web Search": "WEB_SEARCH",
  "Image Search": GoogleTrendsSearchType.IMAGE_SEARCH,
  "News Search": GoogleTrendsSearchType.NEWS_SEARCH,
  "Shopping Search": GoogleTrendsSearchType.SHOPPING_SEARCH,
};

const categoryOptions = {
  "All Categories": GoogleTrendsMainCategory.ALL_CATEGORIES,
  "Arts & Entertainment": GoogleTrendsMainCategory.ARTS_AND_ENTERTAINMENT,
  "Autos & Vehicles": GoogleTrendsMainCategory.AUTOS_AND_VEHICLES,
  "Beauty & Fitness": GoogleTrendsMainCategory.BEAUTY_AND_FITNESS,
  "Books & Literature": GoogleTrendsMainCategory.BOOKS_AND_LITERATURE,
  "Business & Industrial": GoogleTrendsMainCategory.BUSINESS_AND_INDUSTRIAL,
  "Computers & Electronics": GoogleTrendsMainCategory.COMPUTERS_AND_ELECTRONICS,
  "Finance": GoogleTrendsMainCategory.FINANCE,
  "Food & Drink": GoogleTrendsMainCategory.FOOD_AND_DRINK,
  "Games": GoogleTrendsMainCategory.GAMES,
  "Health": GoogleTrendsMainCategory.HEALTH,
  "Hobbies & Leisure": GoogleTrendsMainCategory.HOBBIES_AND_LEISURE,
  "Home & Garden": GoogleTrendsMainCategory.HOME_AND_GARDEN,
  "Internet & Telecom": GoogleTrendsMainCategory.INTERNET_AND_TELECOM,
  "Jobs & Education": GoogleTrendsMainCategory.JOBS_AND_EDUCATION,
  "Law & Government": GoogleTrendsMainCategory.LAW_AND_GOVERNMENT,
  "News": GoogleTrendsMainCategory.NEWS,
  "Online Communities": GoogleTrendsMainCategory.ONLINE_COMMUNITIES,
  "People & Society": GoogleTrendsMainCategory.PEOPLE_AND_SOCIETY,
  "Pets & Animals": GoogleTrendsMainCategory.PETS_AND_ANIMALS,
  "Real Estate": GoogleTrendsMainCategory.REAL_ESTATE,
  "Reference": GoogleTrendsMainCategory.REFERENCE,
  "Science": GoogleTrendsMainCategory.SCIENCE,
  "Shopping": GoogleTrendsMainCategory.SHOPPING,
  "Sports": GoogleTrendsMainCategory.SPORTS,
  "Travel": GoogleTrendsMainCategory.TRAVEL,
};

interface FormInputs {
  searchTerm: string;
}

export function SearchSection({ searchTerm, setSearchTerm, handleNewSearch }: SearchSectionProps) {
  const [timeRange, setTimeRange] = useState<GoogleTrendsTimeRange>(GoogleTrendsTimeRange.PAST_30_DAYS);
  const [geo, setGeo] = useState<GoogleTrendsGeo>(GoogleTrendsGeo.GLOBAL);
  const [searchType, setSearchType] = useState<GoogleTrendsSearchType>(GoogleTrendsSearchType.YOUTUBE_SEARCH);
  const [category, setCategory] = useState<GoogleTrendsMainCategory>(GoogleTrendsMainCategory.ALL_CATEGORIES);
  const [trendsData, setTrendsData] = useState<any>(null); // Add this state
  const [isLoading, setIsLoading] = useState<boolean>(false); // Add this state

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      searchTerm: searchTerm
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log("Search term:", data.searchTerm);
    setSearchTerm(data.searchTerm);
    setIsLoading(true); // Set loading to true when starting the request
    const params: GoogleTrendsQueryParams = {
      searchTerm: data.searchTerm,
      timeRange,
      geo: geo === GoogleTrendsGeo.GLOBAL ? GoogleTrendsGeo.GLOBAL : geo,
      searchType: searchType === GoogleTrendsSearchType.WEB_SEARCH ? GoogleTrendsSearchType.WEB_SEARCH : searchType,
      category
    };

    try {
      const response = await fetch('/api/googleTrends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('API response:', result);
      setTrendsData(result.data); // Set the trends data
      handleNewSearch(params);
    } catch (error) {
      console.error('Error calling API:', error);
    } finally {
      setIsLoading(false); // Set loading to false when the request is complete
    }
  };

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
              <Select value={geo === GoogleTrendsGeo.GLOBAL ? "GLOBAL" : geo} onValueChange={(value: string) => setGeo(value as GoogleTrendsGeo)}>
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
              <Select value={searchType === GoogleTrendsSearchType.WEB_SEARCH ? "WEB_SEARCH" : searchType} onValueChange={(value: string) => setSearchType(value as GoogleTrendsSearchType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Search Type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(searchTypeOptions).map(([label, value]) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={category.toString()} onValueChange={(value: string) => setCategory(parseInt(value) as GoogleTrendsMainCategory)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(categoryOptions).map(([label, value]) => (
                    <SelectItem key={value} value={value.toString()}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search Data'}
            </Button>
          </form>
        </CardContent>
      </Card>
      {trendsData && <TrendsVisualization data={trendsData} />}
    </>
  );
}