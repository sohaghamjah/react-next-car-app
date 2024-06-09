import { MouseEventHandler } from "react";

export interface customButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
}

export interface searchManuFectureProps{
    manuFacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}