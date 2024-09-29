import { useState } from 'react';

export function useVideoTopics(initialTopics: string[] = []) {
  const [videoTopics, setVideoTopics] = useState<string[]>(initialTopics);

  const addVideoTopic = (topic: string) => {
    if (videoTopics.length < 8 && !videoTopics.includes(topic)) {
      setVideoTopics([...videoTopics, topic]);
    }
  };

  const removeVideoTopic = (index: number) => {
    setVideoTopics(videoTopics.filter((_, i) => i !== index));
  };

  return {
    videoTopics,
    addVideoTopic,
    removeVideoTopic,
  };
}