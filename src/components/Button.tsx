import React from "react"
import { classNames } from "../utils"

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "p-4 rounded-lg bg-darkSlateGrey text-white font-bold hover:bg-gradient-to-r hover:from-[#ff5379] hover:to-[#ff693a] hover:shadow-xl hover:shadow-tomato/40",
        className || ""
      )}
    >
      {children}
    </button>
  )
}

export default Button
