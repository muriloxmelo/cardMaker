import React from "react";
import { GlobalContext } from "./GlobalContext";
import Input from "./Components/Forms/Input";
import useForm from "./hooks/useForm";
import styles from "./Form.module.css";
import inputStyles from "../src/Components/Forms/Input.module.css";
import SelectInput from "./Components/Forms/SelectInput";

import domtoimage from "dom-to-image";
import useFetch from "./hooks/useFetch";
import { CARD_POST } from "../api";

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
    cardImg,
    setCardImg,
  } = React.useContext(GlobalContext);
  const cardName = useForm("", setName);
  const monsterType = useForm("", setType);
  const cardATK = useForm("number", setAtk);
  const cardDEF = useForm("number", setDef);
  const cardDesc = useForm("", setDesc);
  const { request, data, error, loading } = useFetch();
  const carta = document.querySelector("#cartaDiv");

  function handleDownloadClick(e) {
    e.preventDefault();
    domtoimage.toJpeg(carta, { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement("a");
      link.download = `CardMaker-${Date.now()}.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  }

  async function saveCard(e) {
    e.preventDefault();

    if (
      cardName.validate() &&
      monsterType.validate() &&
      cardDesc.validate() &&
      cardType !== "Monster"
    ) {
      try {
        const dataUrl = await domtoimage.toJpeg(carta, { quality: 0.5 });

        console.log(dataUrl);

        const { url, options } = CARD_POST({
          name: cardName.value,
          cardType: cardType,
          attribute: atributo,
          description: cardDesc.value,
          src: dataUrl,
        });

        await request(url, options);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const dataUrl = await domtoimage.toJpeg(carta, { quality: 0.5 });

        console.log("MONSTER");
        console.log(dataUrl);

        const { url, options } = CARD_POST({
          name: cardName.value,
          cardType: cardType,
          attribute: atributo,
          description: cardDesc.value,
          src: dataUrl,
          monsterType: monsterType.value,
          monsterLevel: starsValue,
          monsterAtk: cardATK.value,
          monsterDef: cardDEF.value,
        });

        await request(url, options);
      } catch (err) {
        console.log(err);
      }
    }
  }

  function handleImgChange({ target }) {
    setCardImg(URL.createObjectURL(target.files[0]));
  }

  return (
    <form onSubmit={saveCard} className={styles.form}>
      <div>
        <label className={inputStyles.label} htmlFor="picture">
          Picture
        </label>
        <input
          onChange={handleImgChange}
          className={inputStyles.input}
          id="picture"
          name="cardPicture"
          type="file"
          accept=".jpeg, .png, .jpg"
        />
      </div>

      <SelectInput
        label="Card Type"
        name="cardType"
        options={["Monster", "Spell", "Trap"]}
        value={cardType}
        setValue={setCardType}
      />
      <Input
        placeholder="Blue-Eyes White Dragon"
        maxLength={35}
        label="Name"
        name="name"
        {...cardName}
      />

      {cardType === "Monster" ? (
        <>
          <Input
            placeholder="Dragon"
            maxLength={18}
            label="Monster Type"
            name="monsterType"
            {...monsterType}
          />
          <SelectInput
            label="Level"
            name="monsterLevel"
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
          <div className={styles.atkDef}>
            <Input
              placeholder="3000"
              maxLength={5}
              label="ATK"
              name="monsterAtk"
              type="text"
              {...cardATK}
            />
            <Input
              placeholder="2500"
              maxLength={5}
              label="DEF"
              name="monsterDef"
              type="text"
              {...cardDEF}
            />
          </div>
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
          <div className={styles.atkDef}>
            <Input placeholder="3000" disabled={true} label="ATK" type="text" />
            <Input placeholder="2500" disabled={true} label="DEF" type="text" />
          </div>
        </>
      )}

      <div className={styles.Desc}>
        <Input
          maxLength={215}
          placeholder="This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.
        "
          label="Description"
          name="description"
          type="textarea"
          {...cardDesc}
        />
      </div>
      <div className={styles.buttonDownload}>
        <button className="button">Salvar</button>

        <button className="button download" onClick={handleDownloadClick}>
          Download
        </button>
      </div>
    </form>
  );
};

export default FormDoido;
