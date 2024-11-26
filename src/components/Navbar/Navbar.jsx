import React from "react";
import "./Navbar.css";
import logodark from "../../assets/images/logo-dark.svg";
import logoWhite from "../../assets/images/logo-white.svg";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../Context/DarkModeContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <nav className={`navbar ${isDarkMode ? "bg-bright" : "bg-dark"}`}>
      <div className="navbar-container" onClick={() => navigate("/")}>
        <img
          src={isDarkMode ? logodark : logoWhite}
          alt="logo"
          className="navbar-logo"
        />
        <div style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          <span className="text-blue fw-6">Resume</span>
          <span className={`fw-6 ${isDarkMode ? "text-dark" : "text-white"}`}>
            Builder
          </span>
        </div>
      </div>
      <button
        className=" btn btn-primary"
        onClick={toggleDarkMode}
        style={{ marginTop: 0 }}
      >
        Toggle to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
