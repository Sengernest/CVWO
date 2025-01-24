import React from "react";

interface AddCommentPageProps {
  onSaveComment: (threadId: number, commentText: string) => void;
  onCancel: () => void;
  threadId: number;
  commentText: string;
  setCommentText: React.Dispatch<React.SetStateAction<string>>;
}

const AddCommentPage: React.FC<AddCommentPageProps> = ({
  onSaveComment,
  onCancel,
  threadId,
  commentText,
  setCommentText,
}) => {
  return (
    <div>
      <h2>Add Comment to Thread</h2>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)} // Update comment text on change
        placeholder="Enter your comment here..."
        rows={4}
        cols={50}
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={() => onSaveComment(threadId, commentText)} // Save comment on click
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add Comment
      </button>
      <button
        onClick={onCancel} // Cancel comment and go back to thread
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
  );
};

export default AddCommentPage;
