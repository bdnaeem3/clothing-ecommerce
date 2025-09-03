import { ButtonProps } from "@/types";

export const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) => {
  const classMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "table px-[15px] py-[10px] text-white my-[10px] mx-auto bg-[#d73977] rounded-[4px] cursor-pointer",
  };

  return (
    <button
      type={type}
      className={`${classMap[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
