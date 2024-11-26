import React from "react";
import { useResume } from "../../../Context/ResumeContext";
import "../Resume.css";

export default function AboutSection() {
  const { personalInfo, setPersonalInfo } = useResume();

  const handleChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>AboutSection</h2>
      <section className="section">
        <div className="form-elem">
          <label htmlFor="name" className="form-label">
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
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="phone" className="form-label">
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
          <label htmlFor="linkedIn" className="form-label">
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
          <label htmlFor="github" className="form-label">
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
