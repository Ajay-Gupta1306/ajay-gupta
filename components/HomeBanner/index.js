import React, { useState } from "react";
import styles from "@/styles/Homebanner.module.css";

const Homebanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className={styles.homeBanner}>
      {/* Video Background */}
      {!videoLoaded && (
        <img
          src="/banner.avif"
          alt="Home Banner Placeholder"
          className={styles.placeholderImage}
        />
      )}
      <video
        autoPlay
        loop
        muted
        className={styles.backgroundVideo}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src="/homepage-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className={styles.homeBannerContainer}>
        <div className={styles.column}>
          <h1 className={styles.bannerHeadering}>
            Turn Your Ideas Into Industry-leading Technologies.
          </h1>
          <p className={styles.headingText}>
            Code and Core builds scalable and reliable custom software for
            businesses of all sizes and industries. We transform your ideas into
            top-performing digital products that your customers truly value.
          </p>
        </div>
        <div className={styles.column}>
          <button className={styles.ctaButton}>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Homebanner;
