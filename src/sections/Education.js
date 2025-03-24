import React from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from '../assets/CSS/Education.module.css';
import { ReactComponent as Calendar } from '../assets/Svg/bx-calendar.svg';
import educationData from '../data/educationData.json'; 

function Education() {
  return (
    <section className={styles.education} id="education">
        <h2 className="heading">My <span>Journey</span></h2>

        <div className={styles.education_row}>
            {/* Education Section (Left Side) */}
            <motion.div className={styles.education_colum} {...animations.fadeInLeft}>
                <h3 className={styles.title}>Education</h3>

                <div className={styles.education_box}>
                    {educationData.education.map((item, index) => (
                        <motion.div
                            className={styles.education_content}
                            key={index}
                            {...animations.fadeInUp}
                            >
                            <div className={styles.content}>
                                <div className={styles.year}><Calendar className={styles.bx}/> {item.year}</div>
                                <h3>{item.degree} - {item.institute}</h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Experience Section (Right Side) */}
            <motion.div
                className={styles.education_colum} {...animations.fadeInRight}>
                <h3 className={styles.title}>Experience</h3>

                <div className={styles.education_box}>
                    {educationData.experience.map((item, index) => (
                        <motion.div
                            className={styles.education_content}
                            key={index}
                            {...animations.fadeInUp}
                            >
                            <div className={styles.content}>
                                <div className={styles.year}><Calendar className={styles.bx}/> {item.year}</div>
                                <h3>{item.role} - <a href="https://cedarfinancial.com/" target="_blank" className="Cedar-fin" rel="noreferrer"><b>{item.company}</b></a></h3>
                                <p>{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
  );
}

export default Education;
