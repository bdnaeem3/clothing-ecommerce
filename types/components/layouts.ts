import { ReactNode, HTMLAttributes } from "react";

// Containers
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: string;
  className?: string;
}
