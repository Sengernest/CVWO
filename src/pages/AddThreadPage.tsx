import React, { useState, useEffect } from "react";

interface AddThreadPageProps {
  thread?: { id: number; title: string; description: string };
  onSaveThread: (title: string, content: string) => void;
}

const AddThreadPage: React.FC<AddThreadPageProps> = ({ thread, onSaveThread }) => {
  const [title, setTitle] = useState(thread?.title || "");
  const [content, setContent] = useState(thread?.description || "");

  const handleSave = () => {
    if (title && content) {
      onSaveThread(title, content);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{thread ? "Edit Thread" : "Add New Thread"}</h2>
      <div>
        <input
          type="text"
          placeholder="Thread Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div>
        <textarea
          placeholder="Thread Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "5px", border: "1px solid #ccc", height: "200px" }}
        />
      </div>
      <button
        onClick={handleSave}
        style={{ padding: "10px 20px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}
      >
        Save Thread
      </button>
    </div>
  );
};

export default AddThreadPage;
