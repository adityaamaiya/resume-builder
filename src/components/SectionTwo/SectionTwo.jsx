import React from "react";
import "./SectionTwo.css";
import feature1 from "../../assets/images/feature1.svg";
import feature2 from "../../assets/images/feature2.svg";
import feature3 from "../../assets/images/feature3.svg";
import { useDarkMode } from "../../Context/DarkModeContext";

export default function SectionTwo() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`section-two ${isDarkMode?"bg-dark" : "bg-bright"}`}>
      <div className="container">
        <div className="section-two-content">
          <div className="section-items">
            <div className="section-item">
              <div className="section-item-icon">
                <img src={feature1} alt="" />
              </div>
              <h5 className={`section-item-title ${isDarkMode?"text-white" : "text-dark"}`}>
                Make a resume that wins interviews!
              </h5>
              <p className={`text ${isDarkMode?"text-white" : "text-dark"}`}>
                Use our resume maker with its advanced creation tools to tell
                professional story that engages recruiters, hiring managers and
                even CEOs.
              </p>
            </div>

            <div className="section-item">
              <div className="section-item-icon">
                <img src={feature2} alt="" />
              </div>
              <h5 className={`section-item-title ${isDarkMode?"text-white" : "text-dark"}`}>Resume writing made easy!</h5>
              <p className={`text ${isDarkMode?"text-white" : "text-dark"}`}>
                Resume writing has never been this effortless. Pre-generated
                text, visual designs and more - all already integrated into the
                resume maker. Just fill in your details.
              </p>
            </div>

            <div className="section-item">
              <div className="section-item-icon">
                <img src={feature3} alt="" />
              </div>
              <h5 className={`section-item-title ${isDarkMode?"text-white" : "text-dark"}`}>
                A recruiter-tested CV maker tool
              </h5>
              <p className={`text ${isDarkMode?"text-white" : "text-dark"}`}>
                Our resume builder and its pre-generated content are tested by
                recruiters and IT experts. We help your CV become truly
                competitive in the hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
