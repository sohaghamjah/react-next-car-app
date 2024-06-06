"use client";

import { customButtonProps } from "@/types";

function CustomButton({title,containerStyles,handleClick,btnType}: customButtonProps) {
  return (
    <button 
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  )
}

export default CustomButton