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
import { Alata } from "next/font/google";
const alata = Alata({ weight: "400", subsets: ["latin"] });

const TOP_OFFSET = 50
const LEFT_OFFSET = 50

const socButtonClasses = "border-none outline-none bg-transparent transition-all duration-250 ease-out w-[24px] h-[24px] overflow-hidden"

export default function Landing() {
  const circleMouseRef = useRef<HTMLSpanElement>(null)
  const dashedMouseRef = useRef<HTMLSpanElement>(null)
  const outlineMouseRef = useRef<HTMLSpanElement>(null)

  function handleMouseMove(e: MouseEvent) {
    if (circleMouseRef.current) {
      circleMouseRef.current.style.top = ((e.clientY - (circleMouseRef.current.offsetHeight / 2)) + window.scrollY) + "px";
      circleMouseRef.current.style.left = (e.clientX - (circleMouseRef.current.getBoundingClientRect().width / 2)) + "px";
    }

    setTimeout(function () {
      if (outlineMouseRef.current) {
        outlineMouseRef.current.style.top = ((e.clientY - (outlineMouseRef.current.offsetHeight / 2)) + window.scrollY) + "px";
        outlineMouseRef.current.style.left = (e.clientX - (outlineMouseRef.current.getBoundingClientRect().width / 2)) + "px";
      }

    }, 50);

    setTimeout(function () {
      if (dashedMouseRef.current) {
        dashedMouseRef.current.style.top = ((e.clientY - (dashedMouseRef.current.offsetHeight / 2)) + window.scrollY) + "px";
        dashedMouseRef.current.style.left = (e.clientX - (dashedMouseRef.current.getBoundingClientRect().width / 2.5)) + "px";
      }

    }, 100);
  }

  useEffect(() => {
    window.onmousemove = handleMouseMove;
  })

  return (
    <div className="text-yawhite relative bg-black overflow-x-clip flex flex-col w-full items-start h-[100%] overflow-hidden p-6">
      <span ref={circleMouseRef} className={clsx("z-[9] absolute border border-yawhite rounded-full noselect pointer-events-none h-[8px] w-[8px]",)} />
      <span ref={outlineMouseRef} className={clsx("z-[8] absolute border border-yawhite rounded-full noselect pointer-events-none h-[24px] w-[24px]",)} />
      <span ref={dashedMouseRef} className={clsx("z-[7] absolute border border-yawhite border-dashed rotate-animate rounded-full noselect pointer-events-none h-[32px] w-[32px]",)} />

      <span className="font-bold text-[5rem] leading-none">Jeremiah Ryan</span>
      <div className="py-0 my-0 px-0 mx-0 flex flex-row items-end gap-x-2">
        <span className="font-bold text-[5rem] leading-none -mb-2">Buizon</span>
        <Link target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeremiah-ryan-buizon-8ba4342b2/" className={socButtonClasses}>
          <div className="transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[0%] hover:translate-x-[-50%]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="24" height="24" focusable="false">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </div>
        </Link>
        <Link target="_blank" rel="noreferrer" href="https://github.com/JRBuizon" className={socButtonClasses}>
          <div className="transition-all duration-500 ease-out flex flex-col gap-y-[8px] h-[64px] translate-y-[-50%] hover:translate-y-[0%]">
            <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="fill-yawhite">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
            </svg>
            <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="fill-yawhite">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z" />
            </svg>
          </div>
        </Link>
        <Link target="_blank" rel="noreferrer" href="https://www.instagram.com/jeremiahbuizon/" className={socButtonClasses}>
          <div className="transition-all duration-500 ease-out flex flex-row gap-x-[8px] w-[64px] translate-x-[-50%] hover:translate-x-[0%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
        </Link>
      </div>


      <div className="relative overflow-hidden flex flex-col w-[100vw] pt-[2%] noselect items-start px-[3%] justify-start h-[100vh]">
      </div>
    </div >
  );
}
