'use client'

import TypeWriterAnimation from "@/components/typewriterAnimation";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
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
import RedText from "@/components/redText";
import { Cutive_Mono } from "next/font/google"
import eco from '@/public/images/eco.gif'
import incu from '@/public/images/incu.gif'
import takbo from '@/public/images/takbo.gif'

const rethink = Rethink_Sans({ subsets: ['latin'] })
const cutive = Cutive_Mono({ weight: "400", subsets: ['latin'] })

export default function Landing() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [coolText, setCoolText] = useState("awesome");
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const [hoverText, setHoverText] = useState("scratch fortune");

  const mouseTextRef = useRef<HTMLSpanElement>(null)

  function shuffleCoolText() {
    const words = ["wow so cool", "✨ awesome ✨", "how'd he do that?", "lit 🔥", "fire 🔥", "✨ amazing ✨", "siiick"];
    const wordIndex = Math.floor(Math.random() * words.length)
    return words[wordIndex]
  }

  function handleMouseMove(e: MouseEvent) {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
    if (mouseTextRef.current) {
      mouseTextRef.current.style.top = ((e.clientY - mouseTextRef.current.offsetHeight) + window.scrollY) + "px";
      mouseTextRef.current.style.left = (e.clientX - (mouseTextRef.current.offsetWidth / 2)) + "px";
    }
  }

  useEffect(() => {
    function handleScroll() {
      setTextExpanded(false)
    }
    document.onmousemove = handleMouseMove;
    document.onscroll = handleScroll;
  }, [mouseX, mouseY])

  function randomFortune() {
    const fortunes = ['🔖大吉', '🔖吉', '🔖大吉', '🔖半吉', '🔖末吉', '🔖末小吉', '🔖凶'];
    const fortuneIndex = Math.floor(Math.random() * fortunes.length)
    setHoverText(fortunes[fortuneIndex])
  }


  return (
    <div className="relative overflow-x-clip flex flex-col w-full items-center">
      <span ref={mouseTextRef} id="hover-text" style={{ 'pointerEvents': 'none' }} className={clsx("z-[9] origin-center text-black absolute text-xs", !textExpanded && "opacity-0", textExpanded && "text-white")}>{coolText}</span>

      <div className="flex flex-row w-full">
        <div className="z-[0] noselect bg-black w-[50%] flex flex-col items-start px-[5%] justify-center h-[100vh] tracking-widest text-white text-[48px]">
          <span onMouseOver={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} ><span className="">hi.</span> i&apos;m ryan.</span>
          <span onMouseOver={() => { setTextExpanded(true); }} onMouseLeave={() => { setTextExpanded(false); setCoolText(shuffleCoolText()); }} className=" flex flex-row items-center gap-x-4">i develop<TypeWriterAnimation /></span>

          <div className="text-[0px] flex flex-row gap-x-8 pt-4">
            <span className="z-[1] bg-yared p-2" />
            <span className="z-[1] bg-yablue p-2" />
            <span className="z-[1] bg-yayellow p-2" />
            <span className="z-[1] bg-yagreen p-2" />
          </div>
        </div>
        <div className={clsx("pointer-events-none noselect relative w-[50%] h-[100vh] text-lg grid grid-cols-3 grid-rows-3", cutive.className)}>

          <div className="w-full relative">
            <Image src={takbo} unoptimized fill objectFit="cover" alt='takbo' />
          </div>
          <div className="w-full relative">
            <Image src={eco} unoptimized fill objectFit="cover" alt='eco' />
          </div>
          <div className="w-full relative flex items-center justify-center">these</div>

          <div className="w-full relative">
            <Image src={flower} unoptimized fill objectFit="cover" alt='flower' />
          </div>
          <div className="w-full relative">
            <Image src={incu} unoptimized fill objectFit="cover" alt='incu' />
          </div>
          <div className="w-full relative flex items-center justify-center">are</div>
          <div className="w-full relative flex items-center justify-center">still</div>
          <div className="w-full relative flex items-center justify-center">empty</div>
          <div className="w-full relative scale-x-[-100%]">
            <Image src={headerImage} unoptimized width={256} objectFit="cover" alt='eco' />
          </div>
        </div>
      </div>

      {/* WORKS SECTION */}
      <HorizontalScroll>work experience stuff  /// work experience stuff /// work experience stuff</HorizontalScroll>
      <div className="z-[4] gap-y-12 bg-black flex flex-col items-start w-full px-[5%] pt-[3%] pb-[5%]">

        <div className="flex flex-col items-start w-full">
          {/* KINHUB SECTION */}
          <span className="text-yawhite pb-4">working at <Link target="_blank" className="cursor-yapointer text-yablue outline-none" href="https://kinhub.com">kinhub</Link> <span className="text-xs">(2023<span className="text-sm"> - present</span>)</span></span>

          <div className="flex flex-row w-full gap-x-[32px]">
            <div className={clsx("text-yawhite flex w-[32%] flex-col text-sm", rethink.className)}>
              <LinkCard className="bg-white" gif source={kinhub} link="https://kinhub.com" />

              <BlueText className="text-lg font-bold pt-2 pb-1"># junior full-stack developer</BlueText>
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
                  <BlueText className="text-lg font-bold leading-none pb-1"># a notable output</BlueText>
                  <br />
                  this <RedText>flower input field</RedText> is by far the most fun i&apos;ve had designing a frontend component for kinhub. being an input field, it was the perfect blend of <GreenText>frontend</GreenText> and <GreenText>backend</GreenText>. it was designed after <Link className="outline-none text-yablue cursor-yapointer underline underline-offset-2" href="https://www.6seconds.org/2022/03/13/plutchik-wheel-emotions/" target="_blank">Robert Plutchik&apos;s wheel of emotions</Link> and is compatible with <CodeText>react hook form</CodeText>.
                  <br />
                  <br />
                  <BlueText className="text-lg font-bold"># positioning the elements</BlueText>
                  <br />
                  i positioned <CodeText>&lt;input&gt;</CodeText> tags in a circle using <RedText>polar coordinates</RedText>. a petal svg was positioned over each <CodeText>&lt;input&gt;</CodeText> with the origin point at one end of the petal / <CodeText>&lt;input&gt;</CodeText>.
                  <br />
                  <br />
                  <BlueText className="text-lg font-bold"># changing the petal lengths</BlueText>
                  <br />
                  to calculate for the petal lengths, i used <CodeText>react hook form</CodeText>&apos;s <CodeText>watch</CodeText> function to track the respective <CodeText>&lt;input&gt;</CodeText> elements&apos; values then mutliplied by some factor when scaling the petals. this resulted in a <RedText>linear</RedText> scale so i used a <BlueText>bezier curve</BlueText> to have the petals scale properly. finally, i used tailwind&apos;s <CodeText>transition</CodeText> class to animate the petals for that extra ✨
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
          <span className="text-yawhite pb-4">projects at <GreenText><Link target="_blank" className="outline-none cursor-yapointer" href="https://golaunch.live">golaunch.live</Link></GreenText></span>
          <div className="flex flex-row gap-x-[32px] w-full">
            <LinkCard source={mwm} link="https://mindwhatmatters.com.sg" />
            <LinkCard source={mdg} link="https://museodelgaleon.org" gif />
            <LinkCard source={bcom} link="https://be-come.org" />
          </div>
        </div>
      </div >

      {/* CONTACT SECTION */}
      <HorizontalScroll backwards>fun case studies /// fun case studies /// fun case studies</HorizontalScroll>

      {/* LABS SECTION */}
      <HorizontalScroll>css sandbox /// css sandbox /// css sandbox /// css sandbox /// css sandbox /// css sandbox</HorizontalScroll>

    </div >
  );
}
