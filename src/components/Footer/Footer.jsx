import React from "react";
import "./Footer.css";
import { useDarkMode } from "../../Context/DarkModeContext";

export default function Footer() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <footer className={`footer ${isDarkMode ? "bg-bright" : "bg-dark"}`}>
      <div className="container">
        <div className="footer-content text-center">
          <h2 className="footer-logo">
            <span className="text-blue">Resume</span>
            <span className={`${isDarkMode ? "text-dark" : "text-white"}`}> Builder</span>
          </h2>
          <p>By Aditya Amaiya</p>
          <p>Copyright &copy; 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
