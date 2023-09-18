import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [name, setName] = React.useState("Blue-Eyes White Dragon");
  const [type, setType] = React.useState("Dragon");
  const [desc, setDesc] = React.useState(
    "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
  );
  const [atk, setAtk] = React.useState("3000");
  const [def, setDef] = React.useState("2500");
  const [starsValue, setStarsValue] = React.useState(7);
  const [atributo, setAtributo] = React.useState("Light");
  const [cardType, setCardType] = React.useState("Monster");

  return (
    <GlobalContext.Provider
      value={{
        name,
        setName,
        atk,
        setAtk,
        def,
        setDef,
        type,
        setType,
        desc,
        setDesc,
        starsValue,
        setStarsValue,
        atributo,
        setAtributo,
        cardType,
        setCardType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
