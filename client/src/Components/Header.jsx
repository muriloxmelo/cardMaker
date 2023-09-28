import React from "react";
import Logo from "../Assets/LogoW.svg";
import LogoBg from "../Assets/LogoBg.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a className={styles.logo} href="#">
          <img src={Logo} alt="Site Logo" />
          <div className={styles.logoTitle}>
            <img src={LogoBg} alt="Site Logo" />
            <span>Card Maker</span>
          </div>
        </a>
      </nav>
    </header>
  );
};

export default Header;
