import { Button } from "./ui/button";

interface Props {
    title: string;
    type?: "submit" | "reset" | "button";
    style: "primary" | "secondary" | "ghost";
    imageSrc?: string;
    otherClasses?: string;
    onClick?: () => void | undefined;
}

const DButton = ({
    title,
    type = "button",
    style,
    imageSrc,
    otherClasses,
    onClick,
}: Props) => {
    const background =
        style === "primary"
            ? "bg-primary"
            : style === "secondary"
            ? "bg-primary-100"
            : "bg-transparent";
    const text =
        style === "primary"
            ? "text-text-light-primary"
            : style === "secondary"
            ? "text-primary"
            : "text-[#4A505C]";
    const border = style === "ghost" ? "border-[1px] border-[#F1F1F1]" : "";
    return (
        <Button
            onClick={onClick}
            type={type}
            className={`bodyMediumBold max-md:bodySmallBold hover:${background} rounded-[10px] px-[26px] max-md:px-[22px] py-[10px] max-md:py-[7px] gap-2 ${border} ${text} ${background} ${otherClasses}`}
        >
            {imageSrc != undefined && (
                <img src={imageSrc} className="h-[20px] w-[20px]" />
            )}
            {title}
        </Button>
    );
};

export default DButton;
