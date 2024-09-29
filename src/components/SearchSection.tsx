import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchSectionProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleNewSearch: () => void;
}

export function SearchSection({ searchTerm, setSearchTerm, handleNewSearch }: SearchSectionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold">New Search</h2>
        <div className="flex space-x-4">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter new search term"
            className="flex-grow"
          />
          <Button onClick={handleNewSearch}>Search Data</Button>
        </div>
      </CardContent>
    </Card>
  );
}