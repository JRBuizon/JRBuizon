import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

export default function LinkCard({ source, link, gif = false, className }: { source: StaticImageData | string, link: string, gif?: boolean, className?: string }) {
    return (
        <div className={clsx("hover:scale-[102%] cursor-yapointer transition-all duration-300 ease-out relative w-full rounded-md overflow-clip h-[256px]", className)}>
            <Link target="_blank" href={link} className="outline-none cursor-yapointer" >
                <Image unoptimized={gif} src={source} alt="link card" objectFit="cover" fill />
            </Link>
        </div>
    )
}