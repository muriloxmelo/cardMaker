import React from "react";
import useFetch from "../../hooks/useFetch";
import { CARD_DELETE_ID } from "../../../api";
import { useNavigate } from "react-router-dom";
const CardDeleteBtn = ({ id }) => {
  const { request, loading, error } = useFetch();
  const navigate = useNavigate();

  function handleClick() {
    const { url, options } = CARD_DELETE_ID(id);
    request(url, options);
    navigate("/cards");
  }

  return (
    <>
      <button onClick={handleClick}>Deletar</button>
    </>
  );
};

export default CardDeleteBtn;
