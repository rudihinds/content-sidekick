import React from 'react';
import { Button } from "@/components/ui/button";
import { Search, LayoutDashboard, Lightbulb, FileText, Eye, Settings } from "lucide-react";

const pages = ['Dashboard', 'Related Searches', 'Talking Points', 'Content Ideas', 'Review'];

interface SidebarProps {
  currentPageIndex: number;
  setCurrentPageIndex: (index: number) => void;
}

export function Sidebar({ currentPageIndex, setCurrentPageIndex }: SidebarProps) {
  const getIcon = (page: string) => {
    switch (page) {
      case 'Dashboard': return <Search className="w-4 h-4 mr-2" />;
      case 'Related Searches': return <LayoutDashboard className="w-4 h-4 mr-2" />;
      case 'Talking Points': return <Lightbulb className="w-4 h-4 mr-2" />;
      case 'Content Ideas': return <FileText className="w-4 h-4 mr-2" />;
      case 'Review': return <Eye className="w-4 h-4 mr-2" />;
      default: return <Settings className="w-4 h-4 mr-2" />;
    }
  };

  return (
    <aside className="w-64 p-4 overflow-y-auto bg-muted">
      <nav className="space-y-2">
        {pages.map((page, index) => (
          <Button
            key={page}
            variant={currentPageIndex === index ? "secondary" : "ghost"}
            className="justify-start w-full"
            onClick={() => setCurrentPageIndex(index)}
          >
            {getIcon(page)}
            {page}
          </Button>
        ))}
      </nav>
    </aside>
  );
}