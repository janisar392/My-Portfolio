import React from "react";
import fileImage from "../assets/img/about.jpg";
import styles from "../assets/CSS/AboutSection.module.css";
import { Link } from 'react-router-dom';
import aboutData from "../data/infoData.json"
import { motion } from "framer-motion";
import { animations } from "../components/animations.js";


const AboutSection = () => {
    const {about} = aboutData
  return (
    <section className={styles.about} id="about">
        <h2 className="heading">About <span>Me</span>
        </h2>

        <motion.div className={styles.about_img} {...animations.zoomIn}>
            <img src={fileImage} alt="file"/>
            <span className={styles.circle_spin}></span>
        </motion.div>

        <motion.div className={styles.about_content} {...animations.fadeInUp} >
            <h3> Java Full Stack Developer
                </h3>
            <p>
                {about}
            </p>

            <div className="btn-box btns">
                <Link to="/about" className="btn">Read More</Link>
            </div>
        </motion.div>
    </section>
  );
};

export default AboutSection;
