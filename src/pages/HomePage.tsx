import React from "react";

interface Thread {
  id: number;
  title: string;
  description: string;
}

interface HomePageProps {
  threads: Thread[];
  onThreadClick: (id: number) => void;
}

const HomePage: React.FC<HomePageProps> = ({ threads, onThreadClick }) => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "left", marginBottom: "20px" }}></h2>
      {threads.length === 0 ? (
        <p style={{ textAlign: "center" }}>No threads available.</p>
      ) : (
        <div>
          {threads.map((thread) => (
            <div
              key={thread.id}
              style={{
                marginBottom: "20px", // Space between cards
                padding: "15px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => onThreadClick(thread.id)}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1.05)";
                (e.target as HTMLElement).style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.transform = "scale(1)";
                (e.target as HTMLElement).style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  color: "#333",
                  marginBottom: "10px",
                  fontWeight: "bold",
                }}
              >
                {thread.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#666" }}>{thread.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
