import React, { useRef } from "react";
import { motion } from "framer-motion"; 
import { animations } from "../components/animations.js";
import styles from "../assets/CSS/Contact.module.css";
import CV from "../assets/documents/CV.pdf";
import emailjs from "emailjs-com";
import infoData from "../data/infoData.json";
import { ReactComponent as Githubicon } from "../assets/Svg/bxl-github.svg";
import { ReactComponent as Linkedinicon } from "../assets/Svg/bxl-linkedin.svg";
import { ReactComponent as Instaicon } from "../assets/Svg/bxl-leetcode-alt.svg";
import { ReactComponent as PhoneIcon} from "../assets/Svg/bxs-phone.svg";
import { ReactComponent as EmailIcon} from "../assets/Svg/email.svg";
import { ReactComponent as HomeIcon} from "../assets/Svg/home.svg";

const Contact = () => {
  const form = useRef();
  const { email, phone, location, socialLinks } = infoData;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gcxfzdb",
        "template_dtakcgz",
        form.current,
        "Gp7jHb0oQZ8Jp1mcL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>

      <motion.div className={styles.contact_div} {...animations.fadeInUp}>
        <div className={styles.contact_row}>
          {/* Left Side - Form Animation */}
          <motion.div  className={styles.contact_col} {...animations.fadeInUp}>
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles.input_box}>
                <div className={styles.input_field}>
                  <input type="text" name="name" placeholder="Full Name" required />
                  <span className={styles.focus}></span>
                </div>
                <div className={styles.input_field}>
                  <input type="text" name="phone number" placeholder="Mobile Number" required />
                  <span className={styles.focus}></span>
                </div>
              </div>

              <div className={styles.input_box}>
                <div className={styles.input_field_email}>
                  <input type="text" name="email" placeholder="Email Address" required />
                  <span className={styles.focus}></span>
                </div>
              </div>

              <div className={styles.textarea_field}>
                <textarea name="message" placeholder="Your Message....." cols="30" rows="10" required></textarea>
              </div>

              <div className="btn-box btns">
                <button type="submit" className="btn">Submit</button>
              </div>
            </form>
          </motion.div>

          {/* Right Side - Contact Info Animation */}
          <motion.div className={styles.contact_col} {...animations.fadeInRight}>
            <div className={styles.contact_info}>
              <div className={styles.contact_data}>
                <div className={styles.contact_data_col}>
                  <h5>Mobile</h5>
                  <p><PhoneIcon className={styles.sicon} /> {phone}</p>

                  <h5>Email</h5>
                  <p><EmailIcon className={styles.sicon} /> {email}</p>
                </div>

                <div className={styles.contact_data_col}>
                  <h5>Location</h5>
                  <p><HomeIcon className={styles.sicon} /> {location}</p>
                </div>
              </div>

              {/* Social Icons Animation */}
              <motion.div className={styles.contact_social}>
                <div className={styles.social_icon}>
                  <a target="_blank" href={socialLinks.github} rel="noreferrer">
                    <Githubicon className={styles.icon} />
                  </a>
                  <a target="_blank" href={socialLinks.linkedin} rel="noreferrer">
                    <Linkedinicon className={styles.icon} />
                  </a>
                  <a target="_blank" href={socialLinks.leetcode} rel="noreferrer">
                    <Instaicon className={styles.icon} />
                  </a>
                </div>
              </motion.div>

              <div className={styles.contact_button}>
                <div className="btn-box">
                  <a href={CV} download="Janisar Akhtar Resume" className="btn">Download CV</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
