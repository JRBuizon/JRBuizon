import clsx from "clsx";
import { Cutive_Mono } from "next/font/google";
import { ReactNode } from "react";
const cutive = Cutive_Mono({ weight: "400", subsets: ['latin'] })
export default function CodeText({ children, className }: { children: ReactNode, className?: string }) {
    return (
        <span className={clsx("rounded-sm px-[4px] py-[2px] bg-[#302e2c] text-[#ba3800]", cutive.className, className)}>{children}</span>
    )
}