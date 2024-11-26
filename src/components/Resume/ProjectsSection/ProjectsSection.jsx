import React from "react";
import { useResume } from "../../../Context/ResumeContext";
import { useDarkMode } from "../../../Context/DarkModeContext";
const ProjectsSection = () => {
  const { projects, setProjects } = useResume();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const handleTechnologiesChange = (index, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index].technologies = value
      .split(",")
      .map((tech) => tech.trim());
    setProjects(updatedProjects);
  };

  const handleProjectChange = (index, e) => {
    const updatedProjects = [...projects];
    updatedProjects[index][e.target.name] = e.target.value;
    setProjects(updatedProjects);
  };

  const addProject = () => {
    setProjects([
      ...projects,
      { title: "", description: "", technologies: [] },
    ]);
  };

  const removeProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <>
      <h2 className={`${isDarkMode ? "text-white" : "text-dark"}`}>Projects</h2>

      {projects.map((project, index) => (
        <>
          <section key={index} className="section">
            <div className="form-elem">
              <label htmlFor="title" className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}>
                Title:
              </label>

              <input
                type="text"
                name="title"
                value={project.title}
                placeholder="Project Title"
                onChange={(e) => handleProjectChange(index, e)}
                className="form-control"
              />
            </div>
            <div className="form-elem">
              <label htmlFor="description :" className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}>
                Description
              </label>
              <textarea
                name="description"
                value={project.description}
                placeholder="Description"
                rows="3"
                onChange={(e) => handleProjectChange(index, e)}
                className="form-control"
              />
            </div>
            <div className="form-elem">
              <label htmlFor="technologies" className={`form-label ${isDarkMode ? "text-white" : "text-dark"}`}>
                Technologies used:
              </label>
              <input
                type="text"
                name="technologies"
                value={project.technologies.join(", ")}
                placeholder="Technologies Used (comma-separated)"
                className="form-control"
                onChange={(e) =>
                  handleTechnologiesChange(index, e.target.value)
                }
              />
            </div>
          </section>
          <button
            type="button"
            onClick={() => removeProject(index)}
            className="btn btn-primary"
          >
            Remove
          </button>
        </>
      ))}

      <button
        type="button"
        onClick={addProject}
        className="btn btn-primary"
        style={{ marginLeft: "10px" }}
      >
        Add Project
      </button>
    </>
  );
};

export default ProjectsSection;
