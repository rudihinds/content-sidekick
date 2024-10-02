import React, { useState } from 'react';
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
};

export function SearchSection({ searchTerm, setSearchTerm, handleNewSearch }: SearchSectionProps) {
  const [timeRange, setTimeRange] = useState<GoogleTrendsTimeRange>(GoogleTrendsTimeRange.PAST_30_DAYS);
  const [geo, setGeo] = useState<GoogleTrendsGeo>(GoogleTrendsGeo.GLOBAL);
  const [searchType, setSearchType] = useState<GoogleTrendsSearchType>(GoogleTrendsSearchType.YOUTUBE_SEARCH);
  const [category, setCategory] = useState<GoogleTrendsMainCategory>(GoogleTrendsMainCategory.ALL_CATEGORIES);

  const handleSearch = () => {
    const params: GoogleTrendsQueryParams = {
      timeRange,
      geo: geo === "GLOBAL" ? GoogleTrendsGeo.GLOBAL : geo,
      searchType: searchType === "WEB_SEARCH" ? GoogleTrendsSearchType.WEB_SEARCH : searchType,
      category
    };
    handleNewSearch(params);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold">New Search</h2>
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
          <Button onClick={handleSearch} className="w-full">Search Data</Button>
        </div>
      </CardContent>
    </Card>
  );
}