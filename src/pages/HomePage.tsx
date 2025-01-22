import React from "react";
import { Thread } from "../types/types";
import ThreadList from "../components/ThreadList";

interface HomePageProps {
  threads: Thread[];
  onThreadClick: (id: number) => void;
  loggedInUsername: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ threads, onThreadClick, loggedInUsername }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Threads</h2>
      <ThreadList threads={threads} onThreadClick={onThreadClick} />
    </div>
  );
};

export default HomePage;
