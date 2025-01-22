import React, { useState } from "react";

interface AddThreadPageProps {
  onSaveThread: (title: string, content: string) => void;
}

const AddThreadPage: React.FC<AddThreadPageProps> = ({ onSaveThread }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSaveThread(title, content);
    } else {
      alert("Please fill in both the title and content.");
    }
  };

  return (
    <div className="add-thread-container">
      <h2>Add a New Thread</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="add-thread-input"
            placeholder="Enter thread title"
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="add-thread-textarea"
            placeholder="Enter thread content"
          />
        </div>
        <button type="submit" className="add-thread-button">
          Save Thread
        </button>
      </form>
    </div>
  );
};

export default AddThreadPage;
