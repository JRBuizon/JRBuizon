import { StaticImageData } from "next/image";
import LinkCard from "./linkCard";
import YellowText from "./yellowText";
import { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Rethink_Sans } from "next/font/google";
import GreenText from "./greenText";
import BlueText from "./blueText";
import RedText from "./redText";

const rethink = Rethink_Sans({ subsets: ['latin'] })


interface IContentCard {
    imageSource: StaticImageData | string;
    link?: string;
    title?: string;
    children?: ReactNode;
    color: 'red' | 'blue' | 'green' | 'yellow'
}

export default function ContentCard({ imageSource, link = "", title, children, color }: IContentCard) {
    return (
        <div className="flex flex-col items-start w-full">
            <LinkCard source={imageSource} link={link} />
            {!title ? null : color === 'yellow' ?
                <YellowText className="text-lg font-bold leading-none pt-4 pb-2"><Link href={link} className="cursor-yapointer"># {title}</Link></YellowText>
                : color === 'blue' ?
                    <BlueText className="text-lg font-bold leading-none pt-4 pb-2"><Link href={link} className="cursor-yapointer"># {title}</Link></BlueText>
                    : color === 'red' ?
                        <RedText className="text-lg font-bold leading-none pt-4 pb-2"><Link href={link} className="cursor-yapointer"># {title}</Link></RedText>
                        : <GreenText className="text-lg font-bold leading-none pt-4 pb-2"><Link href={link} className="cursor-yapointer"># {title}</Link></GreenText>
            }
            <span className={clsx("text-yawhite text-sm tracking-wide", rethink.className)}>{children}</span>
        </div>
    )
}