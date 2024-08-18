import { ReactNode, useEffect } from "react";

export default function HorizontalScroll({ children }: { children: ReactNode | string }) {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            document.body.style.setProperty('--scroll', (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)).toString());
        }, false);
    }, [])
    return (
        <div className="pointer-events-none noselect relative overflow-x-clip flex w-full bg-black py-0 my-0 pb-4 z-[9] h-[64px]">
            <span className="transition-all duration-200 text-white bg-black absolute horizontal-scroll text-[64px] tracking-[8px] font-bold font-josefin uppercase whitespace-nowrap overflow-hidden my-0 py-0">{children}</span>
        </div>
    )
}