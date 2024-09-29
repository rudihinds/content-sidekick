import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ContentIdea } from "@/types";

interface CreateSectionProps {
  selectedContentType: string;
  mainSearch: string;
  relatedSearch: string;
  handleGenerateIdeas: () => void;
  generatedIdeas: ContentIdea[];
}

export function CreateSection({
  selectedContentType,
  mainSearch,
  relatedSearch,
  handleGenerateIdeas,
  generatedIdeas
}: CreateSectionProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold">
          {selectedContentType} content ideas ({mainSearch} + {relatedSearch})
        </h2>
        <Button className="w-full mb-4" onClick={handleGenerateIdeas}>
          Generate Video Ideas
        </Button>
        <div className="space-y-2">
          {generatedIdeas.map((idea) => (
            <div key={idea.id} className="p-2 rounded-lg bg-secondary">
              {idea.title}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}