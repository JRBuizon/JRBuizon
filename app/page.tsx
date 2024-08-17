'use client'

import clsx from "clsx";
import { useEffect, useState } from "react";


export default function Landing() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [coolText, setCoolText] = useState("awesome")

  function shuffleCoolText() {
    const words = ["wow so cool", "awesome", "how'd he do that", "lit 🔥"];
    const wordIndex = Math.floor(Math.random() * words.length)
    return words[wordIndex]
  }
  function handleMouseMove(e) {
    console.log(e.clientX, e.clientY)
    const hoverText = document.getElementById("hover-text");
    if (!hoverText) return;
    e = e || window.event;
    e.preventDefault();
    // set the element's new position:
    hoverText.style.top = (e.clientY - 16) + "px";
    hoverText.style.left = (e.clientX - 16) + "px";
  }
  document.onmousemove = handleMouseMove;


  return (
    <div className="flex flex-col w-full items-center">
      <span id="hover-text" className={clsx("z-[1] cursor-default origin-center text-black absolute text-xs", !textExpanded && "hidden", textExpanded && "text-white")}>{coolText}</span>

      <div className="flex flex-row w-full">
        <div className="w-[50%] h-[90vh] flex flex-col justify-center items-center">
          <span className="lowercase tracking-widest font-bold text-[32px]">jeremiah ryan buizon</span>
        </div>

        <div className="bg-black w-[50%] flex flex-col items-start px-[5%] justify-center h-[90vh] cursor-default">
          <span onMouseEnter={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className="lowercase tracking-widest text-white text-[24px] px-8 z-[2]"><span>hallo.</span> i&apos;m ryan, a very busy developer</span>
          <span className={clsx("lowercase tracking-widest text-[24px] px-8 absolute text-black transition-all ease-in-out duration-500", textExpanded && "text-[#c2c2c2] translate-y-[1.25em]")}><span className="text-black">hallo. i&apos;m ryan, a very </span> <span className={clsx("transition-all ease-in-out duration-500", textExpanded && "text-[#c2c2c2]")}>bored</span> <span className="text-black">developer</span></span>
          <span className={clsx("lowercase tracking-widest text-[24px] px-8 absolute text-black transition-all ease-in-out duration-500", textExpanded && "text-[#525252] translate-y-[2.5em]")}><span className="text-black">hallo. i&apos;m ryan, a very </span> <span className={clsx("transition-all ease-in-out duration-500", textExpanded && "text-[#525252]")}>broke(?)</span> <span className="text-black">developer</span></span>
          <span className={clsx("lowercase tracking-widest text-[24px] px-8 absolute text-black transition-all ease-in-out duration-500", textExpanded && "text-[#c2c2c2] translate-y-[-1.25em]")}><span className="text-black">hallo. i&apos;m ryan, a very busy</span> <span className={clsx("transition-all ease-in-out duration-500", textExpanded && "text-[#c2c2c2]")}>freelancer</span></span>
          <span className={clsx("lowercase tracking-widest text-[24px] px-8 absolute text-black transition-all ease-in-out duration-500", textExpanded && "text-[#525252] translate-y-[-2.5em]")}><span className="text-black">hallo. i&apos;m ryan, a very busy</span> <span className={clsx("transition-all ease-in-out duration-500", textExpanded && "text-[#525252]")}>student</span></span>
        </div>

      </div>
      <span className="lowercase tracking-widest font-bold">some stuff i&apos;ve worked on</span>
    </div>
  );
}
