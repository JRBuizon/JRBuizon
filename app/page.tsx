'use client'

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { default as NextImage } from "next/image";
import Link from "next/link";
import mdg from '@/public/images/mdg.gif'
import mwm from '@/public/images/mwm.png'
import bcom from '@/public/images/become.png'
import kinhub from '@/public/images/kinhub.png'
import flower from '@/public/images/flower.gif'
import { Rethink_Sans } from "next/font/google";
import takboCover from '@/public/images/takbo-cover.png'
import InstagramIcon from "@/components/icons/instagram";
import GithubIcon from "@/components/icons/github";
import LinkedInIcon from "@/components/icons/linkedin";

const TOP_OFFSET = 50
const LEFT_OFFSET = 50

const socButtonClasses = "border-none outline-none bg-transparent transition-all duration-250 ease-out w-[24px] h-[24px] overflow-hidden"

export default function Landing() {

  return (
    <div className="relative bg-black overflow-x-clip flex flex-col w-full items-center justify-center h-[100vh] overflow-hidden px-6 py-4">

      <span className="select-none text-white font-bold text-[1.5rem] tracking-[0.2rem] leading-none">Jeremiah Ryan Buizon</span>
      <span className="select-none relative justify-center text-nowrap uppercase font-bold flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-[2rem] text-transparent text-center select-auto">
        <span className="select-none font-bold absolute text-nowrap uppercase top-0 flex bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-[2.2rem] box-content text-transparent text-center select-none">Front-end Developer</span>
        Front-end Developer
      </span>
      <span className="select-none text-white font-bold text-[0.7rem] tracking-[0.2rem] leading-none my-2">MANILA, PHILIPPINES</span>
      <div className="py-0 my-0 px-0 mx-0 pt-2 flex flex-col items-center gap-y-3">
        <div className="flex flex-row gap-x-2 items-center">
          <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeremiah-ryan-buizon-8ba4342b2/" className={socButtonClasses}>
            <div className="text-white hover:text-blue-500 transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[0%] hover:translate-x-[-50%]">
              <LinkedInIcon />
              <LinkedInIcon />
            </div>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://github.com/JRBuizon" className={socButtonClasses}>
            <div className="fill-white hover:fill-teal-500 transition-all duration-500 ease-out flex flex-col gap-y-[8px] h-[64px] translate-y-[-50%] hover:translate-y-[0%]">
              <GithubIcon />
              <GithubIcon />
            </div>
          </Link>
          <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbuizon/" className={socButtonClasses}>
            <div className="text-white hover:text-pink-500 transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[-50%] hover:translate-x-[0%]">
              <InstagramIcon />
              <InstagramIcon />
            </div>
          </Link>
        </div>
      </div>


    </div >
  );
}
