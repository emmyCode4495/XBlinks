import React from "react";
import Navbar from "./Navbar";
import Lines from "./Lines";
import Lines2 from "./Lines2";
import HeroText from "./HeroText";
import HeroComponent from "./HeroComponent";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="py4 -mb-28 justify-center">
      <Lines />
      <HeroText />
      <HeroComponent />
      <Lines2 />
    </header>
  );
}
