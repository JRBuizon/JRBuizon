import clsx from "clsx";
import { ReactNode } from "react";

export default function GreenText({ children, className }: { children: ReactNode, className?: string }) {
    return <span className={clsx("text-yagreen", className)}>{children}</span>
}