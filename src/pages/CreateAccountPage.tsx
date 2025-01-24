import React, { useState } from "react";

interface CreateAccountPageProps {
  onCreateAccountSubmit: (username: string, password: string) => void;
}

const CreateAccountPage: React.FC<CreateAccountPageProps> = ({ onCreateAccountSubmit }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required.");
    } else {
      setError("");
      onCreateAccountSubmit(username, password);
    }
  };

  return (
    <div className="create-account-container">
      <div className="create-account-box">
        <h2 className="create-account-title">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="create-account-input"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="create-account-input"
              placeholder="Enter your password"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="create-account-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
