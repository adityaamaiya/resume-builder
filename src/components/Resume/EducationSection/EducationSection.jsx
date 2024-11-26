import React from "react";
import { useResume } from "../../../Context/ResumeContext";
import { useDarkMode } from "../../../Context/DarkModeContext";
export default function EducationSection() {
  const { education, setEducation } = useResume();

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <h2 className={`${isDarkMode ? "text-white" : "text-dark"}`}>
        EducationSection
      </h2>
      <section className="section">
        <div className="form-elem">
          <label
            htmlFor="institution"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Institution:
          </label>
          <input
            type="text"
            name="institution"
            value={education.institution}
            placeholder="Institution"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            htmlFor="degree"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Degree:
          </label>
          <input
            type="text"
            name="degree"
            value={education.degree}
            placeholder="Degree"
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-elem">
          <label
            htmlFor="yearOfPassing"
            className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}
          >
            Year of Passing:
          </label>
          <input
            type="number"
            name="yearOfPassing"
            value={education.yearOfPassing}
            placeholder="Year of Passing"
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </section>
    </>
  );
}
