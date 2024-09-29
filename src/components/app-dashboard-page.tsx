'use client'

import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, LayoutDashboard, Lightbulb, Settings, Thermometer, ChevronDown, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type TalkingPoint = {
  id: string
  content: string
}

type ContentIdea = {
  id: string
  title: string
}

type TrendData = {
  term: string
  trend: number[]
}

const timeRanges = [
  'Past hour',
  'Past 4 hours',
  'Past 24 hours',
  'Past 7 days',
  'Past 30 days',
  'Past 90 days',
  'Past 12 months',
  'Past 5 years',
  '2008-today'
]

export function Page() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('related')
  const [searchTerm, setSearchTerm] = useState(searchParams.get('term') || '')
  const [selectedSearch, setSelectedSearch] = useState('')
  const [selectedTimeRange, setSelectedTimeRange] = useState(timeRanges[3]) // Default to 'Past 7 days'
  const [relatedSearches, setRelatedSearches] = useState<string[]>([
    'virat kohli', 'fatal fury', 'jr', 'wife', 'search term',
    'cooking recipes', 'diy projects', 'fitness routines',
    'travel destinations', 'tech reviews', 'music tutorials',
    'gardening tips', 'language learning', 'home workouts',
    'book recommendations', 'movie reviews', 'gaming strategies'
  ])
  const [trendingData, setTrendingData] = useState<TrendData[]>([
    { term: 'virat kohli', trend: [10, 20, 30, 40, 50] },
    { term: 'fatal fury', trend: [50, 40, 30, 20, 10] },
    { term: 'jr', trend: [10, 30, 50, 30, 10] },
    { term: 'wife', trend: [20, 40, 60, 40, 20] },
    { term: 'search term', trend: [30, 20, 40, 50, 60] },
  ])

  const [mainSearch, setMainSearch] = useState(searchParams.get('term') || 'Cristiano Ronaldo')
  const [relatedSearch, setRelatedSearch] = useState('Fatal Fury')
  const [talkingPoints, setTalkingPoints] = useState<TalkingPoint[]>([
    { id: '1', content: 'Will he be in the game' },
    { id: '2', content: 'Marketing Impact' },
    { id: '3', content: 'Reaction to the Crossover' },
    { id: '4', content: "Speculation on Ronaldo's Role" },
    { id: '5', content: 'Potential New Audience' },
    { id: '6', content: 'Game Mechanics Adaptation' },
    { id: '7', content: 'Collaboration Precedent' },
    { id: '8', content: 'Fan Art Explosion' },
    { id: '9', content: 'Meme Potential' },
    { id: '10', content: 'Esports Implications' },
    { id: '11', content: 'Cultural Impact' },
    { id: '12', content: 'Merchandise Opportunities' },
  ])
  const [selectedTalkingPoints, setSelectedTalkingPoints] = useState<Set<string>>(new Set())
  const [heatScore, setHeatScore] = useState(7)
  const [videoTopics, setVideoTopics] = useState<string[]>([])
  const [selectedContentType, setSelectedContentType] = useState('Tutorials')
  const [generatedIdeas, setGeneratedIdeas] = useState<ContentIdea[]>([])

  const talkingPointsScrollRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      if (talkingPointsScrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = talkingPointsScrollRef.current
        setShowLeftArrow(scrollLeft > 0)
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
      }
    }

    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    if (talkingPointsScrollRef.current) {
      const scrollAmount = talkingPointsScrollRef.current.clientWidth / 2
      talkingPointsScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleNewSearch = () => {
    if (searchTerm.trim()) {
      // Fetch new data here
      console.log('Searching for:', searchTerm)
    }
  }

  const handleGetContentIdeas = (term: string) => {
    if (videoTopics.length < 8) {
      setVideoTopics([...videoTopics, term])
    }
    setActiveTab('ideas')
  }

  const handleSelectSearch = (term: string) => {
    setSelectedSearch(term)
  }

  const handleTimeRangeChange = (range: string) => {
    setSelectedTimeRange(range)
    // Here you would typically fetch new data based on the selected time range
    console.log('Fetching data for time range:', range)
  }

  const getSelectedTrendData = () => {
    return trendingData.find(data => data.term === selectedSearch) || trendingData[0]
  }

  const handleSelectTalkingPoint = (point: TalkingPoint) => {
    setSelectedTalkingPoints(prev => {
      const newSet = new Set(prev)
      if (newSet.has(point.id)) {
        newSet.delete(point.id)
      } else {
        newSet.add(point.id)
      }
      return newSet
    })
  }

  const handleAddVideoTopic = () => {
    const selectedPoints = talkingPoints.filter(point => selectedTalkingPoints.has(point.id))
    selectedPoints.forEach(point => {
      if (!videoTopics.includes(point.content) && videoTopics.length < 8) {
        setVideoTopics(prev => [...prev, point.content])
      }
    })
  }

  const handleRemoveVideoTopic = (topic: string) => {
    setVideoTopics(videoTopics.filter(t => t !== topic))
  }

  const handleGenerateIdeas = () => {
    // In a real app, you'd generate ideas based on the selected content type and video topics
    setGeneratedIdeas([
      { id: '1', title: 'How Ronaldo's moves translate to Fatal Fury gameplay' },
      { id: '2', title: 'Analyzing the marketing strategy behind the Ronaldo x Fatal Fury collab' },
      { id: '3', title: 'Fan reactions: Ronaldo in Fatal Fury - Hit or Miss?' },
    ])
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'search':
        return (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">New Search</h2>
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
        )
      case 'related':
        return (
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Related YouTube Searches</h2>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="ml-auto">
                        {selectedTimeRange} <ChevronDown className="ml-2 h-4 w-4" />
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
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                      onClick={() => handleScroll('left')}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                  )}
                  {showRightArrow && (
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                      onClick={() => handleScroll('right')}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  )}
                  <div
                    ref={talkingPointsScrollRef}
                    className="overflow-x-auto scrollbar-hide -mx-6 px-6"
                    onScroll={() => {
                      if (talkingPointsScrollRef.current) {
                        const { scrollLeft, scrollWidth, clientWidth } = talkingPointsScrollRef.current
                        setShowLeftArrow(scrollLeft > 0)
                        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
                      }
                    }}
                  >
                    <div className="inline-flex flex-col space-y-4 py-4">
                      <div className="flex space-x-4">
                        {relatedSearches.slice(0, Math.ceil(relatedSearches.length / 2)).map((search, index) => (
                          <div
                            key={index}
                            className={`w-64 p-4 bg-secondary rounded-lg cursor-pointer transition-all ${
                              selectedSearch === search ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => handleSelectSearch(search)}
                          >
                            <div className="font-medium mb-2">{search}</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-sm text-muted-foreground">Searches: 10K</div>
                              <div className="text-sm text-muted-foreground">Views: 500K</div>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full mt-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleGetContentIdeas(search)
                              }}
                            >
                              Get Ideas
                            </Button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        {relatedSearches.slice(Math.ceil(relatedSearches.length / 2)).map((search, index) => (
                          <div
                            key={index}
                            className={`w-64 p-4 bg-secondary rounded-lg cursor-pointer transition-all ${
                              selectedSearch === search ? 'ring-2 ring-primary' : ''
                            }`}
                            onClick={() => handleSelectSearch(search)}
                          >
                            <div className="font-medium mb-2">{search}</div>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="text-sm text-muted-foreground">Searches: 10K</div>
                              <div className="text-sm text-muted-foreground">Views: 500K</div>
                            </div>
                            <Button 
                              size="sm" 
                              className="w-full mt-2"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleGetContentIdeas(search)
                              }}
                            >
                              Get Ideas
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Trending Data for {selectedSearch || 'Selected Term'}</h2>
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
        )
      case 'ideas':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="md:col-span-2">
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="text-2xl font-bold mb-4">What people are saying about {mainSearch} and {relatedSearch}</h2>
                  <div className="relative flex-grow">
                    <div
                      ref={talkingPointsScrollRef}
                      className="h-full overflow-y-auto scrollbar-hide"
                      onScroll={() => {
                        if (talkingPointsScrollRef.current) {
                          const { scrollTop, scrollHeight, clientHeight } = talkingPointsScrollRef.current
                          setShowLeftArrow(scrollTop > 0)
                          setShowRightArrow(scrollTop < scrollHeight - clientHeight - 1)
                        }
                      }}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {talkingPoints.map((point) => (
                          <Button
                            key={point.id}
                            variant="outline"
                            className={`h-auto text-left justify-start px-3 py-2 ${
                              selectedTalkingPoints.has(point.id) ? 'bg-primary text-primary-foreground' : ''
                            }`}
                            onClick={() => handleSelectTalkingPoint(point)}
                          >
                            <span className="truncate">{point.content}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                    {showLeftArrow && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                        onClick={() => handleScroll('left')}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                    )}
                    {showRightArrow && (
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        onClick={() => handleScroll('right')}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    {selectedTalkingPoints.size > 0 && (
                      <h3 className="text-xl font-semibold">
                        {talkingPoints.find(p => p.id === Array.from(selectedTalkingPoints)[0])?.content}
                      </h3>
                    )}
                    <div className="flex items-center">
                      <span className="text-sm font-medium mr-2">Heat Score:</span>
                      <Badge variant="outline" className="text-orange-500">
                        <Thermometer className="w-4 h-4 mr-1" />
                        {heatScore}/10
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {selectedTalkingPoints.size > 0
                      ? "Several users discuss how Ronaldo's involvement with Fatal Fury will bring significant attention to the game. Many believe this collaboration is a calculated marketing move by SNK to attract a larger audience, especially those unfamiliar with the fighting game genre."
                      : "Select a talking point to see a summary."}
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={handleAddVideoTopic}
                    disabled={selectedTalkingPoints.size === 0 || videoTopics.length >= 8}
                  >
                    Choose topic(s) for video content
                  </Button>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">My Video Topics (maximum 8)</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {Array(8).fill(null).map((_, index) => (
                      <div key={index} className="p-2 bg-secondary rounded-lg flex justify-between items-center">
                        {videoTopics[index] ? (
                          <>
                            <span className="truncate">{videoTopics[index]}</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRemoveVideoTopic(videoTopics[index])}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <span className="text-xs text-muted-foreground">Choose topics above</span>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Choose a content type</h2>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {['Tutorials', 'Vlogs', 'Podcasts', 'Shorts'].map((type) => (
                      <Button
                        key={type}
                        variant={selectedContentType === type ? 'default' : 'outline'}
                        onClick={() => setSelectedContentType(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      case 'create':
        return (
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">
                {selectedContentType} content ideas ({mainSearch} + {relatedSearch})
              </h2>
              <Button className="w-full mb-4" onClick={handleGenerateIdeas}>
                Generate Video Ideas
              </Button>
              <div className="space-y-2">
                {generatedIdeas.map((idea) => (
                  <div key={idea.id} className="p-2 bg-secondary rounded-lg">
                    {idea.title}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )
      default:
        return <div>Select a tab</div>
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-muted p-4">
        <nav className="space-y-2">
          <Button
            variant={activeTab === 'search' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('search')}
          >
            <Search className="mr-2 h-4 w-4" />
            New Search
          </Button>
          <Button
            variant={activeTab === 'related' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('related')}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Related Searches
          </Button>
          <Button
            variant={activeTab === 'ideas' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('ideas')}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Content Ideas
          </Button>
          <Button
            variant={activeTab === 'create' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('create')}
          >
            <Lightbulb className="mr-2 h-4 w-4" />
            Create
          </Button>
          <Button
            variant={activeTab === 'settings' ? 'secondary' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-8">Content Idea Generator</h1>
        {renderContent()}
      </main>
    </div>
  )
}