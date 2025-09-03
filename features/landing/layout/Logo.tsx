import Link from "next/link";
import { LogoProps } from "@/types";

const Logo: React.FC<LogoProps> = ({ className = "", link = "/", ...rest }) => {
  return (
    <Link href={link}>
      <button
        type="button"
        className={`max-w-[200px] block cursor-pointer`}
        {...rest}
      >
        <img src="/public/logo.png" alt="" />
      </button>
    </Link>
  );
};

export default Logo;
