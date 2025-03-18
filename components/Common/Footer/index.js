import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.footerBanner}>
      <svg
        className={styles.footerWaveSvg}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="footerGentleWave"
            d="M-160 44c30 0 
        58-18 88-18s
        58 18 88 18 
        58-18 88-18 
        58 18 88 18
        v44h-352z"
          />
        </defs>
        <g className={styles.footerWaves}>
          <use
            xlinkHref="#footerGentleWave"
            x="50"
            y="0"
            fill="#9D00FF"
            fillOpacity=".2"
          />
          <use
            xlinkHref="#footerGentleWave"
            x="50"
            y="3"
            fill="#6E00B3"
            fillOpacity=".5"
          />
          <use
            xlinkHref="#footerGentleWave"
            x="50"
            y="6"
            fill="#3C0061"
            fillOpacity=".9"
          />
        </g>
      </svg>
      <div className={styles.footerCopyright}>
        <p>Copyright © {currentYear} - Ajay Gupta.</p>
      </div>
    </section>
  );
};

export default Footer;
