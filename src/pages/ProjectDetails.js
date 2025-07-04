import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom"; 
import styles from "../assets/CSS/ProjectDetails.module.css";
import projectsData from "../data/projectsData.json";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";

// ✅ Import actual project images
import TastyTrekImage from "../assets/img/TastyTrek.png";
import MyAINeighborImage from "../assets/img/MyAINeighbor.png";
import AIResumeBuilderImage from "../assets/img/AIResumeBuilder.jpeg";

const ProjectDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const project = projectsData.projects.find((p) => p.title === title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!project) {
    return <h2 className={styles.notFound}>Project not found</h2>;
  }

  const getImage = (title) => {
    if (title === "TastyTrek") return TastyTrekImage;
    if (title === "My AI Neighbor") return MyAINeighborImage;
    if (title === "AI Resume Builder") return AIResumeBuilderImage;
    return "default_image_path_here";
  };

  const firstThreeProjects = projectsData.projects.slice(0, 3);

  return (
    <section className={styles.container}>
      <div className={styles.projectContent}>
        <motion.div className={styles.videoContainer} {...animations.fadeInLeft1}>
          <div className={styles.iframeWrapper}>
            <iframe
              src={project.video}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
        <motion.div className={styles.projectInfo} {...animations.fadeInRight1}>
          <h1>{project.title}</h1>
          <p>{project.longDescription}</p>
          <h3>Skills Used</h3>
          <motion.div className={styles.skillsWrapper} {...animations.fadeInUp}>
            {project.skills.map((skill, index) => (
              <span key={index} className={styles.skill}>{skill}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div className={`btn-box ${styles.btn}`} {...animations.fadeInUp}>
        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
        <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer" className="btn">Source Code</a>
      </motion.div>

      <motion.h2 className="heading" {...animations.zoomIn}>
        Projects <span>Gallery</span>
      </motion.h2>

      <div className={styles.project_list}>
        {firstThreeProjects.map((proj, index) => (
          <motion.div className={styles.project_work} key={index} {...animations.zoomIn}>
            <img src={getImage(proj.title)} alt={proj.title} />
            <div className={styles.work_layer}>
              <h3>{proj.title}</h3>
              <p>{proj.shortDescription}</p>
              <Link to={`/projects/${proj.title}`} className={styles.work_btn}>
                Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className={`btn-box ${styles.btnMore}`} {...animations.fadeInUp}>
        <Link to="/projects" className="btn">More</Link>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
