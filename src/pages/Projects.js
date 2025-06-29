import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/CSS/Projects.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from "framer-motion";
import { animations } from "../components/animations.js";

// ✅ Import actual images
import TastyTrekImage from "../assets/img/TastyTrek.png";
import MyAINeighborImage from "../assets/img/MyAINeighbor.png";
import AIResumeBuilderImage from "../assets/img/AIResumeBuilder.jpeg";

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Map title to corresponding image
  const getImage = (title) => {
    if (title === "TastyTrek") return TastyTrekImage;
    if (title === "My AI Neighbor") return MyAINeighborImage;
    if (title === "AI Resume Builder") return AIResumeBuilderImage;
    return "default_image_path_here"; // fallback image
  };

  const allowedSkills = ["All", "React", "Spring Boot", "HTML", "CSS", "JavaScript"];

  const filteredProjects =
    selectedSkill === "All"
      ? projectsData.projects
      : projectsData.projects.filter((project) =>
          project.skills.includes(selectedSkill)
        );

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project_container}>
        <motion.h2 className="heading">
          All <span>Projects</span>
        </motion.h2>

        {/* Filter Bar */}
        <motion.div className={styles.filter_bar}>
          {allowedSkills.map((skill, index) => (
            <button
              key={index}
              className={`${styles.filter_btn} ${
                selectedSkill === skill ? styles.active : ""
              }`}
              onClick={() => setSelectedSkill(skill)}
            >
              {skill}
            </button>
          ))}
        </motion.div>

        {/* Project List */}
        <div className={styles.project_list}>
          {filteredProjects.map((project, index) => (
            <motion.div className={styles.project_work} key={index} {...animations.fadeInLeft1}>
              <img src={getImage(project.title)} alt={project.title} />
              <div className={styles.work_layer}>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <Link to={`/projects/${project.title}`} className={styles.work_btn}>
                  Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
