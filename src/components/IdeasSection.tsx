import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Thermometer } from "lucide-react";
import { TalkingPoint } from "@/types";
import { VideoTopics } from "@/components/VideoTopics";

interface IdeasSectionProps {
  mainSearch: string;
  relatedSearch: string;
  talkingPoints: TalkingPoint[];
  selectedTalkingPoints: Set<string>;
  handleSelectTalkingPoint: (point: TalkingPoint) => void;
  videoTopics: string[];
  removeVideoTopic: (index: number) => void;
  selectedContentType: string;
  setSelectedContentType: (type: string) => void;
  onBack: () => void;
  onNext: () => void;
}

export function IdeasSection({
  mainSearch,
  relatedSearch,
  talkingPoints,
  selectedTalkingPoints,
  handleSelectTalkingPoint,
  videoTopics,
  removeVideoTopic,
  selectedContentType,
  setSelectedContentType,
  onBack,
  onNext,
}: IdeasSectionProps) {
  const talkingPointsScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <Card className="mb-3">
        <CardContent className="p-3">
          <h2 className="mb-2 text-lg font-bold">
            What People Are Saying About{" "}
            <span className="italic font-extrabold underline decoration-orange-500 decoration-4">
              {mainSearch}
            </span>{" "}
            and{" "}
            <span className="italic font-extrabold underline decoration-orange-500 decoration-4">
              {relatedSearch}
            </span>
          </h2>
          <div className="relative h-24 overflow-y-auto">
            <div
              ref={talkingPointsScrollRef}
              className="h-full overflow-y-auto scrollbar-hide"
              onScroll={() => {
                if (talkingPointsScrollRef.current) {
                  const { scrollTop, scrollHeight, clientHeight } =
                    talkingPointsScrollRef.current;
                  setShowLeftArrow(scrollTop > 0);
                  setShowRightArrow(
                    scrollTop < scrollHeight - clientHeight - 1
                  );
                }
              }}
            >
              <div className="grid grid-cols-4 gap-2">
                {talkingPoints.map((point) => (
                  <Button
                    key={point.id}
                    variant="outline"
                    className={`h-auto text-left justify-start px-2 py-1 text-xs transition-colors ${
                      selectedTalkingPoints.has(point.id)
                        ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}
                    onClick={() => handleSelectTalkingPoint(point)}
                    disabled={
                      selectedTalkingPoints.size >= 8 &&
                      !selectedTalkingPoints.has(point.id)
                    }
                  >
                    <span className="truncate">{point.content}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex-1 mb-3 overflow-hidden">
        <div className="grid h-full grid-cols-4 gap-2 overflow-y-auto">
          {Array.from(selectedTalkingPoints).map((pointId) => {
            const point = talkingPoints.find((p) => p.id === pointId);
            if (!point) return null;
            return (
              <Card key={point.id} className="flex flex-col">
                <CardContent className="flex-1 p-2 overflow-hidden">
                  <h3 className="mb-1 text-xs font-semibold truncate">
                    {point.content}
                  </h3>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium">Heat Score:</span>
                    <Badge className="text-xs text-orange-500">
                      <Thermometer className="w-3 h-3 mr-1" />
                      {point.heatScore}/10
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-3">
                    {point.summary}
                  </p>
                </CardContent>
              </Card>
            );
          })}
          {selectedTalkingPoints.size === 0 && (
            <div className="flex items-center justify-center h-full col-span-4 text-sm text-gray-400">
              Select talking points to see heat score cards
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <VideoTopics
          videoTopics={videoTopics}
          onRemoveTopic={removeVideoTopic}
        />
        <Card>
          <CardContent className="p-3">
            <h2 className="mb-2 text-lg font-bold">Content Format</h2>

            <div className="grid grid-cols-2 gap-2">
              {["Tutorials", "Vlogs", "Podcasts", "Shorts"].map((type) => (
                <Button
                  key={type}
                  variant={selectedContentType === type ? "default" : "outline"}
                  onClick={() => setSelectedContentType(type)}
                  className="py-1 text-xs"
                >
                  {type}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          onClick={onBack}
          variant="outline"
          className="px-4 py-2 text-sm"
        >
          Back
        </Button>
        <Button onClick={onNext} className="px-4 py-2 text-sm">
          Generate Content Ideas
        </Button>
      </div>
    </div>
  );
}
