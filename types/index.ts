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

export interface CarProps {
    city_mpg       : number,
    combination_mpg: number,
    cylinders      : number,
    displacement   : number,
    drive          : string,
    fuel_type      : string,
    highway_mpg    : number,
    make           : string,
    model          : string,
    transmission   : string,
    year           : number,
  }