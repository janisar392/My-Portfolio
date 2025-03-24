import React, { useEffect } from 'react';
import styles from '../assets/CSS/About.module.css';
import HomeImg from '../assets/img/home.png';
import CV from '../assets/documents/CV.pdf';
import infoData from '../data/infoData.json';
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import { ReactComponent as Githubicon } from "../assets/Svg/bxl-github.svg";
import { ReactComponent as Linkedinicon } from "../assets/Svg/bxl-linkedin.svg";
import { ReactComponent as Leetcodeicon } from "../assets/Svg/bxl-leetcode-alt.svg";
import { ReactComponent as PhoneIcon } from "../assets/Svg/bxs-phone.svg";
import { ReactComponent as EmailIcon } from "../assets/Svg/email.svg";
import { ReactComponent as HomeIcon } from "../assets/Svg/home.svg";
import ChangeText from '../components/ChangeText';
import Education from '../sections/Education';

function About() {
  const { name, longAbout, email, phone, location, socialLinks } = infoData;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section id="about" className="about show-animate">
        <div className={styles.about_row}>
          <motion.div className={styles.about_col} {...animations.fadeInLeft1}>
            <div className={styles.about_image}>
              <div className={styles.img_box}>
                <img src={HomeImg} alt="Profile" />
              </div>
            </div>
          </motion.div>

          <motion.div className={styles.about_col} {...animations.fadeInRight1}>
            <div className={styles.about_content}>
              <h1>I'm {name}</h1>
              <div className={styles.change_text}>
                <h3>And I'm</h3>
                <h3>
                  <ChangeText />
                </h3>
              </div>
              <p className={styles.p_text}>
                {longAbout}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Education />

      <div className={styles.contact_div}>
        <div className={styles.contact_row}>
          <motion.div className={styles.contact_col} {...animations.fadeInUp}>
            <div className={styles.contact_info}>
              <div className={styles.contact_data}>
                <div className={styles.contact_data_col}>
                  <h5>Mobile</h5>
                  <p><PhoneIcon className={styles.sicon}/> {phone}</p>
                  <h5>Email</h5>
                  <p><EmailIcon className={styles.sicon} /> {email}</p>
                </div>

                <div className={styles.contact_data_col}>
                  <h5>Location</h5>
                  <p><HomeIcon className={styles.sicon}/> {location}</p>
                </div>
              </div>

              <div className={styles.contact_social}>
                <div className={styles.social_icon}>
                  <a target="_blank" href={socialLinks.github} rel="noreferrer">
                    <Githubicon className={styles.icon} />
                  </a>
                  <a target="_blank" href={socialLinks.linkedin} rel="noreferrer">
                    <Linkedinicon className={styles.icon} />
                  </a>
                  <a target="_blank" href={socialLinks.leetcode} rel="noreferrer">
                    <Leetcodeicon 
                      className={styles.icon} 
                      style={{ width: '24px', height: '24px', fill: 'currentColor' }} 
                    />
                  </a>
                </div>
              </div>

              <div className={styles.contact_button}>
                <div className="btn-box">
                  <a href={CV} download="Janisar Akhtar Resume" className="btn">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;