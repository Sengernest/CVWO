import React, { useState } from "react";
import "../index.css"; 

interface AddThreadPageProps {
  onSaveThread: (title: string, description: string, category: string) => void;
}

const AddThreadPage: React.FC<AddThreadPageProps> = ({ onSaveThread }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("training");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || category === "") {
      alert("Please fill in all fields!");
      return;
    }
    onSaveThread(title, description, category);
    
    setTitle("");
    setDescription("");
    setCategory("training");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Thread</h2>
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
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <option value="training">Training</option>
            <option value="diet">Diet</option>
            <option value="recovery">Recovery</option>
          </select>
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
          Save Thread
        </button>
      </form>
    </div>
  );
};

export default AddThreadPage;
