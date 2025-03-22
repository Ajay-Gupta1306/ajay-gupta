import { useEffect, useRef, useState } from "react";
import styles from "@/styles/Testimonial.module.css";

const testimonialsColumn1 = [
  {
    name: "Jack",
    role: "Maths Student",
    text: "Jacob was an excellent tutor. I have found confidence in my maths skills and improved immeasurably.",
  },
  {
    name: "Katherine",
    role: "Psychology Student",
    text: "Brilliant, a fantastic tutor with great subject knowledge and brilliant tutoring skills.",
  },
  {
    name: "Shannon",
    role: "Parent",
    text: "Justin has been a superstar and my daughter is very happy having tuition with him!",
  },
];

const testimonialsColumn2 = [
  {
    name: "Christopher",
    role: "Parent of Maths Student",
    text: "Our son is really enjoying his lessons with James. His tutoring is of a very high standard.",
  },
  {
    name: "Sarah",
    role: "Oxford PPE Applicant",
    text: "Elinor was amazing, very knowledgeable and helpful. Helped me get a great score at the TSA and an offer at Christ Church.",
  },
  {
    name: "Jane",
    role: "Parent",
    text: "TutorChase responded very promptly. My daughter is now being tutored by Murat, whom I thoroughly recommend.",
  },
];

const testimonialsColumn3 = [
  {
    name: "Jane",
    role: "Parent",
    text: "TutorChase responded very promptly. My daughter is now being tutored by Murat, whom I thoroughly recommend.",
  },
  {
    name: "Sarah",
    role: "Oxford PPE Applicant",
    text: "Elinor was amazing, very knowledgeable and helpful. Helped me get a great score at the TSA and an offer at Christ Church.",
  },
  {
    name: "Christopher",
    role: "Parent of Maths Student",
    text: "Our son is really enjoying his lessons with James. His tutoring is of a very high standard.",
  },
];

const TestimonialSection = () => {
  const colRefs = [useRef(null), useRef(null), useRef(null)];
  const columns = [
    testimonialsColumn1,
    testimonialsColumn2,
    testimonialsColumn3,
  ];

  useEffect(() => {
    const speeds = [-0.2, 0.3, -0.2]; // Different speeds for each column
    const intervals = [];

    colRefs.forEach((colRef, index) => {
      if (colRef.current) {
        let pos = 0;
        const move = () => {
          pos += speeds[index];
          if (pos <= -100) pos = 0;
          if (pos >= 100) pos = 0;
          colRef.current.style.transform = `translateY(${pos}%)`;
        };
        const interval = setInterval(move, 30);
        intervals.push(interval);
      }
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className={styles.testimonialSectionWrapper}>
      <div className={styles.testimonialLeftContent}>
        <h2>Rated 4.93/5 based on 525 reviews</h2>
        <p>Trusted globally by students and parents</p>
        <button className={styles.testimonialButton}>
          Read our verified reviews
        </button>
      </div>
      <div className={styles.testimonialRightContent}>
        {colRefs.map((ref, colIndex) => (
          <div key={colIndex} className={styles.testimonialColumn} ref={ref}>
            {[...columns[colIndex], ...columns[colIndex]].map((t, i) => (
              <div key={i} className={styles.testimonialBox}>
                <p>{t.text}</p>
                <h4>{t.name}</h4>
                <span className={styles.testimonialRole}>{t.role}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
