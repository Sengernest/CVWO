import React from "react";


interface HeaderProps {
  onNavigate: (page: string) => void; // Allows navigation to different pages
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="header">
      <h1 className="header-title">NUS Lifters</h1>
      <h3 className="header-subtitle">Official NUS lifting club</h3>
      <nav className="header-nav">
        <button className="nav-button" onClick={() => onNavigate("home")}>
          Home
        </button>
        <button className="nav-button" onClick={() => onNavigate("login")}>
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
