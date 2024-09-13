import React from "react";
import { motion } from "framer-motion";
import "./MyDetails.css";

import Avatar from "../../assets/imgs/avatar.png";
import Star from "../../assets/imgs/star.svg";

export default function MyDetails() {
  return (
    <div className="my-details">
      <motion.div
        initial={{ opacity: 0, y: -30 }} // Start state
        animate={{ opacity: 1, y: 0 }} // End state (animation)
        transition={{ delay: 0.2, duration: 0.8 }} // Animation duration
      >
        <div className="contact-bar">
          <div className="contact-item">
            <a
              href="https://github.com/paugal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="contact-item">
            <a
              href="https://www.linkedin.com/in/paugalan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <a
              href={require("../../assets/documents/CV_PAU_GALAN.pdf")}
              download="CV_PAU_GALAN_WEB_DEVELOPER"
            >
              Download CV
            </a>
          </div>
          <div className="contact-item"> Contact Me</div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -30 }} // Start state
        animate={{ opacity: 1, y: 0 }} // End state (animation)
        transition={{ delay: 0.3, duration: 0.8 }} // Animation duration
      >
        <div className="image-details">
          <div className="img-icons">
            <motion.div
              initial={{ opacity: 0, y: -30 }} // Start state
              animate={{ opacity: 1, y: 0 }} // End state (animation)
              transition={{ delay: 0.4, duration: 0.8 }} // Animation duration
            >
              <img className="start01" src={Star} alt="star icon" />
            </motion.div>
            <div className="avatar-image">
              <img src={Avatar} alt="img-of-me" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: -40 }} // Start state
              animate={{ opacity: 1, y: -30 }} // End state (animation)
              transition={{ delay: 0.4, duration: 0.8 }} // Animation duration
            >
              <img className="start02" src={Star} alt="star icon" />
            </motion.div>
          </div>
          <div className="my-info">
            <div className="experience">
              <h3>Work Experience</h3>
              <span>
                More than 2 year in Capgemini, developing webs with React.
              </span>
            </div>
            <div className="education">
              <h3> Education</h3>
              <span>
                Degree in computer engineering at Pompeu Fabra University
                (Barcelona).
              </span>
            </div>
            <div className="certifications">
              <h3>Certifications</h3>
              <ul>
                <li>Front-end Developer Certificate by Meta</li>
                <li> Vantage level certificate(B2.2 CERF) in english</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
