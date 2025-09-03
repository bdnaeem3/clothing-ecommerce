import { ButtonHTMLAttributes } from "react";

// layout
export interface LogoProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  link?: string;
}
