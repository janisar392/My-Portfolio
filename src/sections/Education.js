import React from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import styles from '../assets/CSS/Education.module.css';
import { ReactComponent as Calendar } from '../assets/Svg/bx-calendar.svg';
import { FaSchool } from 'react-icons/fa';
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
                key={`edu-${index}`} // Added unique key prefix
                {...animations.fadeInUp}
              >
                <div className={styles.content}>
                  <div className={styles.year}>
                    <Calendar className={styles.bx} /> {item.year}
                  </div>
                  <h3 className={styles.degree}>{item.degree}</h3>
                  <div className={styles.institute}>
                    <FaSchool className={styles.schoolIcon} />
                    <span>{item.institute}</span>
                  </div>
                  <div className={styles.performance}>
                    <span className={styles.performanceValue}>
                      {item.performance.type}: {item.performance.value}
                      {item.performance.scale && `/${item.performance.scale}`}
                    </span>
                    <span className={styles.performanceStatus}>
                      ({item.performance.status})
                    </span>
                  </div>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section (Right Side) */}
        <motion.div className={styles.education_colum} {...animations.fadeInRight}>
          <h3 className={styles.title}>Experience</h3>

          <div className={styles.education_box}>
            {educationData.experience.map((item, index) => (
              <motion.div
                className={styles.education_content}
                key={`exp-${index}`} // Added unique key prefix
                {...animations.fadeInUp}
              >
                <div className={styles.content}>
                  <div className={styles.year}>
                    <Calendar className={styles.bx} /> {item.year}
                  </div>
                  <h3>
                    {item.role} -{' '}
                    {item.companyLink ? (
                      <a
                        href={item.companyLink}
                        target="_blank"
                        className={styles.companyLink}
                        rel="noopener noreferrer" // Improved security
                      >
                        <b>{item.company}</b>
                      </a>
                    ) : (
                      <span className={styles.companyName}>{item.company}</span>
                    )}
                  </h3>
                  <p className={styles.description}>{item.description}</p>
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