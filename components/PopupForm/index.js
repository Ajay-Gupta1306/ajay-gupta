import React from "react";
import styles from "@/styles/PopupForm.module.css";

const PopupForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Hide popup if not open

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          x
        </button>

        {/* Form Heading */}
        <div className={styles.pupup_head}>
          <h2 className={styles.heading}>Let’s Discuss Your Project</h2>
        </div>

        {/* Form Fields */}
        <form className={styles.popup_form_sec}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="First Name*"
              required
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Last Name*"
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Your Email*"
              required
              className={styles.inputField}
            />
            <input
              type="tel"
              placeholder="Phone Number*"
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Company Name"
              className={styles.inputField}
            />
            <input
              type="url"
              placeholder="Website URL"
              className={styles.inputField}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>
            <en>Submit</en>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
