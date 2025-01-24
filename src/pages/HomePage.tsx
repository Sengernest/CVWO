import React, { useState } from "react";
import { Thread } from "../types/types";
import ThreadList from "../components/ThreadList";

interface HomePageProps {
  threads: Thread[];
  onThreadClick: (id: number) => void;
  loggedInUsername: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ threads, onThreadClick, loggedInUsername }) => {
  const [filter, setFilter] = useState<string>("all"); // State to track selected filter

  // Function to get filtered threads based on the selected category
  const getFilteredThreads = () => {
    if (filter === "all") {
      return threads; // Return all threads
    }
    return threads.filter((thread) => thread.category === filter); // Filter by category
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}>Threads</h2>

      {/* Category filter buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          All
        </button>
        <button
          onClick={() => setFilter("training")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Training
        </button>
        <button
          onClick={() => setFilter("diet")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffc107",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Diet
        </button>
        
        
      </div>

      

      {/* Pass filtered threads to ThreadList */}
      <ThreadList threads={getFilteredThreads()} onThreadClick={onThreadClick} />
    </div>
  );
};

export default HomePage;
