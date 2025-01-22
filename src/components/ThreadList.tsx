import React from "react";
import { Thread } from "../types/types";

interface ThreadListProps {
  threads: Thread[];
  onThreadClick: (id: number) => void;
}

const ThreadList: React.FC<ThreadListProps> = ({ threads, onThreadClick }) => {
  return (
    <div>
      {threads.map((thread) => (
        <div
          key={thread.id}
          className="thread-card"
          onClick={() => onThreadClick(thread.id)}
        >
          <div className="thread-title">{thread.title}</div>
        </div>
      ))}
    </div>
  );
};

export default ThreadList;
