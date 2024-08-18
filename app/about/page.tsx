'use client'

import { Rethink_Sans } from "next/font/google"
import clsx from "clsx"
import RedText from "@/components/redText"
import Link from "next/link"
import YellowText from "@/components/yellowText"
import GreenText from "@/components/greenText"
import BlueText from "@/components/blueText"
import Image from "next/image"
import rctsvg from '@/public/react.svg'
import nextsvg from '@/public/next.svg'
import Draggable from "react-draggable"
import { ReactNode, useEffect, useState } from "react"
import ExperienceGained from "@/components/experienceGained"
import headerImg from '@/public/images/about-image.jpg'

const rethink = Rethink_Sans({ subsets: ['latin'] })


export default function AboutPage() {
    function DraggableObject({ children, className }: { children?: ReactNode, className?: string }) {
        return (
            <Draggable bounds="#drag-bounds">
                <div className={clsx("z-[1] randomize-position transition-all duration-200 ease-out noselect absolute p-2 rounded-full h-[64px] w-[64px] flex items-center justify-center opacity-0", className)}>
                    {children}
                </div>
            </Draggable>
        )
    }

    function releaseTheSkillset() {
        const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.randomize-position');
        const btn = document.getElementById('start-point')
        const disappear = document.getElementById('disappear-on-click')
        const divsArray = Array.from(divs);
        if (!(disappear && btn)) return;
        divsArray.forEach((div) => {
            const randomY = (Math.random() * 70) + 10
            const randomX = (Math.random() * 70) + 10
            div.style.top = `${randomY}%`
            div.style.left = `${randomX}%`
            div.style.opacity = '100%'
        })
        disappear.style.opacity = '0%'
        btn.onclick = () => { };
        btn.style.pointerEvents = 'none'
        btn.style.zIndex = '0'
    }

    useEffect(() => {
        const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('.randomize-position');
        const btn = document.getElementById('start-point')
        const divsArray = Array.from(divs);
        if (!btn) return;
        divsArray.forEach((div) => {
            const rect = btn.getBoundingClientRect()
            div.style.top = `${rect.x}px`
            div.style.left = `${rect.y}px`
        })
        btn.onclick = () => releaseTheSkillset();
        btn.style.pointerEvents = 'auto'
        btn.style.zIndex = '9'
    })

    return (
        <div className="min-h-[100vh] text-yawhite relative bg-black overflow-x-clip flex flex-col w-full items-center">
            <div id='drag-bounds' className="min-h-[100vh] relative flex flex-row w-full pl-[10%] gap-x-[48px]">
                <div className=" flex flex-col w-[65%] pt-[8%] pr-[32px]">
                    <Link href="/" className="absolute top-[7%] left-[10%] cursor-yapointer">&lt;- back</Link>

                    <span className="font-josefin tracking-widest text-[56px]">about me</span>
                    <span className={clsx(rethink.className, "text-base")}>
                        hi! i&apos;m ryan, a <RedText>filipino</RedText> developer currently taking <YellowText>BS Computer Science</YellowText> at the <RedText><Link href="https://upd.edu.ph/" className="cursor-yapointer">University of the Philippines Diliman</Link></RedText>.
                        i have <GreenText>2+ years of experience</GreenText> building apps, websites, and games. i&apos;ve worked with startups and businesses based in the <BlueText>UK</BlueText>, <BlueText>spain</BlueText>, <BlueText>singapore</BlueText>, and (of course) <BlueText>✨metro manila✨</BlueText>.
                        <br />
                        <br />
                        my interests vary from <GreenText>game dev</GreenText> to <BlueText>data analysis</BlueText>, but i have a special place in my heart for anything <YellowText>visual</YellowText> (ui, frontend, data viz).
                        <br />
                    </span>

                    <span className="pointer-events-none pt-12 font-josefin tracking-widest text-[56px] leading-none">{"skillset"} <button id='start-point' type="button" className="relative font-normal cursor-yapointer text-[56px] outline-none border-none bg-transparent"><span id='disappear-on-click' className="absolute -top-4 rotate-[33deg] left-7 whitespace-nowrap text-sm">click me</span>📦</button></span>
                    <ExperienceGained
                        blues={[
                            { emphasis: 'react' },
                            { emphasis: 'tailwind' },
                            { emphasis: 'godot' },
                        ]}
                        greens={[
                            { emphasis: 'next.js' },
                        ]}
                        yellows={[
                            { emphasis: 'wordpress' },

                        ]}
                        reds={[
                            { emphasis: 'prisma' },
                            { emphasis: 'blender' },

                        ]}
                    />





                    <DraggableObject>
                        <Image className="pointer-events-none" src={rctsvg} alt='bubble' />
                    </DraggableObject>
                    <DraggableObject className="bg-yawhite">
                        <Image className="pointer-events-none" src={nextsvg} alt='bubble' />
                    </DraggableObject>
                    <DraggableObject >
                        <svg viewBox="0 0 248 31" className="scale-[250%] text-slate-900 dark:text-white w-auto h-5"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" fill="currentColor"></path></svg>
                    </DraggableObject>
                    <DraggableObject>
                        <svg className="scale-[200%]" xmlns="http://www.w3.org/2000/svg" role="img" width="28" height="28" viewBox="0 0 28 28">
                            <title>WordPress.org</title>
                            <path fill="currentColor" d="M13.6052 0.923525C16.1432 0.923525 18.6137 1.67953 20.7062 3.09703C22.7447 4.47403 24.3512 6.41803 25.3097 8.68603C26.9837 12.6415 26.5382 17.164 24.1352 20.7145C22.7582 22.753 20.8142 24.3595 18.5462 25.318C14.5907 26.992 10.0682 26.5465 6.51772 24.1435C4.47922 22.7665 2.87272 20.8225 1.91422 18.5545C0.240225 14.599 0.685725 10.0765 3.08872 6.52603C4.46572 4.48753 6.40973 2.88103 8.67772 1.92253C10.2302 1.26103 11.9177 0.923525 13.6052 0.923525ZM13.6052 0.113525C6.15322 0.113525 0.105225 6.16153 0.105225 13.6135C0.105225 21.0655 6.15322 27.1135 13.6052 27.1135C21.0572 27.1135 27.1052 21.0655 27.1052 13.6135C27.1052 6.16153 21.0572 0.113525 13.6052 0.113525Z"></path>
                            <path fill="currentColor" d="M2.36011 13.6133C2.36011 17.9198 4.81711 21.8618 8.70511 23.7383L3.33211 9.03684C2.68411 10.4813 2.36011 12.0338 2.36011 13.6133ZM21.2061 13.0463C21.2061 11.6558 20.7066 10.6973 20.2746 9.94134C19.8426 9.18534 19.1676 8.22684 19.1676 7.30884C19.1676 6.39084 19.9506 5.31084 21.0576 5.31084H21.2061C16.6296 1.11234 9.51511 1.42284 5.31661 6.01284C4.91161 6.45834 4.53361 6.93084 4.20961 7.43034H4.93861C6.11311 7.43034 7.93561 7.28184 7.93561 7.28184C8.54311 7.24134 8.61061 8.13234 8.00311 8.21334C8.00311 8.21334 7.39561 8.28084 6.72061 8.32134L10.8111 20.5118L13.2681 13.1273L11.5131 8.32134C10.9056 8.28084 10.3386 8.21334 10.3386 8.21334C9.73111 8.17284 9.79861 7.25484 10.4061 7.28184C10.4061 7.28184 12.2691 7.43034 13.3626 7.43034C14.4561 7.43034 16.3596 7.28184 16.3596 7.28184C16.9671 7.24134 17.0346 8.13234 16.4271 8.21334C16.4271 8.21334 15.8196 8.28084 15.1446 8.32134L19.2081 20.4173L20.3691 16.7453C20.8821 15.1388 21.1926 14.0048 21.1926 13.0328L21.2061 13.0463ZM13.7946 14.5853L10.4196 24.3998C12.6876 25.0613 15.1041 25.0073 17.3316 24.2243L17.2506 24.0758L13.7946 14.5853ZM23.4741 8.21334C23.5281 8.59134 23.5551 8.98284 23.5551 9.37434C23.5551 10.5218 23.3391 11.8043 22.7046 13.3973L19.2621 23.3333C24.5271 20.2688 26.4036 13.5593 23.4741 8.21334Z"></path>
                        </svg>
                    </DraggableObject>
                    <DraggableObject>
                        <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" className="fill-yawhite scale-[160%]">
                            <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
                        </svg>
                    </DraggableObject>
                    <DraggableObject>
                        <svg className="scale-[160%]" width="90" height="28" viewBox="0 0 90 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.209637 19.0073C-0.0659575 18.5726 -0.070121 18.0189 0.198904 17.58L10.3282 1.05707C10.8916 0.138071 12.252 0.218426 12.7033 1.19735L21.9569 21.2706C22.3002 22.0154 21.905 22.8917 21.1194 23.1274L6.72474 27.4458C6.14558 27.6195 5.52155 27.3867 5.19781 26.876L0.209637 19.0073ZM11.4969 5.88824C11.5945 5.40217 12.2605 5.33208 12.4572 5.78717L18.8402 20.5571C18.9603 20.8352 18.8108 21.1559 18.5205 21.2425L8.57492 24.2114C8.20935 24.3205 7.85916 24.0011 7.93428 23.627L11.4969 5.88824ZM48.4948 21.1371H51.3226V10.772H48.4948V21.1371ZM48.3744 8.09277C48.3744 7.17221 48.8878 6.7116 49.9137 6.7116C50.9394 6.7116 51.4527 7.17221 51.4527 8.09277C51.4527 8.53176 51.3244 8.87321 51.068 9.11743C50.8114 9.36165 50.4267 9.48343 49.9137 9.48343C48.8878 9.48343 48.3744 9.01987 48.3744 8.09277ZM87.1709 16.335L86.0768 16.372C85.2548 16.3969 84.6429 16.5455 84.2412 16.8172C83.8392 17.0893 83.6386 17.5031 83.6386 18.0596C83.6386 18.8567 84.0959 19.2555 85.0106 19.2555C85.6656 19.2555 86.1897 19.0672 86.5819 18.6898C86.9744 18.313 87.1709 17.8124 87.1709 17.1878V16.335ZM88.0053 21.1375L87.4583 19.7282H87.384C86.908 20.3279 86.4182 20.7437 85.9144 20.9755C85.4109 21.2072 84.7542 21.3228 83.9446 21.3228C82.9491 21.3228 82.1661 21.0386 81.5941 20.47C81.0226 19.9017 80.7368 19.0918 80.7368 18.0409C80.7368 16.941 81.1214 16.1298 81.8907 15.6073C82.6607 15.0851 83.8209 14.7961 85.3723 14.7404L87.1709 14.6848V14.2304C87.1709 13.1799 86.633 12.6544 85.5576 12.6544C84.7293 12.6544 83.7558 12.9045 82.6371 13.4054L81.7009 11.4955C82.8938 10.8716 84.2167 10.559 85.6689 10.559C87.0596 10.559 88.1258 10.8621 88.8676 11.4677C89.6091 12.0734 89.98 12.9946 89.98 14.2304V21.1375H88.0053ZM72.4802 21.1375H69.6524V15.0834C69.6524 14.3357 69.527 13.775 69.2772 13.4008C69.0265 13.0269 68.6326 12.8397 68.0948 12.8397C67.3719 12.8397 66.8465 13.1058 66.5188 13.6371C66.1911 14.1688 66.0275 15.0435 66.0275 16.261V21.1375H63.1996V10.7723H65.3599L65.74 12.0982H65.8978C66.1757 11.6225 66.5778 11.25 67.1029 10.9812C67.6283 10.7121 68.231 10.5776 68.9109 10.5776C70.4623 10.5776 71.5128 11.0846 72.0631 12.0982H72.3132C72.5915 11.616 73.001 11.2421 73.5419 10.9763C74.0827 10.7105 74.6929 10.5776 75.3728 10.5776C76.5471 10.5776 77.4359 10.8791 78.0382 11.4817C78.6409 12.0844 78.9421 13.0502 78.9421 14.3786V21.1375H76.1051V15.0834C76.1051 14.3357 75.9798 13.775 75.73 13.4008C75.4792 13.0269 75.0854 12.8397 74.5475 12.8397C73.8555 12.8397 73.3379 13.0872 72.9945 13.5815C72.6517 14.0761 72.4802 14.8608 72.4802 15.9362V21.1375ZM60.17 20.4885C60.9088 19.9323 61.2781 19.1227 61.2781 18.0594C61.2781 17.5468 61.1887 17.1045 61.0093 16.7336C60.8299 16.3627 60.5517 16.0353 60.1749 15.7508C59.7981 15.4667 59.2046 15.1609 58.3946 14.8332C57.4862 14.4685 56.8976 14.1932 56.6285 14.0079C56.3601 13.8226 56.2252 13.6033 56.2252 13.3496C56.2252 12.8985 56.6426 12.6729 57.477 12.6729C57.9465 12.6729 58.4071 12.7443 58.8582 12.886C59.3093 13.0284 59.7948 13.2104 60.314 13.4331L61.1668 11.3936C59.9863 10.8498 58.7718 10.5778 57.5232 10.5778C56.2127 10.5778 55.2009 10.8295 54.4872 11.3333C53.7729 11.8371 53.416 12.5495 53.416 13.4701C53.416 14.0079 53.5012 14.461 53.6714 14.8286C53.841 15.1963 54.113 15.5223 54.4872 15.8065C54.8607 16.091 55.4467 16.4 56.2438 16.7336C56.8 16.9686 57.2453 17.1742 57.5788 17.3503C57.9128 17.5265 58.1475 17.6843 58.2837 17.8231C58.4195 17.9622 58.4876 18.1429 58.4876 18.3655C58.4876 18.9587 57.9743 19.2553 56.9483 19.2553C56.4478 19.2553 55.8684 19.1718 55.2103 19.0052C54.5517 18.8382 53.9601 18.6313 53.4347 18.3838V20.7203C53.8983 20.918 54.3959 21.0679 54.9275 21.1701C55.4591 21.2719 56.1014 21.3229 56.8557 21.3229C58.3266 21.3229 59.4314 21.0447 60.17 20.4885ZM46.9948 10.661C46.7414 10.6054 46.4232 10.5776 46.0398 10.5776C45.3969 10.5776 44.8021 10.7553 44.2554 11.1108C43.708 11.4664 43.2739 11.9345 42.9524 12.5152H42.8136L42.3962 10.7723H40.2546V21.1375H43.0824V15.8622C43.0824 15.0278 43.3341 14.3786 43.8376 13.9151C44.3418 13.4515 45.0446 13.2197 45.9472 13.2197C46.2749 13.2197 46.5528 13.2508 46.7817 13.3124L46.9948 10.661ZM31.9317 13.9614H32.8774C33.7613 13.9614 34.4223 13.7869 34.8613 13.4376C35.3003 13.0886 35.5196 12.5799 35.5196 11.9124C35.5196 11.239 35.3356 10.7414 34.968 10.4199C34.6 10.0984 34.0239 9.93766 33.2388 9.93766H31.9317V13.9614ZM38.4214 11.8106C38.4214 13.2694 37.9657 14.385 37.0537 15.1573C36.1423 15.9302 34.8459 16.3162 33.1649 16.3162H31.9317V21.1373H29.0577V7.58296H33.3872C35.0315 7.58296 36.2814 7.93684 37.1375 8.64461C37.9936 9.35238 38.4214 10.4079 38.4214 11.8106Z" fill="#FFFFFF" />
                        </svg>
                    </DraggableObject>
                    <DraggableObject className="h-[88px] w-[88px]">
                        <Image className="pointer-events-none" src={'https://godotengine.org/assets/logo_dark.svg'} fill objectFit="contain" alt='bubble' />
                    </DraggableObject>
                    <DraggableObject className="h-[88px] w-[88px]">
                        <Image className="pointer-events-none" objectFit="contain" src={'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MS40MTQyMSIgdmlld0JveD0iMCAwIDE5OCA1OCI+PHBhdGggZD0iTTE4MC41MTMgMTYuMjcxSDU5Ljg2OGMtLjA3NC0uMDU3LS4xNDEtLjEyNi0uMjEyLS4xODEtLjAxOC0uMDE3LTE3Ljc0OS0xMy42MzgtMTguMjgyLTE0LjA1bC0uMDYxLS4wNDZjLTIuODQxLTIuMTc1LTcuMDYxLTIuMjIxLTEwLjA1Mi0uMTI1LTEuODcxIDEuMzA5LTIuOTk1IDMuMjg5LTMuMDc5IDUuNDMxLS4wMDIuMDg1LS4wMDcuMTcxLS4wMDcuMjU4IDAgMS4xMTEuMjk1IDIuMTg0LjgyOCAzLjE0OGwtMTEuMDEyLjAxMWMtNC4xMTguMDAzLTcuODQyIDIuNzgxLTguNjkyIDYuNDYyYTcuMTA3IDcuMTA3IDAgMCAwLS4xODIgMS41ODhjMCAxLjU0LjUxMiAzLjAzMyAxLjQ4MSA0LjI1OSAxLjA5MSAxLjM3MSAyLjY2NSAyLjI5NCA0LjQ2MSAyLjY1NEw0LjY4NCAzMy42NDVjLS4wMzcuMDI3LS4wNjcuMDUyLS4wOTMuMDY5LTIuMDggMS41OTgtMy40NSAzLjkxMi0zLjc2IDYuMzQ4YTguMyA4LjMgMCAwIDAtLjA2OCAxLjA2MmMwIDEuNzU0LjU2IDMuNDIyIDEuNjIyIDQuNzg1IDEuMjkzIDEuNjU0IDMuMjAxIDIuNzA0IDUuMzc0IDIuOTUxIDIuNDkuMjg4IDUuMTEtLjUxIDcuMTgzLTIuMTg2LjAxMy0uMDEgMi41OC0yLjExNSA1LjI4Ny00LjMyOWEyMi43OTIgMjIuNzkyIDAgMCAwIDQuMTg2IDYuNjA2YzIuMzE2IDIuNTU5IDUuMTMxIDQuNTgxIDguMzYyIDYuMDExIDMuMzk2IDEuNTA1IDcuMDM1IDIuMjY1IDEwLjgxNyAyLjI1NiAzLjc4NS0uMDA3IDcuNDIyLS43NzYgMTAuODEzLTIuMjkgMy4yMzgtMS40NDkgNi4wNDctMy40NzggOC4zNTQtNi4wMzMuMzM5LS4zNzguNjUxLS43NzYuOTYzLTEuMTc2aDExNi43ODljOS4yMjYgMCAxNi43MjMtNy4wNTMgMTYuNzIzLTE1LjcyMiAwLTguNjcxLTcuNDk3LTE1LjcyNi0xNi43MjMtMTUuNzI2WiIgc3R5bGU9ImZpbGw6I2ZlZmVmZTtmaWxsLXJ1bGU6bm9uemVybyIvPjxwYXRoIGQ9Ik0zNi4xMyAzMS4yODVjLjEwNi0xLjg5MSAxLjAzMi0zLjU1NyAyLjQyOS00LjczOCAxLjM3LTEuMTYgMy4yMTQtMS44NjkgNS4yMjYtMS44NjkgMi4wMSAwIDMuODU0LjcwOSA1LjIyNSAxLjg2OSAxLjM5NiAxLjE4MSAyLjMyMiAyLjg0NyAyLjQyOSA0LjczNi4xMDYgMS45NDMtLjY3NSAzLjc0OC0yLjA0NSA1LjA4Ni0xLjM5NyAxLjM2MS0zLjM4NCAyLjIxNS01LjYwOSAyLjIxNXMtNC4yMTYtLjg1NC01LjYxMi0yLjIxNWMtMS4zNzEtMS4zMzgtMi4xNS0zLjE0My0yLjA0My01LjA4NFoiIHN0eWxlPSJmaWxsOiMwZTU0OGI7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJNMjMuOTQgMzUuMTA2Yy4wMTMuNzQuMjQ5IDIuMTc4LjYwMyAzLjMwMS43NDQgMi4zNzcgMi4wMDYgNC41NzYgMy43NjIgNi41MTQgMS44MDIgMS45OTIgNC4wMjEgMy41OTIgNi41ODQgNC43MjggMi42OTQgMS4xOTMgNS42MTMgMS44MDEgOC42NDUgMS43OTZhMjEuMTc5IDIxLjE3OSAwIDAgMCA4LjY0LTEuODI2YzIuNTYzLTEuMTQ3IDQuNzgtMi43NTQgNi41NzktNC43NDcgMS43NTUtMS45NDYgMy4wMTUtNC4xNDkgMy43NjEtNi41MjYuMzc1LTEuMjAxLjYxMi0yLjQyLjcwNy0zLjY0M2ExNi42MDUgMTYuNjA1IDAgMCAwLS4xMTctMy42MTggMTYuODE5IDE2LjgxOSAwIDAgMC0yLjM5OS02LjU2NSAxOC4zMTYgMTguMzE2IDAgMCAwLTQuMzc2LTQuODI1bC4wMDQtLjAwM0wzOC42MjIgNi4wOTNjLS4wMTYtLjAxMi0uMDI5LS4wMjUtLjA0Ni0uMDM2LTEuMTYyLS44OTItMy4xMTYtLjg4OS00LjM5NC4wMDUtMS4yOTIuOTA0LTEuNDQgMi4zOTktLjI5IDMuMzQybC0uMDA1LjAwNSA3LjM4NyA2LjAwNy0yMi41MTUuMDI0aC0uMDNjLTEuODYxLjAwMi0zLjY1IDEuMjIzLTQuMDA0IDIuNzY2LS4zNjQgMS41NzIuOSAyLjg3NiAyLjgzNSAyLjg4M2wtLjAwMy4wMDcgMTEuNDEyLS4wMjJMOC42MDUgMzYuNzA1bC0uMDc4LjA1OGMtMS45MjEgMS40NzEtMi41NDIgMy45MTctMS4zMzIgNS40NjUgMS4yMjggMS41NzQgMy44MzkgMS41NzcgNS43OC4wMDlsMTEuMTE0LTkuMDk2cy0uMTYyIDEuMjI4LS4xNDkgMS45NjVabTI4LjU1OSA0LjExMmMtMi4yOSAyLjMzMy01LjQ5NiAzLjY1Ni04Ljk2NSAzLjY2My0zLjQ3NC4wMDYtNi42OC0xLjMwNS04Ljk3LTMuNjM0YTEwLjY2NSAxMC42NjUgMCAwIDEtMi40NDgtMy44MzIgOS45NSA5Ljk1IDAgMCAxLS41NjItNC4yODIgMTAuMTEgMTAuMTEgMCAwIDEgMS4yMjctNC4wMzEgMTEuMTEgMTEuMTEgMCAwIDEgMi43MjQtMy4yMzljMi4yMjYtMS44MTQgNS4wNi0yLjc5NiA4LjAyNC0yLjggMi45NjctLjAwNCA1Ljc5OS45NjkgOC4wMjcgMi43NzdhMTEuMDY3IDExLjA2NyAwIDAgMSAyLjcyMSAzLjIyOSAxMC4xMTUgMTAuMTE1IDAgMCAxIDEuMjMyIDQuMDI5IDkuOTc1IDkuOTc1IDAgMCAxLS41NjQgNC4yNzkgMTAuNzE0IDEwLjcxNCAwIDAgMS0yLjQ0NiAzLjg0MVoiIHN0eWxlPSJmaWxsOiNmNDc5MmI7ZmlsbC1ydWxlOm5vbnplcm8iLz48cGF0aCBkPSJNMTU3LjQ2NyAzMS4yNTRjLjE3MS0xLjkwOCAxLjY0Ni0zLjExOCAzLjg5OS0zLjExOCAyLjI1NiAwIDMuNzMgMS4yMSAzLjkwMSAzLjExOGgtNy44Wm03LjU2OSA0LjcxMWMtLjU3NyAxLjQxNC0xLjkzNyAyLjI1MS0zLjc4NCAyLjI1MS0yLjMxMyAwLTMuODctMS40NDQtMy45MzMtMy43MjVoMTMuMjk3di0uNjcxYzAtNS43MTQtMy4zNTQtOC45MjUtOS4zNjQtOC45MjUtNS44MzYgMC05LjM2NSAzLjI0MS05LjM2NSA4LjMyNCAwIDUuMTE0IDMuNTg0IDguMzUgOS4zNjUgOC4zNSAzLjQ2OSAwIDYuMTU5LTEuMTg5IDcuODE3LTMuMjc5bC00LjAzMy0yLjMyNVpNOTguNDY4IDMxLjI2M2MuMTc2LTEuOTA4IDEuNjUxLTMuMTE4IDMuOTA2LTMuMTE4IDIuMjUyIDAgMy43MjYgMS4yMSAzLjg5OSAzLjExOGgtNy44MDVabTcuNTc0IDQuNzExYy0uNTc4IDEuNDE4LTEuOTM3IDIuMjU1LTMuNzg4IDIuMjU1LTIuMzA5IDAtMy44Ny0xLjQ0OC0zLjkzMS0zLjczaDEzLjI5NHYtLjY2N2MwLTUuNzE3LTMuMzUzLTguOTI5LTkuMzYzLTguOTI5LTUuODM5IDAtOS4zNjEgMy4yNDItOS4zNjEgOC4zMjUgMCA1LjExNCAzLjU4MiA4LjM1IDkuMzYxIDguMzUgMy40NjggMCA2LjE2LTEuMTg1IDcuODIxLTMuMjc4bC00LjAzMy0yLjMyNlpNODYuOTA3IDIxLjQ0aDQuNzk1djE5LjYxN2gtNC43OTV6TTExMi44MSAyNi42NTJoNC44MjJ2MS4xNjhjMS43MDctMS44MjIgMy43NTctMi43NDMgNi4wNjktMi43NDMgMi42NjMgMCA0LjY3OS45MjEgNS43MiAyLjQ4OS44NjkgMS4yOTUuOTI2IDIuODU4LjkyNiA0LjkxMnY4LjU3OWgtNC44Mjl2LTcuNTM4YzAtMy4xMjgtLjYyOS00LjU3Mi0zLjM3NS00LjU3Mi0yLjc3NSAwLTQuNTExIDEuNjUzLTQuNTExIDQuNDI4djcuNjgyaC00LjgyMlYyNi42NTJaTTE0NS44NzYgMzMuNDYyYzAgMi42ODUtMS43OTQgNC40NDYtNC41NyA0LjQ0Ni0yLjc3OCAwLTQuNTcyLTEuNzAxLTQuNTcyLTQuNDE1IDAtMi43NTQgMS43Ny00LjQ1NCA0LjU3Mi00LjQ1NCAyLjc3NiAwIDQuNTcgMS43MyA0LjU3IDQuNDIzWm0wLTYuMTU3Yy0xLjIxOS0xLjMwNy0yLjk4My0yLjAyNC01LjQzNS0yLjAyNC01LjI5IDAtOC45MDIgMy4yNjItOC45MDIgOC4xNTEgMCA0Ljc5MyAzLjU4NyA4LjE0NiA4LjgxNSA4LjE0NiAyLjM5NyAwIDQuMTU3LS42MDYgNS41MjItMS45NjV2MS40NDRoNC44MjVWMjAuMTk2bC00LjgyNSAxLjI0NHY1Ljg2NVpNNzUuOTQ3IDI5LjAzOWMyLjgwNCAwIDQuNTY3IDEuNyA0LjU2NyA0LjQ1NCAwIDIuNzE0LTEuNzkxIDQuNDE1LTQuNTY3IDQuNDE1LTIuNzc0IDAtNC41NjYtMS43NjEtNC41NjYtNC40NDYgMC0yLjY5MyAxLjc5Mi00LjQyMyA0LjU2Ni00LjQyM1ptLTQuNTY2LTcuNTk5LTQuODI3LTEuMjQ0djIwLjg2MWg0LjgyN3YtMS40NDRjMS4zNTggMS4zNTkgMy4xMjEgMS45NjUgNS41MiAxLjk2NSA1LjIzMSAwIDguODEzLTMuMzUzIDguODEzLTguMTQ2IDAtNC44ODktMy42MTMtOC4xNTEtOC45LTguMTUxLTIuNDU3IDAtNC4yMi43MTctNS40MzMgMi4wMjRWMjEuNDRaTTE3MS44MDYgNDEuMDU3VjI2LjY1Mmg0LjgyNXYuODljMS40NDUtMS43NCAyLjk3NC0yLjYwNiA0LjcxMy0yLjYwNi4zNDUgMCAuNzc5LjA1NiAxLjM1Ni4xMTN2NC4xMDdjLS40NjUtLjA2MS0uOTgzLS4wNjEtMS41MzMtLjA2MS0yLjgwNSAwLTQuNTM2IDEuODUtNC41MzYgNC45OTZ2Ni45NjZoLTQuODI1Wk0xODguOTU2IDI0Ljk1MmgtLjM3MWwuMDEzLTEuMzIxLjAyLS40MzctLjEuMzYtLjQzOCAxLjM5OGgtLjMzOGwtLjQzLTEuMzk4LS4xMDgtLjM1NC4wMjYuNDMxLjAxMyAxLjMyMWgtLjM2M3YtMi4xNGguNTA4bC41MzUgMS42ODguNTIzLTEuNjg4aC41MXYyLjE0Wm0tMi45MzIgMGgtLjM3M3YtMS44MjNoLS42ODh2LS4zMTdoMS43MzZ2LjMxN2gtLjY3NXYxLjgyM1oiIHN0eWxlPSJmaWxsOiMwZTU0OGI7ZmlsbC1ydWxlOm5vbnplcm8iLz48L3N2Zz4='} fill alt='bubble' />
                    </DraggableObject>
                </div>
                <div className="relative w-[35%]">
                    <Image src={headerImg} alt='header image' fill objectFit="cover" objectPosition="60%" unoptimized />
                </div>
            </div>

        </div >
    )
}