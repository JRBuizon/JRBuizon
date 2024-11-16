'use client'

import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import kinhub from '@/public/images/kinhub.png'
import { IBM_Plex_Mono } from "next/font/google";
import takboCover from '@/public/images/takbo-cover.png'
import InstagramIcon from "@/components/icons/instagram";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import Image from "next/image"
import NextIcon from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind";
import Draggable from "react-draggable";
import golaunch from "@/public/images/GoLaunchLogo.png"
import sleeping2 from "@/public/images/sleeping2.jpg"
import IsometricGrid from "@/components/icons/grid";
import ThinkpadSVG from "@/components/icons/thinkpad";
import KeyboardSVG from "@/components/icons/keyboard";
import TrackPadSVG from "@/components/icons/trackpad";
import BatterySVG from "@/components/icons/battery";
import HeatsinkSVG from "@/components/icons/heatsink";
import SSDSVG from "@/components/icons/ssd";
import RAMSVG from "@/components/icons/ram";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

const socButtonClasses = "border-none outline-none bg-transparent transition-all duration-250 ease-out w-[24px] h-[24px] overflow-hidden"

function DraggableObject({ children, className, setGrabbing, grabbing }: { children?: ReactNode, className?: string, setGrabbing: Dispatch<SetStateAction<boolean>>, grabbing?: boolean }) {
  return (
    <Draggable onStart={() => setGrabbing(true)} onStop={() => setGrabbing(false)} >
      <div className={clsx("z-[1] transition-all duration-150 ease-out", className, !grabbing && "cursor-grab")}>
        {children}
      </div>
    </Draggable>
  )
}

export default function Landing() {
  const [contributions, setContributions] = useState<{ totalContributions: number, weeks: { contributionDays: { contributionCount: number, date: string }[] }[] }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingAnimation, setLoadingAnimation] = useState<boolean>(false)
  useEffect(() => {
    async function getGithubContributions() {
      await fetch("https://nodejs-serverless-function-express-roan-nu.vercel.app/api/github")
        .then((res) => res.json())
        .then((d) => {
          setContributions(d.data?.data?.user?.contributionsCollection?.contributionCalendar);
          setLoading(false);
        });
    }
    getGithubContributions()
  }, [])

  const [grabbing, setGrabbing] = useState<boolean>(false)
  return (
    <div className={clsx("overflow-hidden text-white relative bg-[#111] grid-cols-1 lg:grid-cols-10 grid gap-x-2 w-full h-[100vh] px-0 py-4", grabbing && "cursor-grabbing")}>
      {/* <div className={clsx("transition-all duration-[2s] ease-in-out absolute flex flex-col justify-center items-center w-full h-[100%] z-[99999999] bg-[#fff]", !loading && loadingAnimation && "translate-x-[100%]")}>
      </div> */}
      <div className="col-span-3 hidden lg:flex flex-col pl-8 h-[100%]">
        <div className="hover:opacity-[100%] grayscale hover:grayscale-0 flex flex-col gap-y-4 opacity-[20%] transition-all duration-300 ease-out rounded-md w-full">
          <span className="font-bold text-sm -mb-2 leading-none">INFO</span>
          <div className="flex flex-row gap-x-2 w-full h-[10rem]">
            <div className="relative w-[40%] h-[100%] rounded-md overflow-hidden">
              <Image alt="sleeping2" src={sleeping2} objectFit="cover" layout="fill" objectPosition="top" />
            </div>
            <div className="flex flex-col gap-y-1 w-[50%] h-[100%]">
              <span className={clsx("leading-none font-bold tracking-wide")}>
                ABOUT ME
              </span>
              <hr className="w-full border border-solid border-white border-b-0" />
              <span className={clsx(mono.className, "text-xs tracking-wider text-balance")}>Hi. I&apos;m Ryan, a (mostly) Front-End Developer and struggling BS Computer Science student at the University of the Philippines Diliman.</span>
            </div>
          </div>
        </div>
        <div className="thinkpad-container hover-container opacity-[50%] hover:opacity-[100%] transition-ease-out relative flex flex-col w-full h-[100%] thinkpad-container justify-center items-center">
          <div className="absolute top-4 left-0">
            <span className={clsx("leading-none font-bold tracking-wide")}>
              CURRENT SPECS
            </span>
            <hr className="w-full border border-solid border-white border-b-0" />
          </div>
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full items-center flex justify-center opacity-[50%] transition-ease-out hover-opacity">
            <IsometricGrid />
          </div>
          <div className="hover-thinkpad-part delay-[140ms] battery translate-x-[-20%] translate-y-[-100%]">
            <BatterySVG className="fill-white hover:fill-rd hover:scale-[125%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[124px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-x-[30%] translate-y-[-150%]">
                <span className="font-bold">
                  BATTERY
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span>
                  48 Wh external // 24 Wh internal
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part delay-[70ms] ssd translate-x-[-250%] translate-y-[-0%]">
            <SSDSVG className="fill-white hover:fill-pnk hover:scale-[150%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-x-[-130%] translate-y-[-70%]">
                <span className="font-bold text-nowrap">
                  SSD <span className="text-[8px]">(STORAGE)</span>
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span className="text-nowrap">
                  512GB SSD
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part delay-[210ms] heatsink translate-x-[-15%] translate-y-[-35%]">
            <HeatsinkSVG className="fill-white hover:fill-pnk hover:scale-[125%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[148px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-y-[30%]">
                <span className="font-bold">
                  HEATSINK
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span>
                  Large heatsink // Grizzly thermal paste
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part delay-[280ms] ram translate-x-[-80%] translate-y-[-30%]">
            <RAMSVG className="fill-white hover:fill-rd hover:scale-[150%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[96px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-y-[20%] translate-x-[-20%]">
                <span className="font-bold">
                  RAM
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span>
                  8GB (1 stick) SODIMM DDR4
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%]">
            <ThinkpadSVG className="fill-white hover:fill-blu transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[96px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-y-[-420%] ">
                <span className="font-bold text-nowrap" >
                  THINKPAD T480
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span className="text-nowrap">
                  CPU: i7-8550U
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part trackpad translate-x-[-110%] translate-y-[-35%]">
            <TrackPadSVG className="fill-white hover:fill-rd hover:scale-[150%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[96px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-y-[20%] translate-x-[-80%]">
                <span className="font-bold">
                  TRACKPAD
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span className="text-nowrap">
                  Regular trackpad
                </span>
              </div>
            </div>
          </div>
          <div className="hover-thinkpad-part delay-[140ms] keyboard translate-x-[-45%] translate-y-[-55%]">
            <KeyboardSVG className="fill-white hover:fill-rd hover:scale-[120%] transition-ease-out" />
            <div className="relative pointer-events-none">
              <div className="transition-ease-out w-[96px] opacity-[0%] hover-thinkpad-part-opacity absolute text-xs translate-y-[-250%] translate-x-[-70%]">
                <span className="font-bold">
                  KEYBOARD
                </span>
                <hr className="mb-1 border border-solid border-b-0 w-full" />
                <span className="text-nowrap">
                  Regular keyboard
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col items-center justify-center lg:justify-between gap-y-6 px-2">
        <Link target="_blank" rel="noreferrer" href="https://github.com/JRBuizon" className="hidden lg:flex h-[100%] ">
          <div className="hidden lg:flex w-full h-[100%] gap-y-4 flex-col justify-start items-center hover:opacity-[100%] opacity-[20%] grayscale hover:grayscale-0 transition-all duration-300 ease-out">
            <span className="font-bold text-sm -mb-3 leading-none h-0">CONTRIBUTIONS</span>
            <div className="flex flex-row items-center justify-between w-full gap-x-1">
              <span className="text-xs w-fit">{months[new Date().getMonth()]} ({new Date().getFullYear() - 1})</span>
              <span className="text-xs w-fit">{months[new Date().getMonth()]} ({new Date().getFullYear()})</span>
            </div>
            <div className="grid grid-flow-col grid-rows-7 gap-[0.25vw] rounded-md w-fit">
              {
                contributions?.weeks.map(({ contributionDays }) => {
                  return (contributionDays.map(({ contributionCount, date }) => {
                    return (
                      <div key={date} className={clsx("h-[0.47vw] w-[0.47vw] col-span-1 row-span-1 rounded-sm", contributionCount == 0 ? "bg-transparent" : contributionCount > 0 && contributionCount < 6 ? "opacity-[30%] bg-blu" : contributionCount > 6 && contributionCount < 12 ? "opacity-[60%] bg-blu" : contributionCount > 12 && contributionCount < 24 ? "opacity-[80%] bg-blu" : "opacity-[100%] brightness-[150%] bg-blu")} />
                    )
                  }))
                })}
            </div>

            <div className="flex flex-row items-center justify-center w-full gap-x-1">
              <span className="text-xs w-fit">less</span>
              <div className="h-[7px] w-[7px] rounded-sm bg-[#222]" />
              <div className="h-[7px] w-[7px] rounded-sm opacity-[30%] bg-blu" />
              <div className="h-[7px] w-[7px] rounded-sm opacity-[60%] bg-blu" />
              <div className="h-[7px] w-[7px] rounded-sm opacity-[80%] bg-blu" />
              <div className="h-[7px] w-[7px] rounded-sm opacity-[100%] brightness-[150%] bg-blu" />
              <span className="text-xs w-fit">more</span>
            </div>
          </div>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <span className="pointer-events-none select-none mb-1 font-bold text-[1.2rem] md:text-[1.5rem] tracking-[0.2rem] leading-none">Jeremiah Ryan Buizon</span>
          <span className="pointer-events-none select-none relative justify-center text-nowrap uppercase font-bold flex bg-gradient-to-r items-center from-10% to-90% from-blu via-pnk to-rd bg-clip-text text-[1.5rem] md:text-[2rem] text-transparent text-center select-auto">
            <span className="pointer-events-none select-none font-bold absolute text-nowrap uppercase top-0 flex bg-gradient-to-r blur-md tracking-[0.15rem] from-10% to-90% from-blu via-pnk to-rd bg-clip-text text-[1.6rem] md:text-[2.1rem] box-content text-transparent text-center select-none">Front-end Developer</span>
            Front-end Developer
          </span>
          <div className="pointer-events-none select-none flex flex-row items-center gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
            <span className="select-none font-bold text-[0.7rem] tracking-[0.2rem] leading-none my-2">MANILA, PHILIPPINES</span>
          </div>
          <div className="py-0 my-0 px-0 mx-0 pt-2 flex flex-col items-center gap-y-3">
            <div className="flex flex-row items-center mt-2 gap-x-4 absolute select-none">
              <DraggableObject setGrabbing={setGrabbing} grabbing={grabbing} >
                <NextIcon className="hover:scale-[105%] transition-all duration-200 ease-out h-[20px] md:h-[24px] p-1" />
              </DraggableObject>
              <DraggableObject setGrabbing={setGrabbing} grabbing={grabbing}>
                <ReactIcon className="hover:scale-[105%] transition-all duration-200 ease-out h-[28px] md:h-[32px] p-1" />
              </DraggableObject>
              <DraggableObject setGrabbing={setGrabbing} grabbing={grabbing}>
                <TailwindIcon className="hover:scale-[105%] transition-all duration-200 ease-out fill-white h-[20px] md:h-[24px] p-1" />
              </DraggableObject>
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div className="absolute bottom-[5%] left-[50%] translate-x-[-50%]">
              <div className="flex flex-row gap-x-3 items-center">
                <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeremiah-ryan-buizon-8ba4342b2/" className={socButtonClasses}>
                  <div className="text-white hover:text-blu transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[0%] hover:translate-x-[-50%]">
                    <LinkedInIcon />
                    <LinkedInIcon />
                  </div>
                </Link>
                <Link target="_blank" rel="noreferrer" href="https://github.com/JRBuizon" className={socButtonClasses}>
                  <div className="fill-white hover:fill-pnk transition-all duration-500 ease-out flex flex-col gap-y-[8px] h-[64px] translate-y-[-50%] hover:translate-y-[0%]">
                    <GithubIcon />
                    <GithubIcon />
                  </div>
                </Link>
                <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbuizon/" className={socButtonClasses}>
                  <div className="text-white hover:text-rd transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[-50%] hover:translate-x-[0%]">
                    <InstagramIcon />
                    <InstagramIcon />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex h-[100%] w-full" />

      </div>

      <div className="col-span-3 hidden lg:flex flex-col gap-y-8 items-start h-[100%] justify-start">
        <div className="flex flex-col gap-y-4 items-start justify-start hover-container">
          <span className="transition-ease-out tracking-wide uppercase leading-none text-sm -mb-2 font-bold opacity-[20%] hover-opacity">work</span>
          <Link href="https://kinhub.com" target="_blank" className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
            <div className="w-[40%] bg-white flex flex-col items-center justify-center rounded-md">
              <Image alt="work1" src={kinhub} />
            </div>
            <div className="flex flex-col gap-y-1 w-[50%] h-[100%]">
              <span className={clsx("leading-none font-bold tracking-wide")}>
                KINHUB <span className="text-xs leading-none">(2023 - present)</span>
              </span>
              <span className={clsx("leading-tight tracking-wide")}>
                Junior Full-Stack Developer & Lead Front-End Developer
              </span>
              <hr className="w-full border border-solid border-white border-b-0" />
              <span className={clsx(mono.className, "tracking-wider text-balance text-xs")}>
                Mental health and well-being B2B PaaS based in the UK.
              </span>
            </div>
          </Link>

          <Link href="/" target="_blank" className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
            <div className="relative overflow-hidden w-[40%] bg-black flex flex-col items-center justify-center rounded-md">
              <Image alt="work2" src={golaunch} objectFit="cover" width={88} height={88} />
            </div>
            <div className="flex flex-col gap-y-1 w-[50%] h-[100%]">
              <span className={clsx("leading-none font-bold tracking-wide")}>
                GOLAUNCH <span className="text-xs leading-none">(2024 - present)</span>
              </span>
              <span className={clsx("leading-none tracking-wide")}>
                Co-Founder
              </span>
              <hr className="w-full border border-solid border-white border-b-0" />
              <span className={clsx(mono.className, "tracking-wider text-balance text-xs")}>
                Design & Engineering studio for launching early-stage brands and digital products. We&apos;ve collaborated with companies in Spain, Singapore, and the Philippines.
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-col gap-y-4 items-start justify-start transition-all duration-300 ease-out hover-container">
          <span className="transition-ease-out tracking-wide uppercase leading-none text-sm -mb-2 font-bold opacity-[20%] hover-opacity">side projects</span>
          <Link href="https://stells.design/takbo" target="_blank" className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
            <div className="relative overflow-hidden w-[40%] bg-black flex flex-col items-center justify-center rounded-md">
              <Image alt="work2" src={takboCover} objectFit="cover" layout="fill" />
            </div>
            <div className="flex flex-col gap-y-1 w-[50%] h-[100%]">
              <span className={clsx("uppercase font-bold leading-none tracking-wide")}>
                TAKBO <span className="text-xs leading-none">(2022)</span>
              </span>
              <span className={clsx("leading-none tracking-wide")}>
                Lead Game Developer
              </span>
              <hr className="w-full border border-solid border-white border-b-0" />
              <span className={clsx(mono.className, "tracking-wider text-balance text-xs")}>
                A side-scroller web game designed and developed in a week using the Godot engine. Collaboration with Stella Pangilinan and Ramon Catane.
              </span>
            </div>
          </Link>
        </div>

      </div>

    </div >
  );
}
