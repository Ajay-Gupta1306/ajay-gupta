import React, { useState, useEffect } from "react";
import styles from "@/styles/Homebanner.module.css";
import PopupForm from "@/components/PopupForm"; // Import from the new PopupForm folder

const Homebanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const slides = [
    { title: "Fast", subtitle: "Resource Access" },
    { title: "5+", subtitle: "Dedicated Developers" },
    { title: "Agile", subtitle: "Methodology" },
    { title: "NDA", subtitle: "Compliance" },
    { title: "25+", subtitle: "Projects" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={styles.homeBanner}>
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

      <div className={styles.homeBannerContainer}>
        <div className={styles.column_7}>
          <h1 className={styles.bannerHeadering}>
            Turn Your Ideas Into Industry - leading Technologies.
          </h1>
          <p className={styles.headingText}>
            We design and develop scalable, high-performance custom software
            tailored to businesses of all sizes and industries. Our expertise
            transforms your vision into cutting-edge digital solutions that
            drive engagement, enhance efficiency, and deliver lasting value to
            your customers. With a commitment to innovation and reliability, we
            craft technology that empowers your business to thrive in an
            ever-evolving digital landscape.
          </p>
        </div>
        <div className={styles.column_5}>
          <div className={styles.textSlider}>
            <span className={styles.rtc}></span>
            <span className={styles.rbc}></span>
            <span className={styles.ltc}></span>
            <span className={styles.lbc}></span>
            <h3>{slides[currentIndex].title}</h3>
            <p>{slides[currentIndex].subtitle}</p>
          </div>

          {/* CTA Button to open popup */}
          <button
            className={styles.ctaButton_round}
            onClick={() => setIsPopupOpen(true)}
          >
            <em>
              Let's discuss your project
              <img
                src="/arrow_a.svg"
                alt="Click Icon"
                className={styles.clickIcon}
              />
            </em>
          </button>
        </div>
      </div>

      {/* Popup Form Component */}
      <PopupForm isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
};

export default Homebanner;
