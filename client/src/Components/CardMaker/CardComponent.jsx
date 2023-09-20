import React from "react";
import styles from "./CardComponent.module.css";
import cardFile from "../../Assets/dbazuis.png";
import StarIMG from "./StarIMG";
import { GlobalContext } from "../../GlobalContext";
import attributeLight from "../../Assets/attributesLight.svg";
import attributeDark from "../../Assets/attributesDark.svg";
import attributeDivine from "../../Assets/attributesDivine.svg";
import attributeEarth from "../../Assets/attributesEarth.svg";
import attributeFire from "../../Assets/attributesFire.svg";
import attributeWater from "../../Assets/attributesWater.svg";
import attributeWind from "../../Assets/attributesWind.svg";
import attributeSpell from "../../Assets/attributesSpell.svg";
import attributeTrap from "../../Assets/attributesTrap.svg";

const CardComponent = () => {
  const {
    name,
    type,
    setType,
    desc,
    atk,
    def,
    atributo,
    starsValue,
    setStarsValue,
    cardType,
  } = React.useContext(GlobalContext);

  // Stars
  let stars = [];
  for (let i = 0; i < starsValue; i++) {
    stars.push(<StarIMG key={i} />);
  }

  // Attribute
  const [attributeImg, setAttributeImg] = React.useState("");
  React.useEffect(() => {
    if (atributo === "Light") {
      setAttributeImg(attributeLight);
    } else if (atributo === "Dark") {
      setAttributeImg(attributeDark);
    } else if (atributo === "Divine") {
      setAttributeImg(attributeDivine);
    } else if (atributo === "Fire") {
      setAttributeImg(attributeFire);
    } else if (atributo === "Water") {
      setAttributeImg(attributeWater);
    } else if (atributo === "Wind") {
      setAttributeImg(attributeWind);
    } else if (atributo === "Earth") {
      setAttributeImg(attributeEarth);
    }
  }, [atributo]);

  // Card Type
  const [bgcolor, setBgcolor] = React.useState("");
  const [titleColor, setTitleColor] = React.useState("#000");

  React.useEffect(() => {
    if (cardType === "Monster") {
      setBgcolor("#c09350");
      setTitleColor("#000");
      setStarsValue(3);
      setType("Dragon");
      setAttributeImg(attributeLight);
    } else if (cardType === "Spell") {
      setStarsValue(false);
      setBgcolor("#32A8AE");
      setTitleColor("#fff");
      setAttributeImg(attributeSpell);
      setType("Spell Card");
    } else if (cardType === "Trap") {
      setBgcolor("#931D79");
      setTitleColor("#fff");
      setStarsValue(false);
      setType("Trap Card");
      setAttributeImg(attributeTrap);
    }
  }, [cardType, setBgcolor, setTitleColor, setStarsValue, setAttributeImg]);

  return (
    <div id="cartaDiv" className={styles.bg1}>
      <div style={{ backgroundColor: `${bgcolor}` }} className={styles.bg2}>
        <div className={styles.cardLayer}>
          <div className={styles.cardTitle}>
            <h1
              style={{
                color: titleColor,
              }}
              id="text"
            >
              {name}
            </h1>
            <img
              className={styles.cardAttribute}
              src={attributeImg}
              alt="Card Attribute"
            />
          </div>
          <div className={styles.cardStars}>{stars}</div>
          <div className={styles.cardStarsNotAMonster}>
            {stars.length === 0 ? <h3>[{type}]</h3> : null}
          </div>

          <div className={styles.cardFile}>
            <img src={cardFile} alt="" />
          </div>
          <div className={styles.cardDesc}>
            {stars.length === 0 ? null : <h3>[{type}]</h3>}
            <p className={styles.cardDescText}>{desc}</p>
            {stars.length === 0 ? (
              <span style={{ minHeight: "50px" }}></span>
            ) : (
              <div className={styles.numbers}>
                <p>
                  ATK/ {atk} DEF/ {def}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
