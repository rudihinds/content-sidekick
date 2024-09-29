export type TalkingPoint = {
  id: string;
  content: string;
  heatScore: number;
  summary: string;
};

export type ContentIdea = {
  id: string;
  title: string;
};

export type TrendData = {
  term: string;
  trend: number[];
};