'use client'

import clsx from "clsx";
import { Dispatch, ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { default as NextImage } from "next/image";
import Link from "next/link";
import mdg from '@/public/images/mdg.gif'
import mwm from '@/public/images/mwm.png'
import bcom from '@/public/images/become.png'
import kinhub from '@/public/images/kinhub.png'
import flower from '@/public/images/flower.gif'
import { Rethink_Sans } from "next/font/google";
import takboCover from '@/public/images/takbo-cover.png'
import nextsvg from '@/public/next.svg'
import InstagramIcon from "@/components/icons/instagram";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";
import Image from "next/image"
import NextIcon from "@/components/icons/nextjs";
import ReactIcon from "@/components/icons/react";
import TailwindIcon from "@/components/icons/tailwind";
import Draggable from "react-draggable";

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
    <div className={clsx("overflow-hidden text-white relative bg-black flex flex-col w-full items-center justify-center h-[100vh] px-6 py-4", grabbing && "cursor-grabbing")}>
      <div className="pointer-events-none select-none flex flex-col items-center">
        <span className="pointer-events-none select-none mb-1 font-bold text-[1.2rem] md:text-[1.5rem] tracking-[0.2rem] leading-none">Jeremiah Ryan Buizon</span>
        <span className="pointer-events-none select-none relative justify-center text-nowrap uppercase font-bold flex bg-gradient-to-r items-center from-10% to-90% from-[#6895D2] via-[#FDE767] to-[#D04848] bg-clip-text text-[1.5rem] md:text-[2rem] text-transparent text-center select-auto">
          <span className="pointer-events-none select-none font-bold absolute text-nowrap uppercase top-0 flex bg-gradient-to-r blur-md tracking-[0.15rem] from-10% to-90% from-[#6895D2] via-[#FDE767] to-[#D04848] bg-clip-text text-[1.6rem] md:text-[2.1rem] box-content text-transparent text-center select-none">Front-end Developer</span>
          Front-end Developer
        </span>
        <div className="pointer-events-none select-none flex flex-row items-center gap-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
          <span className="select-none font-bold text-[0.7rem] tracking-[0.2rem] leading-none my-2">MANILA, PHILIPPINES</span>
        </div>
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
    </div >
  );
}
