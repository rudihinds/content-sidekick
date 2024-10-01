import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoTopicsProps {
  videoTopics: string[];
  onRemoveTopic: (index: number) => void;
}

export function VideoTopics({ videoTopics, onRemoveTopic }: VideoTopicsProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <h2 className="mb-2 text-lg font-bold">Content Topics</h2>
        <div className="grid grid-cols-2 gap-x-4">
          {[0, 1].map((colIndex) => (
            <div key={colIndex} className="space-y-2">
              {Array(4)
                .fill(null)
                .map((_, rowIndex) => {
                  const index = colIndex * 4 + rowIndex;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between h-10 p-2 overflow-hidden text-sm rounded-lg bg-secondary"
                    >
                      {videoTopics[index] ? (
                        <>
                          <span className="flex-grow mr-2 truncate">
                            {index + 1}. {videoTopics[index]}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-shrink-0"
                            onClick={() => onRemoveTopic(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <span className="truncate text-muted-foreground">
                          {index + 1}. Choose Content Type
                        </span>
                      )}
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
