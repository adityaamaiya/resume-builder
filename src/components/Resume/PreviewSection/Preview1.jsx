import React from "react";
import { useRef } from "react";
import { useResume } from "../../../Context/ResumeContext";
import styles from "./Preview1.module.css";
import generatePDF from "react-to-pdf";

const Preview1 = () => {
  const { personalInfo, education, workExperience, skills, projects } =
    useResume();

  const targetRef = useRef();

  return (
    <div ref={targetRef} style={{ padding: "20px" }}>
      {/* Personal Info */}
      <section className={styles.personalInfo}>
        <h3>Personal Info</h3>
      
          <p>
            <strong>Name:</strong> {personalInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {personalInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {personalInfo.phone}
          </p>
        
        
          <p>
            <strong>LinkedIn:</strong> {personalInfo.linkedIn}
          </p>
          <p>
            <strong>GitHub:</strong> {personalInfo.github}
          </p>
        
      </section>

      {/* Education */}
      <section className={styles.education}>
        <h3>Education</h3>
        <p>
          <strong>Institution:</strong> {education.institution}
        </p>
        <p>
          <strong>Degree:</strong> {education.degree}
        </p>
        <p>
          <strong>Year of Passing:</strong> {education.yearOfPassing}
        </p>
      </section>

      {/* Work Experience */}
      <section className={styles.workExperience}>
        <h3>Work Experience</h3>
        {workExperience.length > 0 ? (
          <ul>
            {workExperience.map((experience, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>
        ) : (
          <p>No work experience added yet.</p>
        )}
      </section>

      {/* Skills */}
      <section className={styles.skills}>
        <h3>Skills</h3>
        <p>{skills.length > 0 ? skills.join(", ") : "No skills selected"}</p>
      </section>

      {/* Projects */}
      <section className={styles.projects}>
        <h3>Projects</h3>
        {projects.map((project, index) => (
          <div key={index}>
            <p>
              <strong>Title:</strong> {project.title}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>
            <p>
              <strong>Technologies:</strong>{" "}
              {project.technologies.length > 0
                ? project.technologies.join(", ")
                : "No technologies listed"}
            </p>
          </div>
        ))}
      </section>
      <button
        className="btn btn-primary"
        onClick={() => generatePDF(targetRef, { filename: "My_Resume.pdf" })}
      >
        Download PDF
      </button>
    </div>
  );
};

export default Preview1;
