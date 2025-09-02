import { ReactNode, HTMLAttributes } from "react";

// Containers
export interface DefaultContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: string;
  className?: string;
}
