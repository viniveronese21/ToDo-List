import { HTMLAttributes, ReactNode } from "react";

import styles from "./button.module.css" 

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  type?: "confirm" | "trash";
}

export function IconButton ({children, type, onClick}:ButtonProps) {
  return(
    <button 
      className={type === "confirm"? styles.buttonComplete : styles.buttonTrash}
      onClick={onClick}
    >
      {children}
    </button>
  )
}