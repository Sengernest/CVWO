import React from "react";

interface EditCommentPageProps {
  threadId: number;
  commentIndex: number;
  initialComment: string;
  onSaveEdit: (threadId: number, commentIndex: number, newComment: string) => void;
  onCancelEdit: () => void;
  onDeleteComment: (threadId: number, commentIndex: number) => void;
}

const EditCommentPage: React.FC<EditCommentPageProps> = ({
  threadId,
  commentIndex,
  initialComment,
  onSaveEdit,
  onCancelEdit,
  onDeleteComment,
}) => {
  const [editedComment, setEditedComment] = React.useState<string>(initialComment);

  const handleSave = () => {
    if (editedComment.trim()) {
      onSaveEdit(threadId, commentIndex, editedComment);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (confirmDelete) {
      onDeleteComment(threadId, commentIndex);
    }
  };

  return (
    <div>
      <h2>Edit Comment</h2>
      <textarea
        value={editedComment}
        onChange={(e) => setEditedComment(e.target.value)}
        placeholder="Edit your comment here..."
        rows={4}
        cols={50}
        aria-label="Edit your comment"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "100%",
          marginBottom: "10px",
        }}
      />
      <br />
      <button
        onClick={handleSave}
        disabled={!editedComment.trim()}
        style={{
          padding: "10px 20px",
          backgroundColor: !editedComment.trim() ? "#6c757d" : "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: !editedComment.trim() ? "not-allowed" : "pointer",
        }}
      >
        Save Comment
      </button>
      <button
        onClick={handleDelete}
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
  );
};

export default EditCommentPage;
