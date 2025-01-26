import React, { useState } from "react";

interface LoginPageProps {
  onLogin: (username: string, password: string) => void;
  onCreateAccount: () => void; // New prop for navigation to CreateAccountPage
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onCreateAccount }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required.");
    } else {
      setError("");
      onLogin(username, password); 
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
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
              className="login-input"
              placeholder="Enter your password"
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>

        <button
          onClick={onCreateAccount}
          className="create-account-button"
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
