import React, { useState } from "react";

interface Comment {
  id: number;
  content: string;
}

const ThreadPage: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    const id = comments.length + 1;
    const comment = { id, content: newComment };
    setComments([...comments, comment]);
    setNewComment("");
  };

  const deleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h1>Thread Title</h1>
      <p>Thread content goes here...</p>

      <h2>Comments</h2>
      <div>
        <input
          type="text"
          placeholder="Add a comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={addComment}>Add Comment</button>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <button onClick={() => deleteComment(comment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreadPage;
