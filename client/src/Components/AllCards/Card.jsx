import React from "react";
import useFetch from "../../hooks/useFetch";
import { CARD_GET_ID } from "../../../api";
import { useParams } from "react-router-dom";

const Card = () => {
  const { request, data, loading, error } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = CARD_GET_ID(id);
    request(url, options);
  }, [request]);

  if (data)
    return (
      <section>
        <div>
          <img src={data.src} alt="a img" />
        </div>
        <div>
          <h1>{data.name}</h1>
          <h3>
            ATK / DEF: {data.monsterAtk} / {data.monsterDef}
          </h3>
        </div>
      </section>
    );
};

export default Card;
