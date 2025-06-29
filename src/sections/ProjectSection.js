import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/CSS/ProjectSection.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";

// ✅ Import actual project images
import TastyTrekImage from "../assets/img/TastyTrek.png";
import MyAINeighborImage from "../assets/img/MyAINeighbor.png";
import AIResumeBuilderImage from "../assets/img/AIResumeBuilder.jpeg";

const ProjectSection = () => {
  const getImage = (title) => {
    if (title === "TastyTrek") return TastyTrekImage;
    if (title === "My AI Neighbor") return MyAINeighborImage;
    if (title === "AI Resume Builder") return AIResumeBuilderImage;
    return "default_image_path_here";
  };

  // Only show the first 3 projects
  const firstThreeProjects = projectsData.projects.slice(0, 3);

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
