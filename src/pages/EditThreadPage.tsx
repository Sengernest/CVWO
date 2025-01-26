import React, { useState, useEffect } from "react";

interface EditThreadPageProps {
  threadId: number;
  title: string;
  description: string;
  category: string;
  onSaveEdit: (
    id: number,
    updatedTitle: string,
    updatedDescription: string,
    updatedCategory: string
  ) => void;
  onCancelEdit: () => void;
}

const EditThreadPage: React.FC<EditThreadPageProps> = ({
  threadId,
  title,
  description,
  category,
  onSaveEdit,
  onCancelEdit,
}) => {
  const [editedTitle, setEditedTitle] = useState<string>(title);
  const [editedDescription, setEditedDescription] = useState<string>(description);
  const [editedCategory, setEditedCategory] = useState<string>(category);

  useEffect(() => {
    setEditedTitle(title);
    setEditedDescription(description);
    setEditedCategory(category);
  }, [title, description, category]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editedTitle || !editedDescription || editedCategory === "") {
      alert("Please fill in all fields!");
      return;
    }
    onSaveEdit(threadId, editedTitle, editedDescription, editedCategory); // Save edited thread
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Thread</h2>
      <form onSubmit={handleSave}>
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
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

        {/* Category Dropdown with 3 categories: Training, Diet, Recovery */}
        <div>
          <select
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
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
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
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
            marginRight: "10px",
          }}
        >
          Save Changes
        </button>

        <button
          onClick={onCancelEdit}
          type="button"
          style={{
            padding: "10px 20px",
            backgroundColor: "#FF5733",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditThreadPage;
