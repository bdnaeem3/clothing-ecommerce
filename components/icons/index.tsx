import Facebook from "./Facebook";
import Instagram from "./Instagram";
import Phone from "./Phone";

import { IconRendererProps } from "@/types";

const Icon: React.FC<IconRendererProps> = ({ name, ...rest }) => {
  switch (name) {
    case "facebook":
      return <Facebook {...rest} />;
    case "instagram":
      return <Instagram {...rest} />;
    case "phone":
      return <Phone {...rest} />;
    default:
      return;
  }
};

export default Icon;
