import "./MainHeader.css";

export default function MainHeader(props: { children: any }) {
  return <header className="main-header">{props.children}</header>;
}
