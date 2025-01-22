import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ThreadPage from "./pages/ThreadPage";
import AddThreadPage from "./pages/AddThreadPage";
import { Thread } from "./types/types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [threads, setThreads] = useState<Thread[]>([
    { id: 1, title: "New Lifters!", description: "Introduce yourself here!" },
    { id: 2, title: "Latest Discussions", description: "Discuss your lifting knowledge" },
    { id: 3, title: "Useful Tips", description: "Students' tips and tricks." },
  ]);
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setLoggedInUsername(username);
      setCurrentPage("home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleAddThread = () => {
    if (!loggedInUsername) {
      setCurrentPage("login"); // Redirect to login if not logged in
    } else {
      setCurrentPage("addthread"); // Redirect to add thread page if logged in
    }
  };

  const saveNewThread = (title: string, content: string) => {
    const newThread = { id: threads.length + 1, title, description: content };
    setThreads([...threads, newThread]);
    setCurrentPage("home"); // Redirect back to the home page after saving
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            threads={threads}
            onThreadClick={(id) => {
              setSelectedThreadId(id);
              setCurrentPage("thread");
            }}
            loggedInUsername={loggedInUsername}
          />
        );
      case "login":
        return <LoginPage onLogin={handleLogin} />;
      case "thread":
        return (
          <ThreadPage
            threadId={selectedThreadId as number}
            threads={threads}
          />
        );
      case "addthread":
        return <AddThreadPage onSaveThread={saveNewThread} />;
      default:
        return <HomePage threads={threads} onThreadClick={() => setCurrentPage("thread")} />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentPage} onAddThread={handleAddThread} />
      <main style={{ width: "80%", margin: "20px auto" }}>{renderPage()}</main>
    </div>
  );
};

export default App;
