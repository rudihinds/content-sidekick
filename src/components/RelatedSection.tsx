import React, { useRef, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendData } from "@/types";

interface RelatedSectionProps {
  selectedTimeRange: string;
  timeRanges: string[];
  handleTimeRangeChange: (range: string) => void;
  relatedSearches: string[];
  selectedSearch: string;
  handleSelectSearch: (term: string) => void;
  handleGetContentIdeas: (term: string) => void;
  trendingData: TrendData[];
}

export function RelatedSection({
  selectedTimeRange,
  timeRanges,
  handleTimeRangeChange,
  relatedSearches,
  selectedSearch,
  handleSelectSearch,
  handleGetContentIdeas,
  trendingData
}: RelatedSectionProps) {
  const talkingPointsScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const handleScroll = (direction: "left" | "right") => {
    if (talkingPointsScrollRef.current) {
      const scrollAmount = talkingPointsScrollRef.current.clientWidth / 2;
      talkingPointsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const getSelectedTrendData = () => {
    return trendingData.find((data) => data.term === selectedSearch) || trendingData[0];
  };

  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Related YouTube Searches</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  {selectedTimeRange} <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {timeRanges.map((range) => (
                  <DropdownMenuItem key={range} onSelect={() => handleTimeRangeChange(range)}>
                    {range}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative">
            {showLeftArrow && (
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 z-10 -translate-y-1/2 top-1/2"
                onClick={() => handleScroll("left")}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
            )}
            {showRightArrow && (
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 z-10 -translate-y-1/2 top-1/2"
                onClick={() => handleScroll("right")}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
            <div
              ref={talkingPointsScrollRef}
              className="px-6 -mx-6 overflow-x-auto scrollbar-hide"
              onScroll={() => {
                if (talkingPointsScrollRef.current) {
                  const { scrollLeft, scrollWidth, clientWidth } = talkingPointsScrollRef.current;
                  setShowLeftArrow(scrollLeft > 0);
                  setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
                }
              }}
            >
              <div className="inline-flex flex-col py-4 space-y-4">
                {[0, 1].map((rowIndex) => (
                  <div key={rowIndex} className="flex space-x-4">
                    {relatedSearches
                      .slice(rowIndex * Math.ceil(relatedSearches.length / 2), (rowIndex + 1) * Math.ceil(relatedSearches.length / 2))
                      .map((search, index) => (
                        <div
                          key={index}
                          className={`w-64 p-4 bg-secondary rounded-lg cursor-pointer transition-all ${
                            selectedSearch === search ? "ring-2 ring-primary" : ""
                          }`}
                          onClick={() => handleSelectSearch(search === selectedSearch ? "" : search)}
                        >
                          <div className="mb-2 font-medium">{search}</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="text-sm text-muted-foreground">Searches: 10K</div>
                            <div className="text-sm text-muted-foreground">Views: 500K</div>
                          </div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button
                className="transition-opacity"
                onClick={() => handleGetContentIdeas(selectedSearch)}
                disabled={!selectedSearch}
                title={!selectedSearch ? "Select a search term to get ideas" : "Get ideas for selected search"}
              >
                Get Ideas
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Trending Data for {selectedSearch || "Selected Term"}</h2>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={getSelectedTrendData().trend.map((value, index) => ({ name: `Day ${index + 1}`, value }))}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}