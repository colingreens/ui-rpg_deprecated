import CharacterSelectList from "../components/CharacterSelectList";
import classes from "./CharacterSelect.module.css";

export default function CharacterSelect() {
  return (
    <div className={classes["background-image"]}>
      <div className={classes.title}>
        <h2>Choose your Character</h2>
      </div>
      <div className={classes.characters}>
        <CharacterSelectList
          characterItems={[
            { name: "fire-mage" },
            { name: "archer" },
            { name: "druid" },
            { name: "barb" },
          ]}
        />
      </div>
    </div>
  );
}
