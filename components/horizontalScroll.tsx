import { ReactNode } from "react";

export default function HorizontalScroll({ children }: { children: ReactNode | string }) {
    window.addEventListener('scroll', () => {
        document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);
    return (
        <div className="relative overflow-x-clip flex w-full bg-black py-0 my-0 text-white z-[2] h-[64px]">
            <span className="absolute horizontal-scroll text-[64px] mb-4 tracking-[8px] font-bold font-josefin uppercase whitespace-nowrap overflow-hidden my-0 py-0 leading-[63px]">{children}</span>
        </div>
    )
}