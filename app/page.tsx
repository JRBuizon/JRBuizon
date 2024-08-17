'use client'

import TypeWriterAnimation from "@/components/typewriterAnimation";
import clsx from "clsx";
import { useState } from "react";

export default function Landing() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [coolText, setCoolText] = useState("awesome")

  function shuffleCoolText() {
    const words = ["wow so cool", "awesome", "how'd he do that", "lit 🔥", "amazing", "siiick"];
    const wordIndex = Math.floor(Math.random() * words.length)
    return words[wordIndex]
  }
  function handleMouseMove(e) {
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
      <span id="hover-text" style={{ 'pointerEvents': 'none' }} className={clsx("z-[9] cursor-default origin-center text-black absolute text-xs", !textExpanded && "hidden", textExpanded && "text-white")}>{coolText}</span>

      <div className="flex flex-row w-full">
        <div className="bg-black w-[50%] flex flex-col items-start px-[5%] justify-center h-[100vh] cursor-default tracking-widest text-white text-[48px]">
          <span onMouseEnter={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className="z-[2]">hi. i&apos;m ryan.</span>
          <span onMouseEnter={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className="z-[2] flex flex-row items-center gap-x-4">i develop<TypeWriterAnimation /></span>
        </div>
        <div className="w-[50%] h-[100vh] flex flex-col justify-center items-center">
          <div className="rounded-full bg-[#EB5353] p-2" />
        </div>



      </div>
    </div>
  );
}
