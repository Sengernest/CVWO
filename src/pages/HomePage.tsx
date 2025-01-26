import React, { useState } from "react";
import { Thread } from "../types/types";
import ThreadList from "../components/ThreadList";

interface HomePageProps {
  threads: Thread[];
  onThreadClick: (id: number) => void;
  loggedInUsername: string | null;
}

const HomePage: React.FC<HomePageProps> = ({ threads, onThreadClick, loggedInUsername }) => {
  const [filter, setFilter] = useState<string>("all"); 
  
  const getFilteredThreads = () => {
    if (filter === "all") {
      return threads; 
    }
    return threads.filter((thread) => thread.category === filter); 
  };

  return (
    <div style={{ padding: "20px" }}>

      {/* Category filter buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("all")}
          style={{
            padding: "10px 20px",
            backgroundColor: filter === "all" ? "#28a745" : "#6c757d", 
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
            backgroundColor: filter === "training" ? "#007bff" : "#6c757d", 
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
            backgroundColor: filter === "diet" ? "#ffc107" : "#6c757d", 
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Diet
        </button>
        <button
          onClick={() => setFilter("recovery")}
          style={{
            padding: "10px 20px",
            backgroundColor: filter === "recovery" ? "#17a2b8" : "#6c757d", 
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Recovery
        </button>
      </div>

      
      <ThreadList threads={getFilteredThreads()} onThreadClick={onThreadClick} />
    </div>
  );
};

export default HomePage;
