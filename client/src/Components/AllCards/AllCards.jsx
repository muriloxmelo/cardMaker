import React from "react";
import useFetch from "../../hooks/useFetch";
import { CARDS_GET } from "../../../api";
import { Link } from "react-router-dom";
import styles from "./AllCards.module.css";

const AllCards = () => {
  const { request, error, loading, data } = useFetch();

  React.useEffect(() => {
    const { url, options } = CARDS_GET();
    request(url, options);
    console.log(data);
  }, [request]);

  if (error) return <h1 style={{ color: "white" }}>Error</h1>;
  if (loading) return <h1 style={{ color: "white" }}>LOADING...</h1>;
  if (data)
    return (
      <section className={`container ${styles.section}`}>
        {data.map((card) => (
          <div className={styles.cardContainer}>
            <Link className={styles.cardsImg} to={card._id} key={card._id}>
              <img src={card.src} alt="" />
            </Link>
          </div>
        ))}
      </section>
    );
  else return null;
};

export default AllCards;
