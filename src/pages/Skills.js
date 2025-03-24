import React, { useState, useEffect } from "react";
import styles from "../assets/CSS/Skills.module.css";
import skillsData from "../data/skillsData.json";
import { motion } from 'framer-motion';

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [safeSkillsData, setSafeSkillsData] = useState({});

  // Load and validate data
  useEffect(() => {
    try {
      // Validate skillsData structure
      if (skillsData && typeof skillsData === 'object') {
        setSafeSkillsData(skillsData);
      } else {
        console.error("Invalid skills data format");
        setSafeSkillsData({});
      }
    } catch (error) {
      console.error("Error loading skills data:", error);
      setSafeSkillsData({});
    }
  }, []);

  const skillCategories = [
    "All",
    "BackEndSkills",
    "FrontEndSkills",
    "DatabasesSkills",
    "ProgrammingLanguages",
    "OtherSkills"
  ];

  const filteredSkills =
    selectedCategory === "All"
      ? Object.entries(safeSkillsData)
      : [[selectedCategory, safeSkillsData[selectedCategory] || []]];

  return (
    <section className={styles.skills} id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className={styles.filter_bar}>
        {skillCategories.map((category) => (
          <button
            key={category}
            className={`${styles.filter_btn} ${
              selectedCategory === category ? styles.active : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category === "All" ? "All Skills" : category.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>

      <div className={styles.skills_container}>
        {filteredSkills.map(([category, skills]) => (
          <div key={category} className={styles.skills_row}>
            <div className={styles.skills_colum}>
              <h3 className={styles.title}>
                {category.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <div className={styles.skills_box}>
                <div className={styles.skills_content}>
                  {Array.isArray(skills) && skills.map((skill, index) => (
                    <div className={styles.progress} key={`${category}-${index}`}>
                      <h3>{skill?.name || "Unnamed Skill"} <span>{skill?.level || "0%"}</span></h3>
                      <div className={styles.bar}>
                        <motion.span
                          initial={{ width: 0 }}
                          whileInView={{ width: skill?.level || "0%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;