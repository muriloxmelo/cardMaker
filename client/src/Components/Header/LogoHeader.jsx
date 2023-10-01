import React from "react";
import Logo from "../../Assets/LogoW.svg";
import LogoBg from "../../Assets/LogoBg.svg";
import styles from "./Header.module.css";
const LogoHeader = () => {
  return (
    <a className={styles.logo} href="/">
      <img src={Logo} alt="Site Logo" />
      <div className={styles.logoTitle}>
        <img src={LogoBg} alt="Site Logo" />
        <span>Card Maker</span>
      </div>
    </a>
  );
};

export default LogoHeader;
