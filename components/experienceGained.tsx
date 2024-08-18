import BlueText from "./blueText";
import GreenText from "./greenText";
import RedText from "./redText";
import YellowText from "./yellowText";

interface IExperienceGained {
    blues?: { emphasis: string, parenthesis?: string }[]
    greens?: { emphasis: string, parenthesis?: string }[]
    reds?: { emphasis: string, parenthesis?: string }[]
    yellows?: { emphasis: string, parenthesis?: string }[]
}

export default function ExperienceGained({ blues, greens, reds, yellows }: IExperienceGained) {
    return (
        <div className="pt-2 flex flex-col">
            {blues?.map((obj) => (
                <span key={obj.emphasis}>+{" "}<BlueText>{obj.emphasis}</BlueText>{" "}{obj.parenthesis && `(${obj.parenthesis})`}</span>
            ))}
            {greens?.map((obj) => (
                <span key={obj.emphasis}>+{" "}<GreenText>{obj.emphasis}</GreenText>{" "}{obj.parenthesis && `(${obj.parenthesis})`}</span>
            ))}
            {yellows?.map((obj) => (
                <span key={obj.emphasis}>+{" "}<YellowText>{obj.emphasis}</YellowText>{" "}{obj.parenthesis && `(${obj.parenthesis})`}</span>
            ))}
            {reds?.map((obj) => (
                <span key={obj.emphasis}>+{" "}<RedText>{obj.emphasis}</RedText>{" "}{obj.parenthesis && `(${obj.parenthesis})`}</span>
            ))}
        </div>
    )
}