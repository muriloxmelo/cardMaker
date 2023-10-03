import React from "react";
import HomeImg from "./Assets/homeImg.png";
import Homeimg1 from "./Assets/Background.png";
import Homeimg2 from "./Assets/Textboxes.png";
import Homeimg3 from "./Assets/TextureHome.png";
import Homeimg4 from "./Assets/Illustration.png";
import Homeimg5 from "./Assets/Text.png";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div>
        <h1>Create your own YuGiOh Card</h1>
      </div>
      <div className={styles.fotosSection}>
        <div className={styles.fotos}>
          <img className={styles.foto01} src={Homeimg1} alt="" />
          <img className={styles.foto02} src={Homeimg2} alt="" />
          <img className={styles.foto03} src={Homeimg3} alt="" />
          <img className={styles.foto04} src={Homeimg4} alt="" />
          <img className={styles.foto05} src={Homeimg5} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
