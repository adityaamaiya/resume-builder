import React, { createContext, useContext, useState } from "react";

// Creating a custom hook to access the context
const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
  });

  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    yearOfPassing: "",
  });

  const [workExperience, setWorkExperience] = useState([
    { company: "", role: "", duration: "", achievements: "" },
  ]);

  const [skills, setSkills] = useState([]);

  const [projects, setProjects] = useState([
    { title: "", description: "", technologies: [] },
  ]);

  return (
    <ResumeContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        education,
        setEducation,
        workExperience,
        setWorkExperience,
        skills,
        setSkills,
        projects,
        setProjects,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

// Custom Hook for consuming context
export const useResume = () => useContext(ResumeContext);
