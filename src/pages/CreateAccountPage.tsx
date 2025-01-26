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
      
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="create-account-container" style={styles.container}>
      <div className="create-account-box" style={styles.box}>
        <h2 className="create-account-title" style={styles.title}>Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="create-account-input"
              placeholder="Enter your username"
              style={styles.input}
            />
          </div>
          <div>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="create-account-input"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" className="create-account-button" style={styles.button}>Create Account</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f7fc", 
  },
  box: {
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center" as "center", 
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    fontWeight: "600",
    color: "#333",
  },
  label: {
    display: "block",
    fontSize: "14px",
    marginBottom: "6px",
    textAlign: "left" as "left", 
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    marginBottom: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box" as "border-box", 
    transition: "all 0.3s ease",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "16px",
  },
  button: {
    width: "100%",
    padding: "14px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default CreateAccountPage;
