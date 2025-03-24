import React from 'react';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import ChangeText from '../components/ChangeText';
import Homeimg from '../assets/img/home.png';
import infoData from '../data/infoData.json';
import styles from '../assets/CSS/Home.module.css'; 
import CV from '../assets/documents/CV.pdf';
import { ReactComponent as GitHubIcon } from '../assets/Svg/bxl-github.svg';
import { ReactComponent as LinkedInIcon } from '../assets/Svg/bxl-linkedin.svg';
import { ReactComponent as LeetcodeIcon } from '../assets/Svg/bxl-leetcode-alt.svg';

const Home = () => {
  const { name, bio, email, socialLinks } = infoData;
  
  return (
    <>
      <section id="home" className={`${styles.home} ${styles.show_animate}`}>
        <div className={styles.home_row}>
          <div className={styles.home_col}>
            <div className={styles.home_content}>
              <motion.h1 {...animations.fadeInLeft1}>
                Hi, I'm {name}
              </motion.h1>
              <motion.div className={styles.change_text} {...animations.fadeInLeft1}>
                <h3>And I'm</h3>
                <h3>
                  <ChangeText />
                </h3>
              </motion.div>

              <motion.p className={styles.p_text} {...animations.fadeInLeft1}>
                {bio}
              </motion.p>

              <motion.div className={styles.info_boxx} {...animations.fadeInLeft1}>
                <div className={styles.email_info}>
                  <h5><b>Email : </b><span>{email}</span></h5>
                </div>
              </motion.div>

              <motion.div className="btn-box" {...animations.fadeInLeft1}>
                <a href="#contact" className="btn">Hire Me</a>
                <a href={CV} download="Janisar Akhtar Resume" className="btn">Download CV</a>
                <span className={styles.animate} style={{"--i": 4}}></span>
              </motion.div>

              <motion.div className={styles.home_sci} {...animations.fadeInUp}>
                <a target="_blank" rel="noopener noreferrer" href={socialLinks.github}>
                  <GitHubIcon className={styles.bx}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={socialLinks.linkedin}>
                  <LinkedInIcon className={styles.bx}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={socialLinks.leetcode}>
                  <LeetcodeIcon className={styles.bx}/>
                </a>
                <span className={styles.animate} style={{"--i": 5}}></span>
              </motion.div>
            </div>
          </div>
          
          <motion.div className={styles.home_col} {...animations.fadeInRight1}>
            <div className={styles.home_image}>
              <div className={styles.img_box}>
                <img src={Homeimg} alt="Home" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;