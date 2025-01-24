import React from "react";

interface EditCommentPageProps {
  threadId: number;
  commentIndex: number;
  initialComment: string;
  onSaveEdit: (threadId: number, commentIndex: number, newComment: string) => void;
  onCancelEdit: () => void;
  onDeleteComment: (threadId: number, commentIndex: number) => void; // New prop for delete
}

const EditCommentPage: React.FC<EditCommentPageProps> = ({
  threadId,
  commentIndex,
  initialComment,
  onSaveEdit,
  onCancelEdit,
  onDeleteComment, // Receive delete function
}) => {
  const [editedComment, setEditedComment] = React.useState<string>(initialComment);

  return (
    <div>
      <h2>Edit Comment</h2>
      <textarea
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        placeholder="Edit your comment here..."
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
        onClick={() => onSaveEdit(threadId, commentIndex, editedComment)} // Save comment
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
        onClick={() => onDeleteComment(threadId, commentIndex)} // Delete comment
        style={{
          padding: "10px 20px",
          backgroundColor: "#d9534f",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginLeft: "10px",
        }}
      >
        Delete Comment
      </button>
      <button
        onClick={() => onCancelEdit()} // Cancel edit and go back
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

export default EditCommentPage;
