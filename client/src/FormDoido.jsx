import React from "react";
import { GlobalContext } from "./GlobalContext";
import Input from "./Components/Forms/Input";
import useForm from "./hooks/useForm";
import styles from "./Form.module.css";
import SelectInput from "./Components/Forms/SelectInput";

const FormDoido = () => {
  const {
    setName,
    setType,
    setDesc,
    setAtk,
    setDef,
    setStarsValue,
    starsValue,
    atributo,
    setAtributo,
    cardType,
    setCardType,
  } = React.useContext(GlobalContext);
  const cardName = useForm("", setName);
  const monsterType = useForm("", setType);
  const cardATK = useForm("number", setAtk);
  const cardDEF = useForm("number", setDef);
  const cardDesc = useForm("", setDesc);

  return (
    <form className={styles.form}>
      <Input
        placeholder="Blue-Eyes White Dragon"
        maxLength={35}
        label="Name"
        name="name"
        {...cardName}
      />
      <SelectInput
        label="Card Type"
        name="cardtype"
        options={["Monster", "Spell", "Trap"]}
        value={cardType}
        setValue={setCardType}
      />
      {cardType === "Monster" ? (
        <>
          <Input
            placeholder="Dragon"
            maxLength={18}
            label="Monster Type"
            name="monstertype"
            {...monsterType}
          />
          <SelectInput
            label="Level"
            name="level"
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            value={starsValue}
            setValue={setStarsValue}
          />
          <SelectInput
            label="Attribute"
            name="attribute"
            options={["Light", "Dark", "Earth", "Divine", "Fire"]}
            value={atributo}
            setValue={setAtributo}
          />
          <Input
            placeholder="3000"
            maxLength={5}
            label="ATK"
            name="atk"
            type="text"
            {...cardATK}
          />
          <Input
            placeholder="2500"
            maxLength={5}
            label="DEF"
            name="def"
            type="text"
            {...cardDEF}
          />
        </>
      ) : (
        <>
          <Input placeholder="Dragon" label="Monster Type" disabled={true} />
          <SelectInput label="Level" disabled={true} options={[0]} />
          <SelectInput
            label="Attribute"
            disabled={true}
            options={["Light", "Dark", "Earth", "Divine", "Fire"]}
          />
          <Input placeholder="3000" disabled={true} label="ATK" type="text" />
          <Input placeholder="2500" disabled={true} label="DEF" type="text" />
        </>
      )}

      <Input
        className={styles.cacaro}
        maxLength={215}
        placeholder="This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.
        "
        label="Description"
        name="description"
        type="textarea"
        {...cardDesc}
      />
    </form>
  );
};

export default FormDoido;
