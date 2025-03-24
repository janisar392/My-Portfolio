import React from "react";
import styles from "../assets/CSS/Footer.module.css";
import { motion } from 'framer-motion';
import { animations } from "../components/animations.js";
import { ReactComponent as UpArrow } from "../assets/Svg/bx-up-arrow-alt.svg";

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth", 
    });
  };

  return (
    <footer className={styles.footer}>
      <motion.div className={styles.footer_text} {...animations.fadeInLeft}>
        <p>Copyright &copy; 2025 by Janisar Akhtar | All Rights Reserved.</p>
      </motion.div>

        <motion.button onClick={scrollToTop} className={styles.footer_iconTop} {...animations.fadeInRight}>
          <UpArrow className={styles.img} />
        </motion.button>
    </footer>
  );
};

export default Footer;
