import CharacterSelectList from "../components/CharacterSelectList";
import classes from "./CharacterSelect.module.css";

export default function CharacterSelect() {
  const name = "panda";
  return (
    <div className={classes["background-image"]}>
      <div className={classes.title}>
        <h2>Choose your Character</h2>
      </div>
      <div className={classes.container}>
        <CharacterSelectList
          characterItems={[{ name: "archer" }, { name: "barb" }]}
        />
      </div>
    </div>
  );
}
