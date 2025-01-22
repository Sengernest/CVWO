import React from "react";

interface HeaderProps {
  onNavigate: (page: string) => void;
  onAddThread: () => void; // Callback for Add Thread button
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onAddThread }) => {
  return (
    <div className="header">
      <h1 className="header-title" onClick={() => onNavigate("home")} style={{ cursor: "pointer" }}>
        NUS Lifters
      </h1>
      <p className="header-subtitle">Discuss, Share & Learn</p>
      <div className="header-nav">
        <button className="nav-button" onClick={() => onNavigate("home")}>Home</button>
        <button className="nav-button" onClick={onAddThread}>Add Thread</button>
        <button className="nav-button" onClick={() => onNavigate("login")}>Login</button>
      </div>
    </div>
  );
};

export default Header;
