import clsx from "clsx";
import { ReactNode } from "react";

export default function RedText({ children, className }: { children: ReactNode, className?: string }) {
    return <span className={clsx("text-yared", className)}>{children}</span>
}