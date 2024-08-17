import clsx from "clsx";
import { ReactNode } from "react";

export default function BlueText({ children, className }: { children: ReactNode, className?: string }) {
    return <span className={clsx("text-yablue", className)}>{children}</span>
}