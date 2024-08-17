'use client'

import TypeWriterAnimation from "@/components/typewriterAnimation";
import clsx from "clsx";
import { useRef, useState } from "react";
import Image from "next/image";
import headerImage from "@/public/images/header_image_temp.png"
import Link from "next/link";
import mdg from '@/public/images/mdg.gif'
import mwm from '@/public/images/mwm.png'
import bcom from '@/public/images/become.png'
import kinhub from '@/public/images/kinhub.png'
import flower from '@/public/images/flower.gif'
import { Rethink_Sans } from "next/font/google";
import CodeText from "@/components/codeText";
import BlueText from "@/components/blueText";
import GreenText from "@/components/greenText";
import LinkCard from "@/components/linkCard";
import HorizontalScroll from "@/components/horizontalScroll";

const rethink = Rethink_Sans({ subsets: ['latin'] })

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
        <div className="relative w-[50%] h-[100vh] flex flex-row justify-start items-center">
          <Image width={"300"} src={headerImage} alt="header image" />
          <span>i&apos;m still building this part</span>
        </div>
      </div>
      <HorizontalScroll>stuff i&apos;ve worked on /// stuff i&apos;ve worked on /// stuff i&apos;ve worked on</HorizontalScroll>
      <div className="gap-y-12 bg-black flex flex-col items-start w-full px-[5%] pt-[3%] pb-[5%]">

        <div className="flex flex-col items-start w-full">
          {/* KINHUB SECTION */}
          <span className="text-yawhite pb-4">working at <Link target="_blank" className="cursor-pointer text-yablue" href="https://kinhub.com">kinhub</Link> <span className="text-xs">(2023<span className="text-sm"> - present</span>)</span></span>

          <div className="flex flex-row w-full gap-x-[32px]">
            <div className={clsx("text-yawhite flex w-[32%] flex-col text-sm", rethink.className)}>
              <LinkCard className="bg-white" gif source={kinhub} link="https://kinhub.com" />

              <BlueText className="pt-2 pb-1">
                junior full-stack developer
              </BlueText>
              <span>
                kinhub has been my home for the past year and a few. i started working freelance for them back when i was still in highschool. working here has been one of the most valuable experiences of my career in terms of both the technical skills and connections acquired.
              </span>
              <span className="pt-2">
                +{" "}
                <BlueText>agile-based work environment</BlueText>
                {" "}(sprints, tickets, stand-ups)
              </span>
              <span>
                +{" "}
                <GreenText>
                  frontend development skills
                </GreenText>
                {" "}(next.js, react, tailwind)
              </span>
              <span>
                +{" "}
                <GreenText>
                  backend development skills
                </GreenText>
                {' '} (APIs, databases, docker)
              </span>
            </div>
            <div className="w-[65%] flex flex-row gap-x-[32px]">
              <div className={clsx("text-yawhite flex w-[50%] flex-col text-sm", rethink.className)}>
                <span>
                  this <span className="text-yared">flower input field</span> is by far the most fun i&apos;ve had designing a frontend component for kinhub. being an <span className="border border-solid p-[2px] border-white border-[1px]">input field</span>{' '}, it was the perfect blend of <span className="text-yagreen">frontend</span> and <span className="text-yagreen">backend</span>. it was designed after <Link className="text-yablue cursor-pointer underline underline-offset-2" href="https://www.6seconds.org/2022/03/13/plutchik-wheel-emotions/" target="_blank">Robert Plutchik&apos;s wheel of emotions</Link> and is compatible with <CodeText>react hook form</CodeText>.
                  <br />
                  <br />
                  <span className="text-base"># positioning the elements</span>
                  <br />
                  i positioned &lt;input&gt; tags in a circle using polar coordinates. a petal svg was positioned over each &lt;input&gt; element with the origin point at one end of the petal / &lt;input&gt; tag.
                  <br />
                  <br />
                  <span className="text-base"># changing the petal lengths</span>
                  <br />
                  to calculate for the petal lengths, i used react hook form's watch function to track the respective &lt;input&gt; elements' values then mutliplied by some factor when scaling the petals. this resulted in a linear scale so i used a bezier curve to have the petals scale properly. finally, i used tailwind's transition class to animate the petals for that extra ✨
                </span>
              </div>
              <div className="bg-[#fbfbfb] relative w-[50%] h-[100%] rounded-md p-16">
                <div className="bg-[#fbfbfb] relative w-full h-[100%] rounded-md">
                  <Image unoptimized alt='flower' src={flower} fill objectFit="contain" />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className="flex flex-col items-start w-full">
          {/* GOLAUNCH SECTION */}
          <span className="text-yawhite pb-4">projects at <GreenText><Link target="_blank" className="cursor-pointer" href="https://golaunch.live">golaunch.live</Link></GreenText></span>
          <div className="flex flex-row gap-x-[32px] w-full">
            <LinkCard source={mwm} link="https://mindwhatmatters.com.sg" />
            <LinkCard source={mdg} link="https://museodelgaleon.org" gif />
            <LinkCard source={bcom} link="https://be-come.org" />
          </div>
        </div>
      </div >
    </div >
  );
}
