import React from "react";
import { Thread } from "../types/types";

interface ThreadCardProps {
  thread: Thread;
  onClick: (id: number) => void; // Function to handle thread click
}

const ThreadCard: React.FC<ThreadCardProps> = ({ thread, onClick }) => {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: "15px",
        background: "#fff",
        cursor: "pointer", // Make it clear it's clickable
      }}
      onClick={() => onClick(thread.id)} // Call the onClick function to navigate to the thread
    >
      <h3>{thread.title}</h3>
      <p>{thread.description}</p>
      <p>Category: {thread.category}</p>
    </div>
  );
};

export default ThreadCard;
