import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoolAnimation = () => {
    const [animationStart, setAnimationStart] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)
    const [animationDone, setAnimationDone] = useState(false)
    useEffect(() => {
        setAnimationStart(true);
        setTimeout(function () { setAnimationEnd(true); }, 700);
        setTimeout(function () { setAnimationDone(true); }, 1400);
    }, [])
    return (
        <div className="text-xl flex flex-col items-center relative h-[90vh] text-[64px] w-full">
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[800ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[0%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[800ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[10%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[20%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[30%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[40%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[50%] duration-500 transition-all ease-in-out text-white z-[2]`, (animationStart && !animationEnd) && "top-[38%] text-[88px] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]", (animationEnd && !animationDone) && "duration-[700ms] top-[40%] text-[64px] drop-shadow-none text-black", animationDone && "delay-[100ms] top-[40%] text-white drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] duration-500 transition-all ease-in-out z-[3]`, (animationStart && !animationEnd) && "text-[88px]", animationEnd && "duration-[700ms] text-[64px]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] duration-500 transition-all ease-in-out text-white z-[2]`, (animationStart && !animationEnd) && "top-[62%] text-[88px] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]", (animationEnd && !animationDone) && "duration-[700ms] top-[60%] text-[64px] drop-shadow-none text-black", animationDone && "delay-[100ms] top-[60%] text-white drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[100ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[100ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[50%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[200ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[60%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[300ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[70%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[400ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[80%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[-6%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[800ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[10%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[26%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[500ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[58.75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[600ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[75%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[700ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>
            <span className={clsx(`font-bold font-josefin absolute top-[90%] left-[91.5%] duration-500 transition-all ease-in-out text-white`, animationDone && "delay-[800ms] drop-shadow-[0_0px_0.5px_rgba(0,0,0,1)]")}>yyyabiii</span>

        </div>
    )
}