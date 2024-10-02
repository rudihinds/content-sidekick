import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { faker } from "@faker-js/faker";
import { MessageCircle, Plus, GripVertical, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';

interface CreateSectionProps {
  mainSearch: string;
  relatedSearch: string;
  videoTopics: string[];
  talkingPoints: { id: string; content: string; summary: string }[];
  selectedContentType: string; // Add this line
  onBack: () => void;
  onSave: () => void;
}

interface Idea {
  id: string;
  content: string;
  topicId: string;
}

function SortableItem({
  id,
  idea,
  onRemove,
}: {
  id: string;
  idea: Idea;
  onRemove: (idea: Idea) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex items-center"
    >
      <div className="mr-2 cursor-move">
        <GripVertical size={20} className="text-gray-400" />
      </div>
      <Card className="flex-grow border-2 border-gray-300">
        <CardContent className="flex items-center justify-between p-4">
          <p className="text-sm text-gray-700">{idea.content}</p>
          <Button variant="ghost" size="sm" onClick={() => onRemove(idea)} className="ml-2">
            <X size={16} />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export function CreateSection({
  mainSearch,
  relatedSearch,
  videoTopics,
  talkingPoints,
  selectedContentType, // Add this line
  onBack,
  onSave,
}: CreateSectionProps) {
  const [selectedIdeas, setSelectedIdeas] = useState<Idea[]>([]);
  const [availableIdeas, setAvailableIdeas] = useState<{
    [key: string]: Idea[];
  }>({});

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  useEffect(() => {
    const initialIdeas: { [key: string]: Idea[] } = {};
    videoTopics.forEach((topic) => {
      initialIdeas[topic] = Array(3).fill(null).map(() => ({
        id: faker.string.uuid(),
        content: faker.lorem.sentence(),
        topicId: topic,
      }));
    });
    setAvailableIdeas(initialIdeas);
  }, [videoTopics]);

  const addIdea = (topic: string, idea: Idea) => {
    if (selectedIdeas.length < 8) {
      setSelectedIdeas([...selectedIdeas, idea]);
      setAvailableIdeas({
        ...availableIdeas,
        [topic]: availableIdeas[topic].filter((i) => i.id !== idea.id),
      });
    }
  };

  const removeIdea = (idea: Idea) => {
    setSelectedIdeas(selectedIdeas.filter((i) => i.id !== idea.id));
    setAvailableIdeas({
      ...availableIdeas,
      [idea.topicId]: [...availableIdeas[idea.topicId], idea],
    });
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over === null) {
      // Item was dropped outside the list
      const ideaToRemove = selectedIdeas.find(idea => idea.id === active.id);
      if (ideaToRemove) {
        removeIdea(ideaToRemove);
      }
    } else if (active.id !== over.id) {
      // Item was reordered
      setSelectedIdeas((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="flex h-full p-6 bg-white">
      <div className="w-1/2 pr-6 overflow-y-auto">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">
          Content Ideas for{" "}
          <span className="px-2 py-1 text-white bg-orange-500">{mainSearch}</span>{" "}
          and{" "}
          <span className="px-2 py-1 text-white bg-pink-500">{relatedSearch}</span>
        </h2>
        <div className="space-y-6">
          {videoTopics.map((topic, index) => {
            const talkingPoint = talkingPoints.find((tp) => tp.content === topic);
            return (
              <Card key={index} className="overflow-hidden border-4 border-gray-900">
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-bold text-gray-900 truncate">{topic}</h3>
                  <ul className="mb-4 space-y-4">
                    {availableIdeas[topic]?.map((idea, ideaIndex) => (
                      <li key={idea.id} className="flex items-start justify-between text-sm text-gray-700">
                        <div>
                          <span className="font-bold text-gray-900">Idea {ideaIndex + 1}:</span>{" "}
                          {idea.content}
                        </div>
                        <Button
                          onClick={() => addIdea(topic, idea)}
                          className="p-1 ml-2"
                          variant="outline"
                          disabled={selectedIdeas.length >= 8}
                        >
                          <Plus size={16} />
                        </Button>
                      </li>
                    ))}
                  </ul>
                  <Tooltip.Provider>
                    <Tooltip.Root>
                      <Tooltip.Trigger asChild>
                        <button className="flex items-center text-sm font-bold text-gray-700 hover:text-gray-900">
                          <MessageCircle size={18} className="mr-2" />
                          View Summary
                        </button>
                      </Tooltip.Trigger>
                      <Tooltip.Portal>
                        <Tooltip.Content
                          className="max-w-md p-4 text-sm bg-white border-2 border-gray-900 rounded"
                          sideOffset={5}
                        >
                          {talkingPoint?.summary || "No summary available."}
                          <Tooltip.Arrow className="fill-gray-900" />
                        </Tooltip.Content>
                      </Tooltip.Portal>
                    </Tooltip.Root>
                  </Tooltip.Provider>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="w-1/2 pl-6 border-l-4 border-gray-900">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Build Content Plan</h2>
        <DndContext 
          sensors={sensors} 
          collisionDetection={closestCenter} 
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext items={selectedIdeas} strategy={verticalListSortingStrategy}>
            <div className="space-y-4">
              {selectedIdeas.map((idea) => (
                <SortableItem key={idea.id} id={idea.id} idea={idea} onRemove={removeIdea} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
      <div className="fixed flex justify-end space-x-4 bottom-6 right-6">
        <Button
          onClick={onBack}
          variant="outline"
          className="px-6 py-2 text-base font-bold text-gray-900 border-4 border-gray-900 hover:bg-gray-900 hover:text-white"
        >
          Back
        </Button>
        <Button
          onClick={onSave}
          className="px-6 py-2 text-base font-bold text-white bg-orange-500 border-4 border-gray-900 hover:bg-orange-600"
        >
          Save Content
        </Button>
      </div>
    </div>
  );
}