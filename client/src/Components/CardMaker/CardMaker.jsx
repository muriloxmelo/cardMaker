import React from "react";
import CardComponent from "./CardComponent";
import FormDoido from "../../FormDoido";

const CardMaker = () => {
  return (
    <section className="container containerCard">
      <CardComponent />
      <FormDoido />
    </section>
  );
};

export default CardMaker;
