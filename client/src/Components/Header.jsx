import React from "react";
import Logo from "../Assets/logoMarca.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <a href="#">
          <img src={Logo} alt="" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
