import React from "react";
import { useResume } from "../../../Context/ResumeContext";
import "../Resume.css";
import { useDarkMode } from "../../../Context/DarkModeContext";

export default function AboutSection() {
  const { personalInfo, setPersonalInfo } = useResume();

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <h2 className={`${isDarkMode ? "text-white" : "text-dark"}`}>
        AboutSection
      </h2>
      <section className="section">
        <div className={`form-elem `}>
          <label
            htmlFor="name"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={personalInfo.name}
            placeholder="Name"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            htmlFor="email"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={personalInfo.email}
            placeholder="Email"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            htmlFor="phone"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Phone:
          </label>
          <input
            type="tel"
            name="phone"
            value={personalInfo.phone}
            placeholder="Phone"
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-elem">
          <label
            htmlFor="linkedIn"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            LinkedIn:
          </label>
          <input
            type="url"
            name="linkedIn"
            value={personalInfo.linkedIn}
            placeholder="LinkedIn"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            htmlFor="github"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            GitHub:
          </label>
          <input
            type="url"
            name="github"
            value={personalInfo.github}
            placeholder="GitHub"
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </section>
    </>
  );
}
