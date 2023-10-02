import React from "react";
import useFetch from "../../hooks/useFetch";
import { CARDS_GET } from "../../../api";
import { Link, useParams } from "react-router-dom";
import styles from "./AllCards.module.css";

const AllCards = () => {
  const { request, error, loading, data } = useFetch();

  React.useEffect(() => {
    const { url, options } = CARDS_GET();
    request(url, options);
  }, [request]);

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
};

export default AllCards;
