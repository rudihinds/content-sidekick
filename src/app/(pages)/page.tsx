"use client";

import { useState, useRef, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useVideoTopics } from "@/hooks/useVideoTopics";
import { TalkingPoint, ContentIdea, TrendData } from "@/types";
import { SearchSection } from "@/components/SearchSection";
import { RelatedSection } from "@/components/RelatedSection";
import { CreateSection } from "@/components/CreateSection";
import { IdeasSection } from "@/components/IdeasSection";
import { Sidebar } from "@/components/Sidebar";
import { faker } from '@faker-js/faker';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const timeRanges = [
  "Past hour",
  "Past 4 hours",
  "Past 24 hours",
  "Past 7 days",
  "Past 30 days",
  "Past 90 days",
  "Past 12 months",
  "Past 5 years",
  "2008-today",
];

const talkingPointsData = [
  {
    id: "1",
    content: "Will he be in the game",
    heatScore: 9,
    summary:
      "Fans are buzzing with excitement over the possibility of Cristiano Ronaldo appearing as a playable character in Fatal Fury. Social media is flooded with speculation about his potential moves and special abilities, drawing parallels between his football skills and fighting game mechanics.",
  },
  {
    id: "2",
    content: "Marketing Impact",
    heatScore: 8,
    summary:
      "Industry experts are discussing the massive marketing potential of Ronaldo's involvement with Fatal Fury. Many predict a significant boost in game sales and a surge in interest from football fans who may not typically engage with fighting games.",
  },
  {
    id: "3",
    content: "Reaction to the Crossover",
    heatScore: 7,
    summary:
      "The gaming community is divided over the Ronaldo x Fatal Fury crossover. While some praise the innovative collaboration, others express concern about maintaining the game's authenticity. The unexpected nature of this partnership has sparked numerous debates online.",
  },
  {
    id: "4",
    content: "Speculation on Ronaldo's Role",
    heatScore: 8,
    summary:
      "Gamers are actively speculating about Ronaldo's role in Fatal Fury. Theories range from him being a secret boss character to having his own storyline within the game's universe. Some even suggest he might be introduced as a mentor figure for existing characters.",
  },
  {
    id: "5",
    content: "Potential New Audience",
    heatScore: 9,
    summary:
      "Market analysts are predicting a significant influx of new players to Fatal Fury, primarily from Ronaldo's massive fanbase. This potential new audience is expected to diversify the game's player base and potentially influence future game development decisions.",
  },
  {
    id: "6",
    content: "Game Mechanics Adaptation",
    heatScore: 7,
    summary:
      "Game designers and fans alike are discussing how Ronaldo's football skills could translate into Fatal Fury's fighting mechanics. Ideas include special moves inspired by his famous dribbles or a 'bicycle kick' as an ultimate attack, blending sports and fighting game elements.",
  },
  {
    id: "7",
    content: "Collaboration Precedent",
    heatScore: 6,
    summary:
      "The Ronaldo x Fatal Fury collaboration is being viewed as a potential trendsetter in the gaming industry. Discussions are emerging about other possible sports star and video game crossovers, with many wondering if this could become a new norm in game marketing.",
  },
  {
    id: "8",
    content: "Fan Art Explosion",
    heatScore: 8,
    summary:
      "Social media platforms are seeing a surge in fan art depicting Ronaldo in the Fatal Fury universe. Artists are reimagining the football star in various fighting poses and outfits, blending his athletic image with the game's distinct visual style.",
  },
  {
    id: "9",
    content: "Meme Potential",
    heatScore: 7,
    summary:
      "The unexpected nature of Ronaldo joining Fatal Fury has sparked a wave of memes across social media. Fans are creatively combining Ronaldo's famous poses and quotes with Fatal Fury characters and situations, adding a humorous dimension to the collaboration.",
  },
  {
    id: "10",
    content: "Esports Implications",
    heatScore: 6,
    summary:
      "The esports community is debating how Ronaldo's inclusion in Fatal Fury might impact competitive play. Some speculate about potential tournament rule changes, while others discuss how this could attract more mainstream attention to fighting game competitions.",
  },
  {
    id: "11",
    content: "Cultural Impact",
    heatScore: 7,
    summary:
      "Cultural commentators are analyzing the significance of a football icon entering the fighting game genre. Discussions revolve around how this crossover reflects changing entertainment landscapes and the increasing convergence of sports and gaming cultures.",
  },
  {
    id: "12",
    content: "Merchandise Opportunities",
    heatScore: 8,
    summary:
      "Retail experts are predicting a boom in merchandise sales combining Ronaldo and Fatal Fury branding. Speculations include limited edition game controllers, crossover apparel, and collectible figurines, appealing to both gaming and football fan markets.",
  },
];

const pages = ['Dashboard', 'Related Searches', 'Talking Points', 'Content Ideas', 'Review'];

export default function Dashboard() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("related");
  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");
  const [selectedSearch, setSelectedSearch] = useState("");
  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRanges[3]); // Default to 'Past 7 days'
  const [relatedSearches, setRelatedSearches] = useState<string[]>([
    "virat kohli",
    "fatal fury",
    "jr",
    "wife",
    "search term",
    "cooking recipes",
    "diy projects",
    "fitness routines",
    "travel destinations",
    "tech reviews",
    "music tutorials",
    "gardening tips",
    "language learning",
    "home workouts",
    "book recommendations",
    "movie reviews",
    "gaming strategies",
  ]);
  const [trendingData, setTrendingData] = useState<TrendData[]>([
    { term: "virat kohli", trend: [10, 20, 30, 40, 50] },
    { term: "fatal fury", trend: [50, 40, 30, 20, 10] },
    { term: "jr", trend: [10, 30, 50, 30, 10] },
    { term: "wife", trend: [20, 40, 60, 40, 20] },
    { term: "search term", trend: [30, 20, 40, 50, 60] },
  ]);

  const [mainSearch, setMainSearch] = useState(
    searchParams.get("term") || "Cristiano Ronaldo"
  );
  const [relatedSearch, setRelatedSearch] = useState("Fatal Fury");
  const [talkingPoints, setTalkingPoints] =
    useState<TalkingPoint[]>(talkingPointsData);
  const [selectedTalkingPoints, setSelectedTalkingPoints] = useState<
    Set<string>
  >(new Set());
  const [heatScore, setHeatScore] = useState(7);
  const [selectedContentType, setSelectedContentType] = useState("Tutorials");
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([]);

  const talkingPointsScrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const { videoTopics, addVideoTopic, removeVideoTopic } = useVideoTopics();

  const [currentPageIndex, setCurrentPageIndex] = useState(1); // Start at 'Related'

  const handleBack = () => {
    setCurrentPageIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentPageIndex((prevIndex) => Math.min(pages.length - 1, prevIndex + 1));
  };

  useEffect(() => {
    const checkScroll = () => {
      if (talkingPointsScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          talkingPointsScrollRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (talkingPointsScrollRef.current) {
      const scrollAmount = talkingPointsScrollRef.current.clientWidth / 2;
      talkingPointsScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleNewSearch = () => {
    if (searchTerm.trim()) {
      // Fetch new data here
      console.log("Searching for:", searchTerm);
    }
  };

  const handleGetContentIdeas = (term: string) => {
    if (videoTopics.length < 8) {
      addVideoTopic(term);
    }
    setActiveTab("ideas");
  };

  const handleSelectSearch = (term: string) => {
    setSelectedSearch(term);
  };

  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range);
    // Here you would typically fetch new data based on the selected time range
    console.log("Fetching data for time range:", range);
  };

  const getSelectedTrendData = () => {
    return (
      trendingData.find((data) => data.term === selectedSearch) ||
      trendingData[0]
    );
  };

  const handleSelectTalkingPoint = (point: TalkingPoint) => {
    setSelectedTalkingPoints((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(point.id)) {
        newSet.delete(point.id);
        removeVideoTopic(videoTopics.indexOf(point.content));
      } else if (newSet.size < 8) {
        newSet.add(point.id);
        addVideoTopic(point.content);
      }
      return newSet;
    });
  };

  const handleGenerateIdeas = () => {
    // In a real app, you'd generate ideas based on the selected content type and video topics
    setGeneratedIdeas([
      {
        id: "1",
        title: "How Ronaldo's moves translate to Fatal Fury gameplay",
      },
      {
        id: "2",
        title:
          "Analyzing the marketing strategy behind the Ronaldo x Fatal Fury collab",
      },
      { id: "3", title: "Fan reactions: Ronaldo in Fatal Fury - Hit or Miss?" },
    ]);
  };

  const renderContent = () => {
    switch (pages[currentPageIndex]) {
      case 'Dashboard':
        return (
          <SearchSection
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleNewSearch={handleNewSearch}
          />
        );
      case 'Related Searches':
        return (
          <RelatedSection
            selectedTimeRange={selectedTimeRange}
            timeRanges={timeRanges}
            handleTimeRangeChange={handleTimeRangeChange}
            relatedSearches={relatedSearches}
            selectedSearch={selectedSearch}
            handleSelectSearch={handleSelectSearch}
            handleGetContentIdeas={handleGetContentIdeas}
            trendingData={trendingData}
            onBack={handleBack}
            onNext={handleNext}
            mainSearch={mainSearch} // Make sure this line is present
          />
        );
      case 'Talking Points':
        return (
          <IdeasSection
            mainSearch={mainSearch}
            relatedSearch={relatedSearch}
            talkingPoints={talkingPoints}
            selectedTalkingPoints={selectedTalkingPoints}
            handleSelectTalkingPoint={handleSelectTalkingPoint}
            videoTopics={videoTopics}
            removeVideoTopic={removeVideoTopic}
            selectedContentType={selectedContentType}
            setSelectedContentType={setSelectedContentType}
            onBack={handleBack}
            onNext={handleNext}
          />
        );
      case 'Content Ideas':
        return (
          <CreateSection
            selectedContentType={selectedContentType}
            mainSearch={mainSearch}
            relatedSearch={relatedSearch}
            videoTopics={videoTopics}
            talkingPoints={talkingPoints}
          />
        );
      case 'Review':
        return <div>Review content goes here</div>;
      default:
        return <div>Select a page</div>;
    }
  };

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar 
        currentPageIndex={currentPageIndex}
        setCurrentPageIndex={setCurrentPageIndex}
      />
      <main className="flex-1 p-8 overflow-hidden">
        <div className="h-full overflow-auto">{renderContent()}</div>
      </main>
    </div>
  );
}