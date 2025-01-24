import React, { useState } from "react";

interface EditThreadPageProps {
  thread: { id: number; title: string; description: string }; // Receiving thread data
  onSaveEdit: (id: number, title: string, description: string) => void; // Function to handle saving the edited thread
}

const EditThreadPage: React.FC<EditThreadPageProps> = ({ thread, onSaveEdit }) => {
  const [title, setTitle] = useState<string>(thread.title);
  const [description, setDescription] = useState<string>(thread.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveEdit(thread.id, title, description); // Save the edited thread with correct id
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Thread</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Thread Title"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Thread Content"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              height: "200px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditThreadPage;
