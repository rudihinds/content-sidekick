import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, LayoutDashboard, Lightbulb, Settings } from "lucide-react";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 p-4 overflow-y-auto bg-muted">
      <nav className="space-y-2">
        <Button
          variant={activeTab === "search" ? "secondary" : "ghost"}
          className="justify-start w-full"
          onClick={() => setActiveTab("search")}
        >
          <Search className="w-4 h-4 mr-2" />
          New Search
        </Button>
        <Button
          variant={activeTab === "related" ? "secondary" : "ghost"}
          className="justify-start w-full"
          onClick={() => setActiveTab("related")}
        >
          <LayoutDashboard className="w-4 h-4 mr-2" />
          Related Searches
        </Button>
        <Button
          variant={activeTab === "ideas" ? "secondary" : "ghost"}
          className="justify-start w-full"
          onClick={() => setActiveTab("ideas")}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Content Ideas
        </Button>
        <Button
          variant={activeTab === "create" ? "secondary" : "ghost"}
          className="justify-start w-full"
          onClick={() => setActiveTab("create")}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          Create
        </Button>
        <Button
          variant={activeTab === "settings" ? "secondary" : "ghost"}
          className="justify-start w-full"
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="w-4 h-4 mr-2" />
          Settings
        </Button>
      </nav>
    </aside>
  );
}