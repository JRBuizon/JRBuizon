'use client'

import TypeWriterAnimation from "@/components/typewriterAnimation";
import clsx from "clsx";
import { useRef, useState } from "react";

export default function Landing() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [carryingRed, setCarryingRed] = useState(false);
  const [carryingBlue, setCarryingBlue] = useState(false);
  const [carryingYellow, setCarryingYellow] = useState(false);
  const [carryingGreen, setCarryingGreen] = useState(false);
  const [coolText, setCoolText] = useState("awesome")
  const redRef = useRef<HTMLSpanElement>(null)
  const blueRef = useRef<HTMLSpanElement>(null)
  const greenRef = useRef<HTMLSpanElement>(null)
  const yellowRef = useRef<HTMLSpanElement>(null)
  const mouseTextRef = useRef<HTMLSpanElement>(null)

  function shuffleCoolText() {
    const words = ["wow so cool", "✨ awesome ✨", "how'd he do that?", "lit 🔥", "fire 🔥", "✨ amazing ✨", "siiick"];
    const wordIndex = Math.floor(Math.random() * words.length)
    return words[wordIndex]
  }
  function handleMouseMove(e: MouseEvent) {
    const hoverText = document.getElementById("hover-text");
    if (!hoverText) return;
    // set the element's new position:
    if (mouseTextRef.current) {
      hoverText.style.top = (e.clientY - mouseTextRef.current.offsetHeight) + "px";
      hoverText.style.left = (e.clientX - (mouseTextRef.current.offsetWidth / 2)) + "px";
    }

    if (carryingRed && redRef.current) {
      redRef.current.style.top = (e.clientY - (redRef.current.offsetHeight / 2)) + 'px';
      redRef.current.style.left = (e.clientX - (redRef.current.offsetWidth / 2)) + 'px';
    }
    if (carryingBlue && blueRef.current) {
      blueRef.current.style.top = (e.clientY - (blueRef.current.offsetHeight / 2)) + 'px';
      blueRef.current.style.left = (e.clientX - (blueRef.current.offsetWidth / 2)) + 'px';
    }
    if (carryingYellow && yellowRef.current) {
      yellowRef.current.style.top = (e.clientY - (yellowRef.current.offsetHeight / 2)) + 'px';
      yellowRef.current.style.left = (e.clientX - (yellowRef.current.offsetWidth / 2)) + 'px';
    }
    if (carryingGreen && greenRef.current) {
      greenRef.current.style.top = (e.clientY - (greenRef.current.offsetHeight / 2)) + 'px';
      greenRef.current.style.left = (e.clientX - (greenRef.current.offsetWidth / 2)) + 'px';
    }
  }

  function handleMouseUp(e: MouseEvent) {
    if (carryingRed && redRef.current) {
      setCarryingRed(false)
      setCarryingBlue(false)
      setCarryingYellow(false)
      setCarryingGreen(false)
    }
  }
  document.onmousemove = handleMouseMove;
  document.onmouseup = handleMouseUp;


  return (
    <div className="flex flex-col w-full items-center">
      <span ref={mouseTextRef} id="hover-text" style={{ 'pointerEvents': 'none' }} className={clsx("z-[9] cursor-default origin-center text-black absolute text-xs", !textExpanded && "opacity-0", textExpanded && "text-white")}>{coolText}</span>

      <div className="flex flex-row w-full">
        <span ref={redRef} onMouseDown={() => setCarryingRed(true)} onMouseUp={() => setCarryingRed(false)} id="red" style={{ 'position': 'absolute' }} className="z-[9] cursor-pointer origin-center absolute bg-[#EB5353] p-2 top-[63%] left-[5%]" />
        <span ref={blueRef} onMouseDown={() => setCarryingBlue(true)} onMouseUp={() => setCarryingBlue(false)} id="blue" style={{ 'position': 'absolute' }} className="z-[9] cursor-pointer origin-center absolute bg-[#187498] p-2 top-[63%] left-[8%]" />
        <span ref={yellowRef} onMouseDown={() => setCarryingYellow(true)} onMouseUp={() => setCarryingYellow(false)} id="yellow" style={{ 'position': 'absolute' }} className="z-[9] cursor-pointer origin-center absolute bg-[#F9D923] p-2 top-[63%] left-[11%]" />
        <span ref={greenRef} onMouseDown={() => setCarryingGreen(true)} onMouseUp={() => setCarryingGreen(false)} id="green" style={{ 'position': 'absolute' }} className="z-[9] cursor-pointer origin-center absolute bg-[#36AE7C] p-2 top-[63%] left-[14%]" />
        <div draggable="false" className="noselect bg-black w-[50%] flex flex-col items-start px-[5%] justify-center h-[100vh] cursor-default tracking-widest text-white text-[48px]">
          <span onMouseEnter={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className="z-[2]">hi. i&apos;m ryan.</span>
          <span onMouseEnter={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className="z-[2] flex flex-row items-center gap-x-4">i develop<TypeWriterAnimation /></span>
        </div>
        <div className="w-[50%] h-[100vh] flex flex-col justify-center items-center">

        </div>



      </div>
    </div>
  );
}
