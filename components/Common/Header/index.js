import React, { useEffect, useState } from "react";
import styles from "@/styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";
import "@/styles/Header.module.css";

const Header = () => {
  const [showLogo, setShowLogo] = useState(false);
  const [showA, setShowA] = useState(false);
  const [showG, setShowG] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowLogo(true), 500);
    setTimeout(() => setShowA(true), 700);
    setTimeout(() => setShowG(true), 900);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {showLogo && (
          <Image
            src="/ajaygupta.png"
            alt="Logo"
            width={50}
            height={40}
            className={styles.fadeIn}
          />
        )}
        {showA && <span className={`${styles.a} ${styles.fadeIn}`}>A</span>}
        {showG && <span className={`${styles.g} ${styles.fadeIn}`}>G</span>}
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
