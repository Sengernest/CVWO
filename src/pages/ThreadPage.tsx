import React from "react";
import { Thread } from "../types/types";

interface ThreadPageProps {
  threadId: number;
  threads: Thread[];
  loggedInUsername: string | null;
  onDeleteThread: (threadId: number) => void;
  onEditThread: () => void;
  onAddComment: () => void;
  onEditComment: (commentIndex: number) => void;
}

const ThreadPage: React.FC<ThreadPageProps> = ({
  threadId,
  threads,
  loggedInUsername,
  onDeleteThread,
  onEditThread,
  onAddComment,
  onEditComment,
}) => {
  const thread = threads.find((t) => t.id === threadId);

  if (!thread) {
    return <div>Thread not found.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{thread.title}</h2>
      <p>{thread.description}</p>

      {loggedInUsername && (
        <button
          onClick={onEditThread}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Edit Thread
        </button>
      )}

      {loggedInUsername && (
        <button
          onClick={onAddComment}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Add Comment
        </button>
      )}

      {loggedInUsername && (
        <button
          onClick={() => onDeleteThread(thread.id)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5733",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Delete Thread
        </button>
      )}

      {thread.comments.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Comments:</h3>
          <ul style={{ paddingLeft: "20px" }}>
            {thread.comments.map((comment, index) => (
              <li key={index} style={{ marginBottom: "10px", fontSize: "16px" }}>
                {comment}

                {loggedInUsername && (
                  <button
                    onClick={() => onEditComment(index)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "#ffc107",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    Edit/Delete Comment
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {thread.comments.length === 0 && (
        <p>No comments yet. Be the first to add a comment!</p>
      )}
    </div>
  );
};

export default ThreadPage;
