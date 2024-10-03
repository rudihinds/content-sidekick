import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TrendsVisualizationProps {
  data: {
    interestOverTime: Array<{ date: string; value: number }>;
    interestByRegion: Array<{ geoCode: string; geoName: string; value: number }>;
    relatedQueries: {
      top: Array<{ query: string; value: number }>;
      rising: Array<{ query: string; value: string }>;
    };
    relatedTopics: {
      top: Array<{ topic: string; value: number }>;
      rising: Array<{ topic: string; value: string }>;
    };
  };
}

export function TrendsVisualization({ data }: TrendsVisualizationProps) {
  return (
    <Card className="mt-6">
      <CardContent className="p-6">
        <h2 className="mb-4 text-2xl font-bold">Google Trends Results</h2>
        
        {data.relatedQueries && (
          <>
            <h3 className="mt-4 mb-2 text-xl font-semibold">Related Queries</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="mb-2 font-semibold">Top</h4>
                <ul className="list-disc list-inside">
                  {data.relatedQueries.top.map((item, index) => (
                    <li key={index}>{item.query} ({item.value})</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2 font-semibold">Rising</h4>
                <ul className="list-disc list-inside">
                  {data.relatedQueries.rising.map((item, index) => (
                    <li key={index}>{item.query} ({item.value})</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}

        {data.interestByRegion && data.interestByRegion.length > 0 && (
          <>
            <h3 className="mt-4 mb-2 text-xl font-semibold">Interest by Region</h3>
            <ul className="list-disc list-inside">
              {data.interestByRegion.map((region, index) => (
                <li key={index}>{region.geoName}: {region.value}</li>
              ))}
            </ul>
          </>
        )}

        {data.interestOverTime && data.interestOverTime.length > 0 && (
          <>
            <h3 className="mt-4 mb-2 text-xl font-semibold">Interest Over Time</h3>
            <ul className="list-disc list-inside">
              {data.interestOverTime.slice(0, 5).map((item, index) => (
                <li key={index}>{item.date}: {item.value}</li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-500">Showing first 5 entries. Consider adding a chart for full visualization.</p>
          </>
        )}
      </CardContent>
    </Card>
  );
}