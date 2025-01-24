import React, { useState } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ThreadPage from "./pages/ThreadPage";
import AddThreadPage from "./pages/AddThreadPage";
import EditThreadPage from "./pages/EditThreadPage";
import EditCommentPage from "./pages/EditCommentPage"; // Import EditCommentPage
import AddCommentPage from "./pages/AddCommentPage";"./pages/AddCommentPage";
import { Thread } from "./types/types";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      title: "New Lifters!",
      description: "Introduce yourself here!",
      comments: ["Great thread!", "Looking forward to joining."],
    },
    {
      id: 2,
      title: "Latest Discussions",
      description: "Discuss your lifting knowledge",
      comments: ["I'm all in!", "I need some tips."],
    },
    {
      id: 3,
      title: "Useful Tips",
      description: "Students' tips and tricks.",
      comments: [],
    },
  ]);
  const [loggedInUsername, setLoggedInUsername] = useState<string | null>(null);
  const [selectedThreadId, setSelectedThreadId] = useState<number | null>(null);
  const [selectedCommentIndex, setSelectedCommentIndex] = useState<number | null>(
    null
  );
  const [isAddingComment, setIsAddingComment] = useState<boolean>(false);
  const [newCommentText, setNewCommentText] = useState<string>(""); // State to track comment input text

  // Handle login logic
  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setLoggedInUsername(username);
      setCurrentPage("home");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  // Handle "Add Thread" button
  const handleAddThread = () => {
    if (!loggedInUsername) {
      setCurrentPage("login"); // Redirect to login if not logged in
    } else {
      setCurrentPage("addthread"); // Go to "Add Thread" page if logged in
    }
  };

  // Save new thread
  const saveNewThread = (title: string, description: string) => {
    const newThread = { id: threads.length + 1, title, description, comments: [] };
    setThreads((prevThreads) => [...prevThreads, newThread]);
    setCurrentPage("home"); // After saving thread, return to home page
  };

  // Save edited thread
  const saveEditedThread = (id: number, title: string, description: string) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === id ? { ...thread, title, description } : thread
      )
    );
    setCurrentPage("home");
  };

  // Handle delete thread
  const handleDeleteThread = (threadId: number) => {
    setThreads(threads.filter((thread) => thread.id !== threadId));
    setCurrentPage("home");
  };

  // Save edited comment
  const saveEditedComment = (
    threadId: number,
    commentIndex: number,
    newComment: string
  ) => {
    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              comments: thread.comments.map((comment, index) =>
                index === commentIndex ? newComment : comment
              ),
            }
          : thread
      )
    );
    setCurrentPage("thread"); // Go back to thread page after saving comment
  };

  // Handle adding a comment
  const handleAddComment = () => {
    setIsAddingComment(true); // Set state to show comment form
  };

  // Save new comment
  const handleSaveComment = (threadId: number) => {
    if (newCommentText.trim() === "") {
      alert("Comment cannot be empty!");
      return;
    }

    setThreads((prevThreads) =>
      prevThreads.map((thread) =>
        thread.id === threadId
          ? {
              ...thread,
              comments: [...thread.comments, newCommentText], // Add the actual comment text
            }
          : thread
      )
    );

    setNewCommentText(""); // Reset the comment text after saving
    setIsAddingComment(false); // Close the comment form
    setCurrentPage("thread"); // Stay on the thread page after adding comment
  };

  // Render pages
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
            loggedInUsername={loggedInUsername}
            onDeleteThread={handleDeleteThread}
            onEditThread={() => setCurrentPage("editthread")}
            onAddComment={handleAddComment} // Add handler for add comment button
            onEditComment={(commentIndex) => {
              setSelectedCommentIndex(commentIndex);
              setCurrentPage("editcomment");
            }}
          />
        );
      case "addthread":
        return <AddThreadPage onSaveThread={saveNewThread} />;
      case "editthread":
        if (selectedThreadId) {
          const thread = threads.find((t) => t.id === selectedThreadId);
          if (thread) {
            return <EditThreadPage thread={thread} onSaveEdit={saveEditedThread} />;
          }
        }
        return <div>Thread not found</div>;
      case "editcomment":
        if (selectedCommentIndex !== null && selectedThreadId !== null) {
          const thread = threads.find((t) => t.id === selectedThreadId);
          if (thread) {
            const comment = thread.comments[selectedCommentIndex];
            return (
              <EditCommentPage
                threadId={selectedThreadId}
                commentIndex={selectedCommentIndex}
                initialComment={comment}
                onSaveEdit={saveEditedComment}
                onCancelEdit={() => setCurrentPage("thread")}
              />
            );
          }
        }
        return <div>Thread not found</div>;
      default:
        return <HomePage threads={threads} onThreadClick={() => {}} loggedInUsername={loggedInUsername} />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentPage} onAddThread={handleAddThread} />
      <main style={{ width: "80%", margin: "20px auto" }}>
        {isAddingComment ? (
          <div>
            <textarea
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)} // Bind the text area to state
              placeholder="Enter your comment here..."
              rows={4}
              cols={50}
              style={{ padding: "10px", fontSize: "16px" }}
            />
            <button
              onClick={() => handleSaveComment(selectedThreadId as number)} // Save the actual comment
              style={{
                padding: "10px 20px",
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Save Comment
            </button>
            <button
              onClick={() => setIsAddingComment(false)} // Cancel button
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF5733",
                color: "white",
                border: "none",
                borderRadius: "5px",
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          renderPage()
        )}
      </main>
    </div>
  );
};

export default App;
