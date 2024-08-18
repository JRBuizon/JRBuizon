import clsx from "clsx";
import { ReactNode, useEffect } from "react";

export default function HorizontalScroll({ children, backwards = false, className }: { children: ReactNode | string, backwards?: boolean, className?: string }) {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString());
        }, false);
    }, [])
    return (
        <div className={clsx("pointer-events-none noselect relative overflow-x-clip flex w-full bg-black py-0 my-0 pb-4 z-[9] h-[64px]", backwards && "justify-end")}>
            <span className={clsx("transition-all duration-200 text-white bg-black absolute text-[64px] tracking-[8px] font-bold font-josefin uppercase whitespace-nowrap overflow-hidden my-0 py-0", backwards ? "horizontal-scroll-b" : "horizontal-scroll", className)}>{children}</span>
        </div>
    )
}