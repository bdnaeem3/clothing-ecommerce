import { HTMLAttributes } from "react";

export interface CartDropdownProps extends HTMLAttributes<HTMLDivElement> {
  items?: any[];
  className?: string;
  onCheckoutClick?: () => void;
}
