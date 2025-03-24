import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/CSS/Projects.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import PortfolioImage from "../assets/img/Portfolio.png";
import homyzImage from "../assets/img/homyz.png";
import jenkinsonAquariumImage from "../assets/img/jenkinsonAquarium.png";
import jobportalImage from "../assets/img/jobportal.png";
import calculatorImage from "../assets/img/calculator.png";
import tictacImage from "../assets/img/tictacgame.png";
import mainImage from "../assets/img/Resume.png";

const Projects = () => {
  const [selectedSkill, setSelectedSkill] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImage = (title) => {
    if (title === "Calculator") {
      return calculatorImage;
    } else if (title === "Tic Tac Toe") {
      return tictacImage;
    } else if (title === "My Resume") {
      return mainImage;
    } else if (title === "My Portfolio") {
      return PortfolioImage;
    } else if (title === "Homyz") {
      return homyzImage;
    } else if (title === "Job Portal") {
      return jobportalImage;
    } else if (title === "Jenkinson Aquarium") {
      return jenkinsonAquariumImage;
    } else {
      return "default_image_path_here";
    }
  };

  const allowedSkills = ["All", "React", "HTML, CSS, JavaScript"];

  // Filter projects based on the selected skill
  const filteredProjects =
    selectedSkill === "All"
      ? projectsData.projects
      : selectedSkill === "HTML, CSS, JavaScript"
      ? projectsData.projects.filter((project) =>
          ["HTML", "CSS", "JavaScript"].every((skill) => project.skills.includes(skill))
        )
      : projectsData.projects.filter((project) =>
          project.skills.includes(selectedSkill)
        );

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project_container}>
        <motion.h2 className="heading" >
          All <span>Projects</span>
        </motion.h2>

        {/* Filter Bar */}
        <motion.div className={styles.filter_bar}>
        {allowedSkills.map((skill, index) => (
          <button
            key={index}
            className={`${styles.filter_btn} ${selectedSkill === skill ? styles.active : ""}`}
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
