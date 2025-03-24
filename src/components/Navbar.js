import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../assets/CSS/Navbar.module.css";
import menu from "../assets/Svg/bx-menu.svg";
import xpath from "../assets/Svg/bx-x.svg";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState("/home");
  const [isSticky, setIsSticky] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Update Active Link on Route Change
  useEffect(() => {
    setActiveLink(location.pathname === "/" ? "/home" : location.pathname);
  }, [location.pathname]);

  // Sticky Navbar & Section Scroll Handling
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let top = window.scrollY;

      sections.forEach((section) => {
        const offset = section.offsetTop - 100;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActiveLink(`/${id}`);
        }
      });

      setIsSticky(top > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth Scroll to Section
  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  // Handle Link Click
  const handleLinkClick = (e, path, id = null) => {
    e.preventDefault();
    setMenuActive(false);

    if (id) {
      if (location.pathname !== "/") {
        navigate("/", { replace: true });
        setTimeout(() => scrollToSection(id), 300);
      } else {
        scrollToSection(id);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className={`${styles.header} ${isSticky ? styles.sticky : ""}`}>
      {/* Logo */}
      <Link to="/" className={styles.logo}>
        JANISAR AKHTAR
        <span className={styles.animate} style={{ "--i": "1" }}></span>
      </Link>

      {/* Hamburger Menu Icon */}
      <div className={styles.menu_icon} onClick={() => setMenuActive(!menuActive)}>
        <img src={menuActive ? xpath : menu} alt="menu icon" className={menuActive ? styles.active : ""} />
        <span className={styles.animate} style={{ "--i": "1" }}></span>
      </div>

      {/* Navigation Links */}
      <nav className={`${styles.navbar} ${menuActive ? styles.active : ""}`}>
        <a href="/#home" className={`${styles.link} ${activeLink === "/home" ? styles.active : ""}`} onClick={(e) => handleLinkClick(e, "/", "home")}>Home</a>
        <Link to="/about" className={`${styles.link} ${activeLink === "/about" ? styles.active : ""}`} onClick={() => { navigate("/about"); setMenuActive(false); }}>About</Link>
        <Link to="/skills" className={`${styles.link} ${activeLink === "/skills" ? styles.active : ""}`} onClick={() => { navigate("/skills"); setMenuActive(false); }}>Skills</Link>
        <Link to="/projects" className={`${styles.link} ${activeLink === "/projects" ? styles.active : ""}`} onClick={() => { navigate("/projects"); setMenuActive(false); }}>Projects</Link>
        <a href="/#contact" className={`${styles.link} ${activeLink === "/contact" ? styles.active : ""}`} onClick={(e) => handleLinkClick(e, "/", "contact")}>Contact</a>
        <span className={styles.active_nav}></span>
        <span className={styles.animate} style={{ "--i": "2" }}></span>
      </nav>
    </header>
  );
};

export default Navbar;