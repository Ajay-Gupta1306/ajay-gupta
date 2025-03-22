import React from "react";
import styles from "@/styles/Technology.module.css"; // Import unique CSS module

const TechnologyStack = () => {
  return (
    <section className={styles.techStack_container}>
      <div className={styles.techStack_content}>
        <div className={styles.techStack_grid}>
          {/* First Column: Heading and Button */}
          <div className={styles.techStack_firstColumn}>
            <h2 className={styles.techStack_title}>Stack of Technologies</h2>
            <p className={styles.techStack_description}>
              We bring experience and expertise in scalable technologies to
              build custom solutions for your business. From beautiful UI/UX
              designs to robust back-end systems, we've got you covered.
            </p>
            <button className={styles.techStack_button}>
              <em>View all</em>
            </button>
          </div>

          {/* Second Column: Design & Animation and Back-End Development */}
          <div className={styles.techStack_secondColumn}>
            <div className={styles.techStack_category}>
              <h3>Design & Animation</h3>
              <ul>
                <li>
                  <img src="/icons/figma.svg" alt="Figma" /> Figma
                </li>
                <li>
                  <img src="/icons/sketch.svg" alt="Sketch" /> Sketch
                </li>
                <li>
                  <img src="/icons/xd.svg" alt="Adobe XD" /> Adobe XD
                </li>
                <li>
                  <img
                    src="/icons/invision-white-studio.svg"
                    alt="InVision Studio"
                  />{" "}
                  InVision Studio
                </li>
              </ul>
            </div>
            <div className={styles.techStack_category}>
              <h3>Back-End Development</h3>
              <ul>
                <li>
                  <img src="/icons/WordPress.svg" alt="WordPress" /> WordPress
                </li>
                <li>
                  <img src="/icons/PHP.svg" alt="PHP" /> PHP
                </li>
                <li>
                  <img src="/icons/Laravel.svg" alt="Laravel" /> Laravel
                </li>
                <li>
                  <img src="/icons/nodejs-white-icon.svg" alt="Node.js" />{" "}
                  Node.js
                </li>
              </ul>
            </div>
            <div className={styles.techStack_category}>
              <h3>Opensource</h3>
              <ul>
                <li>
                  <img src="/icons/WordPress.svg" alt="WordPress" /> WordPress
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/shopify.svg"
                    alt="Shopify"
                  />{" "}
                  Shopify
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/hubspot.svg"
                    alt="Hubspot"
                  />{" "}
                  Hubspot
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/october.svg"
                    alt="October"
                  />
                  October
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/joomla.svg"
                    alt="Joomla"
                  />
                  Joomla
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/magento.svg"
                    alt="Magento"
                  />
                  Magento
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/webflow.svg"
                    alt="Webflow"
                  />
                  Webflow
                </li>
                <li>
                  <img
                    className={styles.white_icon}
                    src="/icons/wix.svg"
                    alt="Wix"
                  />
                  Wix
                </li>
              </ul>
            </div>
          </div>

          {/* Third Column: Front-End Development and Database Solutions */}
          <div className={styles.techStack_thirdColumn}>
            <div className={styles.techStack_category}>
              <h3>Front-End Development</h3>
              <ul>
                <li>
                  <img src="/icons/html5.svg" alt="HTML5" /> HTML5
                </li>
                <li>
                  <img src="/icons/css.svg" alt="CSS3" /> CSS3
                </li>
                <li>
                  <img src="/icons/javascript.svg" alt="JavaScript" />
                  JavaScript
                </li>
                <li>
                  <img src="/icons/jQuery.svg" alt="jQuery" /> jQuery
                </li>
                <li>
                  <img src="/icons/reactjs-white-icon.svg" alt="React" /> React
                </li>
                <li>
                  <img src="/icons/nextjs-white-icon.svg" alt="Next.js" />{" "}
                  Next.js
                </li>
                <li>
                  <img src="/icons/material.svg" alt="Material" /> Material UI
                </li>
                <li>
                  <img src="/icons/Three.svg" alt="Three" /> Three.js
                </li>
                <li>
                  <img src="/icons/GSAP.svg" alt="GSAP" /> GSAP
                </li>
              </ul>
            </div>
            <div className={styles.techStack_category}>
              <h3>Database Solutions</h3>
              <ul>
                <li>
                  <img src="/icons/mysql.svg" alt="MySQL" /> MySQL
                </li>
                <li>
                  <img src="/icons/mongodb.svg" alt="MongoDB" /> MongoDB
                </li>
                <li>
                  <img src="/icons/aws-white-icon.svg" alt="AWS" /> AWS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
