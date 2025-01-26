import React from "react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  onAddThread: () => void; 
  loggedInUsername: string | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onAddThread, loggedInUsername, onLogout }) => {
  return (
    <div className="header">
      <h1 className="header-title" onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
        NUS Lifters
      </h1>
      <p className="header-subtitle">Official NUS Lifting Club</p>
      <div className="header-nav">
        <button className="nav-button" onClick={() => onNavigate("home")}>Home</button>

        {loggedInUsername && (
          <button className="nav-button" onClick={onAddThread}>Add Thread</button>
        )}

  
        {!loggedInUsername && (
          <button className="nav-button" onClick={() => onNavigate("login")}>Login</button>
        )}
        
        {loggedInUsername && (
          <button className="nav-button" onClick={onLogout}>Logout</button>
        )}
      </div>
    </div>
  );
};

export default Header;
