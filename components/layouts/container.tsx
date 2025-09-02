import React from "react";
import { DefaultContainerProps } from "@/types";

export const Container: React.FC<DefaultContainerProps> = ({
  children,
  className = "",
  variant = "default",
  ...rest
}) => {
  const classMap: Record<
    NonNullable<DefaultContainerProps["variant"]>,
    string
  > = {
    default:
      "w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[90%]",
  };

  return (
    <div className={`${classMap[variant]} ${className}`} {...rest}>
      {children}
    </div>
  );
};
