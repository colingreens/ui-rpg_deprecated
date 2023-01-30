import classes from "./Combat.module.css";

export default function Combat(props) {
  return (
    <div>
      <div className={classes.background}>
        <h2 className="center">Fight</h2>
        <div className={classes.stage}>
          <span className={classes.player}></span>
          <span className={classes.enemy}></span>
        </div>
        <div className={classes.cards}>
          <div>Combat Cards</div>
        </div>
      </div>
    </div>
  );
}
