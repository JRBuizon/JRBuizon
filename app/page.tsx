'use client'

import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
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
  const [grabbing, setGrabbing] = useState<boolean>(false)
  return (
    <div className={clsx("overflow-hidden text-white relative bg-[#111] grid-cols-1 lg:grid-cols-3 grid gap-x-4 w-full h-[100vh] px-0 py-4", grabbing && "cursor-grabbing")}>
      <div className="hidden lg:flex flex-col pr-4 pl-8 h-[100%]">
        <div className="hover:opacity-[100%] grayscale hover:grayscale-0 flex flex-col gap-y-4 opacity-[20%] transition-all duration-300 ease-out rounded-md h-[100%] w-full">
          <span className="font-bold text-sm -mb-2 leading-none">ME</span>
          <div className="flex flex-row gap-x-2 w-full h-[10rem]">
            <div className="relative w-[40%] h-[100%] rounded-md overflow-hidden">
              <Image alt="sleeping2" src={sleeping2} objectFit="cover" layout="fill" objectPosition="top" />
            </div>
            <span className={clsx(mono.className, "w-[50%] text-xs tracking-wider text-balance")}>Hi. I&apos;m Ryan, a (mostly) Front-End Developer and struggling BS Computer Science student at the University of the Philippines Diliman.</span>

          </div>
        </div>

      </div>

      <div className="flex flex-col items-center justify-center lg:justify-between gap-y-6">
        <div className="hidden lg:flex w-full h-[100%] gap-y-4 flex-col justify-start items-start hover:opacity-[100%] opacity-[20%] grayscale hover:grayscale-0 transition-all duration-300 ease-out">
          <span className="font-bold text-sm -mb-2 leading-none">CONTRIBUTIONS</span>
          <div className="grid grid-flow-col grid-rows-7 gap-1 rounded-md w-fit">
            {[{ contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            { contributionCount: 10, date: "2023-11-12" },
            ].map(({ contributionCount, date }) => (
              <div key={date} className={clsx("h-[8px] w-[8px] col-span-1 row-span-1 rounded-sm", contributionCount == 0 ? "bg-[#222] opacity-[100%]" : `opacity-[${10 * contributionCount}%] bg-[#6895D2]`)} />

            ))}

          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="pointer-events-none select-none mb-1 font-bold text-[1.2rem] md:text-[1.5rem] tracking-[0.2rem] leading-none">Jeremiah Ryan Buizon</span>
          <span className="pointer-events-none select-none relative justify-center text-nowrap uppercase font-bold flex bg-gradient-to-r items-center from-10% to-90% from-[#6895D2] via-[#FDE767] to-[#D04848] bg-clip-text text-[1.5rem] md:text-[2rem] text-transparent text-center select-auto">
            <span className="pointer-events-none select-none font-bold absolute text-nowrap uppercase top-0 flex bg-gradient-to-r blur-md tracking-[0.15rem] from-10% to-90% from-[#6895D2] via-[#FDE767] to-[#D04848] bg-clip-text text-[1.6rem] md:text-[2.1rem] box-content text-transparent text-center select-none">Front-end Developer</span>
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
                  <div className="text-white hover:text-[#6895D2] transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[0%] hover:translate-x-[-50%]">
                    <LinkedInIcon />
                    <LinkedInIcon />
                  </div>
                </Link>
                <Link target="_blank" rel="noreferrer" href="https://github.com/JRBuizon" className={socButtonClasses}>
                  <div className="fill-white hover:fill-[#FDE767] transition-all duration-500 ease-out flex flex-col gap-y-[8px] h-[64px] translate-y-[-50%] hover:translate-y-[0%]">
                    <GithubIcon />
                    <GithubIcon />
                  </div>
                </Link>
                <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbuizon/" className={socButtonClasses}>
                  <div className="text-white hover:text-[#D04848] transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[-50%] hover:translate-x-[0%]">
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

      <div className="hidden lg:flex pl-4 flex-col gap-y-8 items-start h-[100%] justify-start">
        <div className="flex flex-col gap-y-4 items-start justify-start hover-container">
          <span className="transition-ease-out tracking-wide uppercase leading-none text-sm -mb-2 font-bold opacity-[20%] hover-opacity">work</span>
          <div className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
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
          </div>

          <div className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
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
          </div>
        </div>

        <div className="flex flex-col gap-y-4 items-start justify-start transition-all duration-300 ease-out hover-container">
          <span className="transition-ease-out tracking-wide uppercase leading-none text-sm -mb-2 font-bold opacity-[20%] hover-opacity">side projects</span>
          <div className="transition-ease-out cursor-pointer relative h-[10rem] flex flex-row gap-x-2 grayscale hover:grayscale-0 opacity-[20%] hover:opacity-[100%]">
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
          </div>
        </div>

      </div>

    </div >
  );
}
