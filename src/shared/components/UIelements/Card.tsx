import { CSSProperties } from "react";
import "./Card.css";

export default function Card(props: {
  className?: any;
  style?: CSSProperties;
  children: any;
}) {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
}
