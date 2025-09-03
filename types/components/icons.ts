import { SVGProps } from "react";

export type IconName =
  | "arrow"
  | "cart"
  | "facebook"
  | "heart"
  | "instagram"
  | "phone"
  | "search";

export interface IconRendererProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}

export interface IconProps extends SVGProps<SVGSVGElement> {
  color?: string;
}
