import React from "react";
import "../index.css"; 
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
    <div className="add-comment-container">
      <h2>Add Comment to Thread</h2>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Enter your comment here..."
        rows={4}
        cols={50}
        className="add-comment-textarea"
      />
      <br />
      <button
        onClick={() => onSaveComment(threadId, commentText)} 
        className="add-comment-button"
        disabled={!commentText.trim()}
      >
        Add Comment
      </button>
      <button
        onClick={onCancel} 
        className="cancel-button"
      >
        Cancel
      </button>
    </div>
  );
};

export default AddCommentPage;
