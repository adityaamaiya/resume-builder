import React, { useState, useEffect, useRef } from "react";
import { useResume } from "../../../Context/ResumeContext";

const SkillsSection = () => {
  const { skills, setSkills } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track the dropdown

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    // If checked, add the skill to the array, otherwise remove it
    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((skill) => skill !== value));
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown open/close
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Listen for click outside
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup listener
    };
  }, []);

  return (
    <section  style={{marginTop:"20px",marginBottom:"20px"}}>
      <h2>Skills</h2>
      <p className="form-label" style={{marginTop:"20px"}}>Select Skills: </p>
      <div className="section" style={{position:"relative",padding:0}}  ref={dropdownRef}>
        
        <button
          type="button"
          className="form-control"
          onClick={toggleDropdown}
          style={{
           
            width: "200px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            textAlign: "left",
            color:"black"
          }}
        >
          {skills.length > 0
            ? `Selected Skills: ${skills.join(", ")}`
            : "No Skills Selected"}
        </button>

        {isOpen && (
          <div
            style={{
              position: "absolute",
              top: "65px",
              left: "10",
              backgroundColor: "#fff",
              border: "1px solid #ccc",
              width: "200px",
              padding: "10px",
              zIndex: 1,
              maxHeight: "200px",
              overflowY: "auto",
              
            }}
          >
            {[
              "JavaScript",
              "React",
              "Python",
              "CSS",
              "Node.js",
              "HTML",
              "CSS3",
              "SQL",
              "Git",
              "Redux",
            ].map((skill) => (
              <div key={skill} style={{ marginBottom: "8px" }}>
                <input
                  type="checkbox"
                  id={skill}
                  value={skill}
                  checked={skills.includes(skill)}
                  onChange={handleSkillChange}
                  style={{ marginRight: "8px" }}
                  
                />
                <label htmlFor={skill}>{skill}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
