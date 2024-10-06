// Time ranges for Google Trends queries
export enum GoogleTrendsTimeRange {
  PAST_HOUR = "now 1-H",
  PAST_4_HOURS = "now 4-H",
  PAST_DAY = "now 1-d",
  PAST_7_DAYS = "now 7-d",
  PAST_30_DAYS = "today 1-m",
  PAST_90_DAYS = "today 3-m",
  PAST_12_MONTHS = "today 12-m",
  ALL_TIME = "" // Added to match the sample JSON
}

// Geographical regions for Google Trends queries
export enum GoogleTrendsGeo {
  GLOBAL = "GLOBAL", // Change this from "" to "GLOBAL"
  UNITED_STATES = "US",
  UNITED_KINGDOM = "GB",
  CANADA = "CA",
  AUSTRALIA = "AU",
  INDIA = "IN",
  GERMANY = "DE",
  FRANCE = "FR",
  BRAZIL = "BR",
  JAPAN = "JP",
}

// Search types for Google Trends queries
export enum GoogleTrendsSearchType {
  WEB_SEARCH = "web",
  YOUTUBE_SEARCH = "youtube",
}

export enum GoogleTrendsCategory {
  ALL = "ALL", // Change this from "" to "ALL"
  ARTS_ENTERTAINMENT = "3",
  AUTOS_VEHICLES = "47",
  // ... (other categories remain the same)
}

export interface GoogleTrendsQueryParams {
  searchTerms: string[];
  timeRange: string;
  viewedFrom: string;
}