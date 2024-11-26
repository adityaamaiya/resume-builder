import React, { useState } from "react";
import { useResume } from "../../../Context/ResumeContext";
import { useDarkMode } from "../../../Context/DarkModeContext";

const ExperienceSection = () => {
  const { workExperience, setWorkExperience } = useResume();
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [duration, setDuration] = useState("");
  const [achievements, setAchievements] = useState("");

  const handleAddWorkExperience = () => {
    if (company && role && duration && achievements) {
      const newExperience = {
        company,
        role,
        duration,
        achievements,
      };
      setWorkExperience([...workExperience, newExperience]);

      // Clearing the input fields after adding the data
      setCompany("");
      setRole("");
      setDuration("");
      setAchievements("");
    }
  };

  const handleRemoveWorkExperience = (index) => {
    const updatedExperience = workExperience.filter((_, i) => i !== index);
    setWorkExperience(updatedExperience);
  };
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <h2 className={`${isDarkMode ? "text-white" : "text-dark"}`}>
        Work Experience
      </h2>
      <div className="section">
        <div className="form-elem">
          <label
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Role
          </label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="Enter your role"
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Duration
          </label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter the duration"
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Achievements
          </label>
          <textarea
            value={achievements}
            onChange={(e) => setAchievements(e.target.value)}
            placeholder="Enter your achievements"
            className="form-control"
          />
        </div>
      </div>
      <button className="btn btn-primary " onClick={handleAddWorkExperience}>
        Add Work Experience
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3  className={`${isDarkMode ? "text-white" : "text-dark"}`}>Work Experience Entries</h3>
        {workExperience.length === 0 ? (
          <p>No work experience added yet.</p>
        ) : (
          <ul>
            {workExperience.map((experience, index) => (
              <li key={index} className={`${isDarkMode ? "text-white" : "text-dark"}`}>
                <p>
                  <strong>Company:</strong> {experience.company}
                </p>
                <p>
                  <strong>Role:</strong> {experience.role}
                </p>
                <p>
                  <strong>Duration:</strong> {experience.duration}
                </p>
                <p>
                  <strong>Achievements:</strong> {experience.achievements}
                </p>
                <button
                  onClick={() => handleRemoveWorkExperience(index)}
                  className="btn  btn-primary"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
