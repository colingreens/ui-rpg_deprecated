import { HeartIcon } from "@heroicons/react/24/solid";

import MainHeader from "./MainHeader";

import "./MainNavigation.css";

export default function MainNavigation() {
  return (
    <MainHeader>
      <div>
        <HeartIcon className="heart-icon" />
        <HeartIcon className="heart-icon" />
        <HeartIcon className="heart-icon" />
      </div>
      <h2 className="score">SCORE</h2>
      <h2>QUIT</h2>
    </MainHeader>
  );
}
