// Time ranges for Google Trends queries
export enum GoogleTrendsTimeRange {
  PAST_HOUR = 'now 1-H',
  PAST_4_HOURS = 'now 4-H',
  PAST_DAY = 'now 1-d',
  PAST_7_DAYS = 'now 7-d',
  PAST_30_DAYS = 'today 1-m',
  PAST_90_DAYS = 'today 3-m',
  PAST_12_MONTHS = 'today 12-m',
  PAST_5_YEARS = 'today 5-y',
  SINCE_2004 = 'all',
  PAST_24_HOURS = 'now 24-H',
  PAST_WEEK = 'now 7-d',
  PAST_MONTH = 'today 1-m',
  PAST_YEAR = 'today 12-m',
}

// Geographical regions for Google Trends queries
export enum GoogleTrendsGeo {
  GLOBAL = '',
  UNITED_STATES = 'US',
  UNITED_KINGDOM = 'GB',
  CANADA = 'CA',
  AUSTRALIA = 'AU',
  VENEZUELA = 'VE',
  INDIA = 'IN',
  GERMANY = 'DE',
  FRANCE = 'FR',
  BRAZIL = 'BR',
  CHINA = 'CN',
  ARGENTINA = 'AR',
  MEXICO = 'MX',
  RUSSIA = 'RU',
  SOUTH_AFRICA = 'ZA',
  NIGERIA = 'NG',
  ITALY = 'IT',
  SPAIN = 'ES',
  JAPAN = 'JP',
  SOUTH_KOREA = 'KR',
  NETHERLANDS = 'NL',
  SWEDEN = 'SE',
  SWITZERLAND = 'CH',
  NORWAY = 'NO',
  FINLAND = 'FI',
  DENMARK = 'DK',
  BELGIUM = 'BE',
  POLAND = 'PL',
  NEW_ZEALAND = 'NZ',
  SINGAPORE = 'SG',
  MALAYSIA = 'MY',
  PHILIPPINES = 'PH',
  THAILAND = 'TH',
  TURKEY = 'TR',
  SAUDI_ARABIA = 'SA',
  EGYPT = 'EG',
  ISRAEL = 'IL',
  UNITED_ARAB_EMIRATES = 'AE',
  PORTUGAL = 'PT',
  GREECE = 'GR',
  IRELAND = 'IE',
  HUNGARY = 'HU',
  CZECH_REPUBLIC = 'CZ',
  ROMANIA = 'RO',
  AUSTRIA = 'AT',
  CHILE = 'CL',
  COLOMBIA = 'CO',
  PERU = 'PE',
  PAKISTAN = 'PK',
  BANGLADESH = 'BD',
  SRI_LANKA = 'LK',
  INDONESIA = 'ID',
  VIETNAM = 'VN',
}

// Search types for Google Trends queries
export enum GoogleTrendsSearchType {
  WEB_SEARCH = '',
  IMAGE_SEARCH = 'images',
  NEWS_SEARCH = 'news',
  YOUTUBE_SEARCH = 'youtube',
  SHOPPING_SEARCH = 'froogle',
  BOOKS_SEARCH = 'google-books',
  FINANCE_SEARCH = 'google-finance',
}

// Main categories for Google Trends queries
export enum GoogleTrendsMainCategory {
  ALL_CATEGORIES = 0,
  ARTS_AND_ENTERTAINMENT = 3,
  AUTOS_AND_VEHICLES = 47,
  BEAUTY_AND_FITNESS = 44,
  BOOKS_AND_LITERATURE = 22,
  BUSINESS_AND_INDUSTRIAL = 12,
  COMPUTERS_AND_ELECTRONICS = 5,
  FINANCE = 7,
  FOOD_AND_DRINK = 71,
  GAMES = 8,
  HEALTH = 45,
  HOBBIES_AND_LEISURE = 65,
  HOME_AND_GARDEN = 11,
  INTERNET_AND_TELECOM = 13,
}

// Subcategories for Beauty and Fitness
export enum GoogleTrendsBeautyFitnessSubcategory {
  ALL = 44,
  FITNESS = 50,
  COSMETICS = 70,
  HAIR_CARE = 68,
}

// Subcategories for Books and Literature
export enum GoogleTrendsBooksLiteratureSubcategory {
  ALL = 22,
  COMICS_AND_ANIMATION = 30,
  E_BOOKS = 1254,
  POETRY = 1255,
}

// Subcategories for Business and Industrial
export enum GoogleTrendsBusinessIndustrialSubcategory {
  ALL = 12,
  ADVERTISING_AND_MARKETING = 13,
  CONSTRUCTION_AND_MAINTENANCE = 29,
  BUSINESS_SOFTWARE = 561,
  MANUFACTURING = 1138,
  METALS_AND_MINING = 1156,
}

// Subcategories for Computers and Electronics
export enum GoogleTrendsComputersElectronicsSubcategory {
  ALL = 5,
  CONSUMER_ELECTRONICS = 78,
  PROGRAMMING = 39,
  INTERNET = 13,
  SOFTWARE = 1226,
  COMPUTER_HARDWARE = 1227,
}

// Subcategories for Finance
export enum GoogleTrendsFinanceSubcategory {
  ALL = 7,
  ACCOUNTING_AND_AUDITING = 31,
  BANKING = 33,
  INSURANCE = 54,
  INVESTING = 48,
  CRYPTOCURRENCY = 1179,
}

// Subcategories for Food and Drink
export enum GoogleTrendsFoodDrinkSubcategory {
  ALL = 71,
  BEVERAGES = 269,
  COOKING_AND_RECIPES = 70,
  RESTAURANTS = 73,
  FOOD_DELIVERY = 1150,
}

// Subcategories for Games
export enum GoogleTrendsGamesSubcategory {
  ALL = 8,
  VIDEO_GAMES = 59,
  BOARD_GAMES = 60,
  CARD_GAMES = 61,
  MOBILE_GAMES = 1140,
  GAMBLING = 1141,
}

// Subcategories for Health
export enum GoogleTrendsHealthSubcategory {
  ALL = 45,
  MEDICINE = 55,
  NUTRITION = 56,
  MENTAL_HEALTH = 66,
  ALTERNATIVE_MEDICINE = 1235,
  PUBLIC_HEALTH = 1236,
}

// Subcategories for Hobbies and Leisure
export enum GoogleTrendsHobbiesLeisureSubcategory {
  ALL = 65,
  CRAFTS = 92,
  OUTDOORS = 72,
  COLLECTING = 1244,
  RADIO_CONTROL = 1245,
}

// Subcategories for Home and Garden
export enum GoogleTrendsHomeGardenSubcategory {
  ALL = 11,
  HOME_IMPROVEMENT = 69,
  INTERIOR_DECOR = 31,
  GARDENING = 1246,
  SMART_HOME = 1247,
}

// Subcategories for Internet and Telecom
export enum GoogleTrendsInternetTelecomSubcategory {
  ALL = 13,
  MOBILE_PHONES = 76,
  SOCIAL_NETWORKS = 99,
  WEB_DESIGN_AND_DEVELOPMENT = 97,
  EMAIL_AND_MESSAGING = 1248,
  WEB_HOSTING = 1249,
}

// Helper type for custom time range
export type GoogleTrendsCustomTimeRange = `${string} ${string}`; // Format: 'YYYY-MM-DD YYYY-MM-DD'

// Interface for Google Trends query parameters
export interface GoogleTrendsQueryParams {
  timeRange: GoogleTrendsTimeRange | GoogleTrendsCustomTimeRange;
  geo: GoogleTrendsGeo;
  searchType: GoogleTrendsSearchType;
  category: GoogleTrendsMainCategory;
  subcategory?: 
    GoogleTrendsBeautyFitnessSubcategory | 
    GoogleTrendsBooksLiteratureSubcategory |
    GoogleTrendsBusinessIndustrialSubcategory |
    GoogleTrendsComputersElectronicsSubcategory |
    GoogleTrendsFinanceSubcategory |
    GoogleTrendsFoodDrinkSubcategory |
    GoogleTrendsGamesSubcategory |
    GoogleTrendsHealthSubcategory |
    GoogleTrendsHobbiesLeisureSubcategory |
    GoogleTrendsHomeGardenSubcategory |
    GoogleTrendsInternetTelecomSubcategory;
}

// Example usage
const exampleQuery: GoogleTrendsQueryParams = {
  timeRange: GoogleTrendsTimeRange.PAST_7_DAYS,
  geo: GoogleTrendsGeo.UNITED_STATES,
  searchType: GoogleTrendsSearchType.WEB_SEARCH,
  category: GoogleTrendsMainCategory.COMPUTERS_AND_ELECTRONICS,
  subcategory: GoogleTrendsComputersElectronicsSubcategory.PROGRAMMING,
};