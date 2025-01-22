import React from "react";
import { Thread } from "../types/types";

interface ThreadPageProps {
  threadId: number;
  threads: Thread[];
}

const ThreadPage: React.FC<ThreadPageProps> = ({ threadId, threads }) => {
  const thread = threads.find((t) => t.id === threadId);

  if (!thread) {
    return <p>Thread not found.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{thread.title}</h2>
      <p>{thread.description}</p>
    </div>
  );
};

export default ThreadPage;
