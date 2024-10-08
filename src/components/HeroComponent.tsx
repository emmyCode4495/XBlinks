import React from "react";
import HeroArrow from "./HeroArrow";
import HeroVector from "./HeroVector";
import ButtonLink from "./HeroGetStarted";

type Props = {};

export default function HeroComponent({}: Props) {
  return (
    <div className="mx-auto mb-36 mt-14 flex w-10/12 justify-between">
      <div className="relative w-2/5">
        <div className="w-10/12 text-2xl">
          Customizable rewards made easy, using Solana’s innovative blinks
          solution
        </div>

        <HeroArrow />
        <ButtonLink />
      </div>
      <div className="relative w-2/5">
        <div className="absolute right-12 top-14 w-10/12 text-2xl">
          XBlinks empowers crypto creators and collectors with seamless reward
          experiences through blinks-directly on X
        </div>
        <HeroVector />
      </div>
    </div>
  );
}
