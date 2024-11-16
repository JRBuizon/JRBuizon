import Image from "next/image";
import grid from "@/public/images/grid.png"

export default function IsometricGrid() {
  return (<div className="relative">
    <Image alt="" src={grid} />
  </div>)
}
