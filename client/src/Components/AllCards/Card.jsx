import React from "react";
import useFetch from "../../hooks/useFetch";
import { CARD_GET_ID } from "../../../api";
import { useParams } from "react-router-dom";
import CardDeleteBtn from "./CardDeleteBtn";
import styles from "./Card.module.css";

const Card = () => {
  const { request, data, loading, error } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = CARD_GET_ID(id);
    request(url, options);
  }, [request]);

  if (data)
    return (
      <section className={`container containerCard ${styles.section}`}>
        <div>
          <img src={data.src} alt="a img" />
        </div>

        <div className={styles.div__table}>
          <h1>{data.name}</h1>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th>Card Type</th>
                <td>
                  <span>{data.cardType}</span>
                </td>
              </tr>
              <tr>
                <th>Description</th>
                <td>
                  <span>{data.description}</span>
                </td>
              </tr>
            </tbody>
            {console.log(data)}
            {data.cardType === "Monster" && (
              <tbody>
                <tr>
                  <th>Attack</th>
                  <td>
                    <span>{data.monsterAtk}</span>
                  </td>
                </tr>
                <tr>
                  <th>Defense</th>
                  <td>
                    <span>{data.monsterDef}</span>
                  </td>
                </tr>

                <tr>
                  <th>Attribute</th>
                  <td>
                    <span>{data.attribute}</span>
                  </td>
                </tr>
                <tr>
                  <th>Level</th>
                  <td>
                    <span>{data.monsterLevel}</span>
                  </td>
                </tr>
                <tr>
                  <th>Type</th>
                  <td>
                    <span>{data.monsterType}</span>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
          <CardDeleteBtn id={data._id} />
        </div>
      </section>
    );
};

export default Card;
