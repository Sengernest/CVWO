import React, { useState } from "react";

interface AddCommentPageProps {
  threadId: number;
  onSaveComment: (threadId: number, comment: string) => void;
  onCancel: () => void;
}

const AddCommentPage: React.FC<AddCommentPageProps> = ({ threadId, onSaveComment, onCancel }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.trim()) {
      onSaveComment(threadId, comment);
      setComment(""); // Clear the input field after saving
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add a Comment</h2>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows={4}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
        placeholder="Write your comment here..."
      />
      <div>
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Save Comment
        </button>
        <button
          onClick={onCancel}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddCommentPage;
