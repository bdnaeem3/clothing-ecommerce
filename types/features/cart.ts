import { HTMLAttributes } from "react";

export interface CheckoutProps extends HTMLAttributes<HTMLDivElement> {
  items?: any[];
  className?: string;
  onCheckoutClick?: () => void;
}
