import { HeartIcon } from "@heroicons/react/24/solid";

import MainHeader from "./MainHeader";

import "./MainNavigation.css";

var health = [1, 1, 1, 1, 1];

export default function MainNavigation() {
  return (
    <MainHeader>
      <div>
        {health.map(() => {
          return <HeartIcon className="heart-icon" />;
        })}
      </div>
      <h2 className="score">SCORE</h2>
      <h2>QUIT</h2>
    </MainHeader>
  );
}
