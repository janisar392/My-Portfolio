import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/CSS/ProjectSection.module.css";
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

const ProjectSection = () => {
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

  // Only show the first 4 projects
  const firstThreeProjects = projectsData.projects.slice(0, 4);

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.project_container}>
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className={styles.project_list}>
          {firstThreeProjects.map((project, index) => (
            <motion.div 
            className={styles.project_work} 
            key={index}
            {...animations.zoomIn}
            >
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
        <div className={styles.btn}>
      <motion.div className="btn-box btns" {...animations.fadeInUp}>
      <Link to="/projects" className="btn">
            More
          </Link>
            </motion.div>
      </div>
      </div>
    </section>
  );
};

export default ProjectSection;
