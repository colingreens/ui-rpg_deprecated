import Card from "../../shared/components/UIelements/Card";
import classes from "./CharacterSelect.module.css";

export default function CharacterSelect() {
  return (
    <div className={classes.container}>
      <div className={classes["background-image"]}>
        <Card />
      </div>
    </div>
  );
}
