import React from "react";
import { useResume } from "../../../Context/ResumeContext";
export default function EducationSection() {
  const { education, setEducation } = useResume();

  const handleChange = (e) => {
    setEducation({ ...education, [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>EducationSection</h2>
      <section className="section">
        <div className="form-elem">
          <label htmlFor="institution" className="form-label">
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
          <label htmlFor="degree" className="form-label">
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
          <label htmlFor="yearOfPassing" className="form-label">
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
