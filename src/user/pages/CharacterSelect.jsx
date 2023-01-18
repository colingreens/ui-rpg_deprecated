import Card from "../../shared/components/UIelements/Card";
import classes from "./CharacterSelect.module.css";

export default function CharacterSelect() {
  return (
    <div className={classes.container}>
      <div className={classes["background-image"]}>
        <div className={classes.title}>
          <h2>Choose a Character</h2>
        </div>
        <Card className={classes.card} />
      </div>
    </div>
  );
}
