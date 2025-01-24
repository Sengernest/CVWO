import React, { useState } from "react";

interface EditCommentPageProps {
  threadId: number;
  commentIndex: number;
  initialComment: string;
  onSaveEdit: (threadId: number, commentIndex: number, newComment: string) => void;
  onCancelEdit: () => void;
}

const EditCommentPage: React.FC<EditCommentPageProps> = ({
  threadId,
  commentIndex,
  initialComment,
  onSaveEdit,
  onCancelEdit,
}) => {
  const [editedComment, setEditedComment] = useState(initialComment);

  const handleSave = () => {
    onSaveEdit(threadId, commentIndex, editedComment);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Comment</h2>
      <textarea
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        rows={4}
        cols={50}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Save Comment
        </button>
        <button
          onClick={onCancelEdit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5733",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginLeft: "10px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditCommentPage;
