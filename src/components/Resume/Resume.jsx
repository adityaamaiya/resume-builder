import React from "react";

import Navbar from "../Navbar/Navbar";
import AboutSection from "./AboutSection/AboutSection";
import { ResumeProvider } from "../../Context/ResumeContext";
import EducationSection from "./EducationSection/EducationSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import { DarkModeProvider,  } from "../../Context/DarkModeContext";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import Preview1 from "./PreviewSection/Preview1";
import Preview2 from "./PreviewSection/Preview2";

export default function Resume() {
  return (
    <div>
      <DarkModeProvider>
        <Navbar />
      </DarkModeProvider>
      <div style={{ padding: "20px" }}>
        <ResumeProvider>
          <AboutSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />

          <h2>Resume Preview 1</h2>

          <Preview1 />
          <h2>Resume Preview 2</h2>
          <Preview2 />
        </ResumeProvider>
      </div>
    </div>
  );
}
