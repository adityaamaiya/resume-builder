import React from "react";
import "./Header.css";
import headerImg from "../../assets/images/header.avif";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../Context/DarkModeContext";


export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <header className={`header ${isDarkMode?"bg-dark" : "bg-bright"}`} id="header">
      <div className="container">
        <div className="header-content text-center">
          <h6 className={`text-uppercase  fs-14 fw-6 ls-1 ${isDarkMode?"text-white" : "text-dark"}`}>
            ONLINE RSUME BUILDER
          </h6>
          <h1 className={`lg-title ${isDarkMode?"text-white" : "text-dark"}`}>
            Only 2% of resumes make it pas the first round. Be in the top 2%
          </h1>
          <p className={` fs-18 ${isDarkMode?"text-white" : "text-dark"}`}>
            Use professional field-tested resume templates that follow that
            exact 'resume rules' employers look for. Easy to use and done within
            minutes - try now for free!
          </p>
          <Link to="/resume" className="btn btn-primary text-uppercase">
            create my resume
          </Link>
          <img src={headerImg} alt="headerImg" />
        </div>
      </div>
    </header>
  );
}
