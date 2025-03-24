import React, { useState, useEffect } from "react";
import styles from "../assets/CSS/Skills.module.css";
import skillsData from "../data/skillsData.json";
import { motion } from 'framer-motion';

function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Validate and prepare categories
  const availableCategories = [
    "BackEndSkills",
    "FrontEndSkills",
    "DatabasesSkills",
    "ProgrammingLanguages",
    "OtherSkills"
  ].filter(category => skillsData[category]); // Only keep categories that exist

  const skillCategories = ["All", ...availableCategories];

  // Safely get filtered skills
  const getFilteredSkills = () => {
    try {
      if (selectedCategory === "All") {
        return Object.entries(skillsData)
          .filter(([category]) => availableCategories.includes(category));
      }
      return [[selectedCategory, skillsData[selectedCategory] || []]];
    } catch (err) {
      setError(err);
      return [];
    }
  };

  const filteredSkills = getFilteredSkills();

  useEffect(() => {
    // Validate data when component mounts
    if (skillsData && typeof skillsData === 'object') {
      setIsLoading(false);
    } else {
      setError(new Error("Invalid skills data format"));
      setIsLoading(false);
    }
  }, []);

  if (error) {
    return <div className={styles.error}>Error loading skills: {error.message}</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading skills...</div>;
  }

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
                  {Array.isArray(skills) && skills.length > 0 ? (
                    skills.map((skill, index) => (
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
                    ))
                  ) : (
                    <p>No skills found in this category</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;