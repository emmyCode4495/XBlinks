import React from "react";
import { useEffect, useRef } from "react";
import { XblinksDetailedLogo } from "./XblinksDetailedLogo";
import gsap from "gsap";
import Image from "next/image";
import BlueBg0 from "./bluebg";
import BlueBg from "./bluebg2";
import FollowX from "./followx";
import ComingSoon from "./comingsoon";
import JoinWaitlist from "./joinwaitlist";

interface Props {}

export default function Header({}: Props) {
  return (
    <header className="relative flex h-screen w-screen flex-col items-center justify-center py-4">
      <BlueBg0 />
      <BlueBg />
      <FollowX />
      {/* <XblinksDetailedLogo
        className="w1/2 mt-2 flex h-10 cursor-pointer text-black transition-colors duration-300 hover:text-blue-400"
        primaryColor="currentColor"
      /> */}
      <ComingSoon />
      <JoinWaitlist />

      <Image
        src="/comingsoonimg.png"
        width={500}
        height={500}
        alt="Coming Soon"
        className="z-10 mt-4"
      />
    </header>
  );
}
