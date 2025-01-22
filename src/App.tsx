import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ThreadPage from "./pages/ThreadPage";

interface Thread {
  id: number;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [threads, setThreads] = useState<Thread[]>([
    { id: 1, title: "New Lifters!", description: "Introduce yourself here!" },
    { id: 2, title: "Latest Discussions", description: "Discuss your lifting knowledge" },
    { id: 3, title: "Useful Tips", description: "Students' tips and tricks." },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      setCurrentPage("home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <HomePage
            threads={threads}
            onThreadClick={(id) => setCurrentPage("thread")}
          />
        );
      case "login":
        return <LoginPage onLogin={handleLogin} />;
      case "thread":
        return <ThreadPage />;
      default:
        return <HomePage threads={threads} onThreadClick={() => setCurrentPage("thread")} />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentPage} />
      <main style={{ width: "80%", margin: "20px auto" }}>{renderPage()}</main>
    </div>
  );
};

export default App;
