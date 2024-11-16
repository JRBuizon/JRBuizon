'use client'
import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";
import golaunch from "@/public/images/golaunch.svg"
import mdg from "@/public/images/mdg.gif"
import mwm from "@/public/images/mwm.png"
import bcom from "@/public/images/become.png"
import { IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: '400' })

export default function GoLaunchPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [animation1, setAnimation1] = useState<boolean>(false);
    const router = useRouter()
    useEffect(() => {
        setLoading(false);
        setTimeout(() => setAnimation1(true), 1600)
    }, [])
    return (
        <div className="text-white bg-[#111] px-6 py-6 w-[100vw] h-[100vh] overflow-hidden relative grid grid-cols-1 lg:grid-cols-3 gap-6 justify-start items-start pt-[10%]">
            <button type="button" onClick={() => {
                setLoading(true);
                setTimeout(() => {
                    router.push("/");
                }, 2200)
            }} className="absolute top-4 left-7 font-bold tracking-widest flex flex-row items-center hover:scale-[105%] transition-ease-out hover:text-blu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                <span>BACK</span>
            </button>
            <div className="absolute h-[100vh] w-[100vw] hidden lg:flex flex-col justify-center items-center pointer-events-none">
                <div className={clsx("transition-all duration-[2s] ease-in-out absolute flex flex-col justify-center items-center w-full h-[100%] z-[99999999] bg-[#fff]", !loading && "translate-x-[100%]")} />
                <div className={clsx("absolute scale-[300%] transition-all duration-[500ms] ease-out delay-[1600ms] ease-[cubic-bezier(.24,.31,.23,1)]", animation1 && "opacity-[20%] scale-[250%]")}>
                    <div className="relative rounded-md overflow-hidden">
                        <Image alt="golaunch logo" src={golaunch} />
                        <div className={clsx("absolute rotate-[-47deg] bg-[#111] h-[2rem] w-[16rem] top-0 left-0 translate-x-[-20%] transition-all ease-[cubic-bezier(.04,.55,.27,.99)] duration-[800ms] ", animation1 && "translate-x-[25%] translate-y-[-350%]")} />
                        <div className={clsx("absolute rotate-[-47deg] bg-[#111] h-[2rem] w-[16rem] top-0 left-0 delay-[200ms] transition-all ease-[cubic-bezier(.04,.55,.27,.99)] duration-[800ms] ", !animation1 && "translate-x-[20%] translate-y-[300%]", animation1 && "translate-x-[62%] translate-y-[-50%]")} />
                        <div className={clsx("absolute rotate-[-47deg] bg-[#111] h-[2rem] w-[16rem] top-0 left-0 delay-[400ms] transition-all ease-[cubic-bezier(.04,.55,.27,.99)] duration-[800ms] ", !animation1 && "translate-x-[0%] translate-y-[300%]", animation1 && "translate-x-[62%] translate-y-[-190%]")} />
                        <div className={clsx("absolute rotate-[-47deg] bg-[#111] h-[2rem] w-[16rem] top-0 left-0 delay-[600ms] transition-all ease-[cubic-bezier(.04,.55,.27,.99)] duration-[800ms] ", !animation1 && "translate-x-[-20%] translate-y-[200%]", animation1 && "translate-x-[40%] translate-y-[-340%]")} />
                        <div className={clsx("absolute rotate-[-46deg] bg-[#111] h-[2rem] w-[24rem] top-0 left-0 delay-[800ms] transition-all ease-[cubic-bezier(.04,.55,.27,.99)] duration-[800ms] ", !animation1 && "translate-x-[-20%] translate-y-[200%]", animation1 && "translate-x-[35%] translate-y-[-480%]")} />
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-[6rem] h-[100%] relative overflow-hidden">
                        <span className={clsx("transition-all delay-[2400ms] ease-[cubic-bezier(.24,.31,.23,1)] duration-[800ms] absolute text-6xl font-bold tracking-wider top-0 left-0", animation1 ? "translate-x-0" : "translate-x-[100%]")}>GO</span>
                    </div>
                    <div className="w-[16rem] h-[100%] relative overflow-hidden">
                        <span className={clsx("transition-all delay-[2400ms] ease-[cubic-bezier(.24,.31,.23,1)] duration-[800ms] absolute text-6xl font-bold tracking-wider top-0 left-0", animation1 ? "translate-x-0" : "translate-x-[-100%]")}>LAUNCH</span>
                    </div>
                    <span className="opacity-0 text-6xl w-0">LAUNCH</span>

                </div>
            </div>
            <Link href="https://museodelgaleon.org/" target="_blank" className={clsx("delay-[3200ms] flex flex-col transition-all duration-[600ms] ease-in-out", animation1 && "opacity-[100%]", !animation1 && "opacity-[0%]")}>
                <div className="relative rounded-md overflow-hidden h-[15rem] transition-ease-out hover:scale-[103%]">
                    <Image alt="mdg logo" src={mdg} layout="fill" objectFit="cover" />
                </div>
                <span className="font-bold tracking-wider mt-2">MUSEO DEL GALEON <span className="text-xs">(2024)</span></span>
                <span className="tracking-wider leading-none mb-2">WORDPRESS DEV</span>
                <hr className="w-full border border-solid border-white border-b-0" />
                <span className={clsx(mono.className, "text-sm tracking-wider mt-2")}>
                    Museo del Galeon is a maritime museum in the Philippines. This was the first project we had under GoLaunch.
                    I worked with Wordpress and Elementor to make a public-facing website and private website for sponsors.
                    The website was used to receive funding for the museum to be built.
                </span>
            </Link>

            <Link href="https://mindwhatmatters.com.sg/" target="_blank" className={clsx("delay-[3400ms] flex flex-col transition-all duration-[600ms] ease-in-out", animation1 && "opacity-[100%]", !animation1 && "opacity-[0%]")}>
                <div className="relative rounded-md overflow-hidden h-[15rem] transition-ease-out hover:scale-[103%]">
                    <Image alt="mwm logo" src={mwm} layout="fill" objectFit="cover" />
                </div>
                <span className="font-bold tracking-wider mt-2">MIND WHAT MATTERS <span className="text-xs">(2024)</span></span>
                <span className="tracking-wider leading-none mb-2">WORDPRESS DEV</span>
                <hr className="w-full border border-solid border-white border-b-0" />
                <span className={clsx(mono.className, "text-sm tracking-wider mt-2")}>
                    Mind What Matters is a company based in Sinagpore focused on providing psychological services. I worked on their Wordpress website
                    which included creating custom posts and a system for populating said posts in the correct format.
                </span>
            </Link>

            <Link href="https://mindwhatmatters.com.sg/" target="_blank" className={clsx("delay-[3600ms] flex flex-col transition-all duration-[600ms] ease-in-out", animation1 && "opacity-[100%]", !animation1 && "opacity-[0%]")}>
                <div className="relative rounded-md overflow-hidden h-[15rem] transition-ease-out hover:scale-[103%]">
                    <Image alt="become logo" src={bcom} layout="fill" objectFit="cover" />
                </div>
                <span className="font-bold tracking-wider mt-2">BECOME <span className="text-xs">(2024)</span></span>
                <span className="tracking-wider leading-none mb-2">WORDPRESS DEV</span>
                <hr className="w-full border border-solid border-white border-b-0" />
                <span className={clsx(mono.className, "text-sm tracking-wider mt-2")}>
                    Become is a company based in Spain that provides programmes and seminars for businesses. I developed their website
                    on Wordpress and created a system for them to create custom posts. The website also includes in-house translations from Spanish to English.
                </span>
            </Link>

        </div>
    )
}