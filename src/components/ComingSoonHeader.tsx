import React from "react";
import BlueBg0 from "./bluebg";
import BlueBg from "./bluebg2";
import FollowX from "./followx";
import ComingSoon from "./comingsoon";
import JoinWaitlist from "./joinwaitlist";
import Icon from "./ComingSoonHero";

interface Props {}

export default function Header({}: Props) {
  return (
    <header className="relative flex h-screen w-screen flex-col items-center justify-center py-4 dark:text-white">
      <BlueBg0 />
      <BlueBg />
      <FollowX />

      <ComingSoon />
      <JoinWaitlist />
      <Icon />
    </header>
  );
}
