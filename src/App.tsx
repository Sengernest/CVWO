import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import ThreadPage from "./pages/ThreadPage";
import AddThreadPage from "./pages/AddThreadPage";
import EditThreadPage from "./pages/EditThreadPage";
import EditCommentPage from "./pages/EditCommentPage";
import AddCommentPage from "./pages/AddCommentPage";
import { Thread } from "./types/types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      title: "New Lifters!",
      description: "Introduce yourself here!",
      category: "training",
      comments: ["Great thread!", "Looking forward to joining."],
    },
    {
      id: 2,
      title: "Latest Discussions",
      description: "Discuss your lifting knowledge",
      category: "advice",
      comments: ["I'm all in!", "I need some tips."],
    },
    {
      id: 3,
      title: "Useful Tips",
      description: "Students' tips and tricks.",
      category: "advice",
      comments: [],
    },
  ]);
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<number | null>(null);
  const [newCommentText, setNewCommentText] = useState<string>("");


  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setLoggedInUsername(username);
      setCurrentPage("home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleCreateAccount = (username: string, password: string) => {
    alert(`Account created for ${username}`); 
    setCurrentPage("login");
  };

  const handleAddComment = (threadId: number, commentText: string) => {
    if (commentText.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId
          ? { ...thread, comments: [...thread.comments, commentText] }
          : thread
      )
    );
    setNewCommentText("");
    setCurrentPage("thread"); 
  };

  const handleEditThread = (id: number, updatedTitle: string, updatedDescription: string, updatedCategory: string) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === id
          ? { ...thread, title: updatedTitle, description: updatedDescription, category: updatedCategory }
          : thread
      )
    );
    setCurrentPage("thread");
  };

  const handleLogout = () => {
    setLoggedInUsername(null); 
    window.location.reload(); 
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
        return (
          <LoginPage
            onLogin={handleLogin}
            onCreateAccount={() => setCurrentPage("createaccount")} 
          />
        );
      case "createaccount":
        return (
          <CreateAccountPage
            onCreateAccountSubmit={handleCreateAccount}
          />
        );
      case "thread":
        return (
          <ThreadPage
            threadId={selectedThreadId as number}
            threads={threads}
            loggedInUsername={loggedInUsername}
            onDeleteThread={(threadId) => {
              setThreads(threads.filter((thread) => thread.id !== threadId));
              setCurrentPage("home");
            }}
            onEditThread={() => setCurrentPage("editthread")} 
            onAddComment={() => {
              setCurrentPage("addcomment");
            }}
            onEditComment={(commentIndex) => {
              setSelectedCommentIndex(commentIndex);
              setCurrentPage("editcomment");
            }}
          />
        );
      case "editthread":
        if (selectedThreadId !== null) {
          const thread = threads.find((t) => t.id === selectedThreadId);
          if (thread) {
            return (
              <EditThreadPage
                threadId={selectedThreadId}
                title={thread.title}
                description={thread.description}
                category={thread.category}
                onSaveEdit={handleEditThread}
                onCancelEdit={() => setCurrentPage("thread")}
              />
            );
          }
        }
        return <div>Thread not found</div>;
      case "addthread":
        return (
          <AddThreadPage
            onSaveThread={(title, description, category) => {
              const newThread = {
                id: threads.length + 1,
                title,
                description,
                category,
                comments: [],
              };
              setThreads([...threads, newThread]);
              setCurrentPage("home");
            }}
          />
        );
      case "addcomment":
        return (
          <AddCommentPage
            threadId={selectedThreadId as number}
            commentText={newCommentText}
            setCommentText={setNewCommentText}
            onSaveComment={handleAddComment} 
            onCancel={() => setCurrentPage("thread")} 
          />
        );
      default:
        return <HomePage threads={threads} onThreadClick={() => {}} loggedInUsername={loggedInUsername} />;
    }
  };

  return (
    <div>
      <Header
        onNavigate={setCurrentPage}
        onAddThread={() => setCurrentPage("addthread")}
        loggedInUsername={loggedInUsername}
        onLogout={handleLogout} 
      />
      <main style={{ width: "80%", margin: "20px auto" }}>{renderPage()}</main>
    </div>
  );
};

export default App;
