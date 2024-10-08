import React from "react";

type Props = {};

export default function HeroText({}: Props) {
  return (
    <div
      className={`mx-auto mt-10 h-[230px] w-full max-w-[1062px] text-center text-9xl font-bold leading-[120%] text-[#0A0A0B] md:text-[48px] lg:text-[96px] xl:text-[96px]`}
    >
      Customizable rewards on X using {""}
      <span className="stroke-black text-[#08A0E9]">Blinks</span>
    </div>
  );
}
