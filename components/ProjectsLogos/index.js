import React from "react";
import styles from "@/styles/projectlogo.module.css";

const logos = [
  "/client-logo/nomwom.avif",
  "/client-logo/ordercup.png",
  "/client-logo/suhino.webp",
  "/client-logo/trumatter.png",
  "/client-logo/essencestudios.png",
  "/client-logo/chessbazaar.avif",
  "/client-logo/shreyasharma.png",
  "/client-logo/atlassian.svg",
  "/client-logo/gig.png",
  "/client-logo/adk.webp",
  "/client-logo/jubinavchadha.webp",
];

const ProjectLogo = () => {
  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.slideTrack}>
        {/* Duplicate the logos to ensure smooth scrolling */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className={styles.logo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectLogo;
