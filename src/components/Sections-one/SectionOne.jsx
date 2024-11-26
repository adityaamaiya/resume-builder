import React from "react";
import "./SectionOne.css";
import { Link } from "react-router-dom";
import sectionOneImg from "../../assets/images/section1.svg";
import { useDarkMode } from "../../Context/DarkModeContext";

export default function SectionOne() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <section className={`section-one ${isDarkMode? "bg-dark": "bg-white"}`}>
      <div className="section-one-content">
        <div className="section-one-left">
          <img src={sectionOneImg} alt="sectionOneImg" />
        </div>
        <div className="section-one-right text-center">
          <h2 className={`lg-title text ${isDarkMode?"text-white" : "text-dark"}`}>
            Use the best resume maker as your guide!
          </h2>
          <p className={`text ${isDarkMode?"text-white" : "text-dark"}`}>
            Getting that dream job can seem like an impossible task. We're here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, imporved by data, trusted by
            millions of professionals.
          </p>

          <Link to="/resume" className="btn btn-primary text-uppercase">
            create my resume
          </Link>
        </div>
      </div>
    </section>
  );
}
