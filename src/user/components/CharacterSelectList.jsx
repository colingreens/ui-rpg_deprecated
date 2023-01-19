import CharacterSelectItem from "./CharacterSelectItem";
import classes from "./CharacterSelectList.module.css";

export default function CharacterSelectList(props) {
  return (
    <div className={classes.list}>
      {props.characterItems.map((item, i) => {
        return <CharacterSelectItem key={item.name + i} character={item} />;
      })}
    </div>
  );
}
