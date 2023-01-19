import { useState } from "react";

import classes from "./CharacterSelectItem.module.css";

export default function CharacterSelectItem(props) {
  const [isSelected, selectCharacter] = useState(false);

  function selectCharacterHandler() {
    selectCharacter(!isSelected);
  }
  const name = props.character.name;

  let characterStyle = isSelected
    ? `${classes[name]} ${classes[name + "-selected"]}`
    : `${classes[name]}`;

  return (
    <div className={classes.card}>
      <div className={characterStyle} onClick={selectCharacterHandler}>
        <h4 className={classes.name}>{name}</h4>
      </div>
    </div>
  );
}
