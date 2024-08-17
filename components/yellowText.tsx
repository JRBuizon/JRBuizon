import clsx from "clsx";
import { ReactNode } from "react";

export default function YellowText({ children, className }: { children: ReactNode, className?: string }) {
    return <span className={clsx("text-yayellow", className)}>{children}</span>
}