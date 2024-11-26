import React from "react";

import Navbar from "../Navbar/Navbar";
import AboutSection from "./AboutSection/AboutSection";
import { ResumeProvider } from "../../Context/ResumeContext";
import EducationSection from "./EducationSection/EducationSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";

import ExperienceSection from "./ExperienceSection/ExperienceSection";
import Preview1 from "./PreviewSection/Preview1";
import Preview2 from "./PreviewSection/Preview2";
import Footer from "../Footer/Footer";
import { DarkModeProvider, useDarkMode } from "../../Context/DarkModeContext";

export default function Resume() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <Navbar />

      <div
        style={{ padding: "20px" }}
        className={`${isDarkMode ? "bg-dark" : "bg-bright"}`}
      >
        <ResumeProvider>
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />

          <h2 className={`${isDarkMode ? "text-white" : "text-dark"}` } style={{marginTop:"20px"}}>Resume Preview 1</h2>

          <Preview1 />
          <h2 className={`${isDarkMode ? "text-white" : "text-dark"}`} style={{marginTop:"20px"}}>Resume Preview 2</h2>
          <Preview2 />
        </ResumeProvider>
      </div>
      <Footer />
    </div>
  );
}
