import { useFela } from "react-fela";
import toggleIcon from "/toggle-icon.svg";
import { NavbarVariant } from "../Navbar";
import { NavbarSize, sizeBreakpointMapping } from "../utils";
import { mediaQueryByName } from "../../Flex/mediaQuery";
import { StyleProps } from "../../common";

const base = () => ({
  display: "inline-block",
  width: "1.5em",
  height: "1.5em",
  verticalAlign: "middle",
  backgroundImage: `url(${toggleIcon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
});

const expandSizeRule = ({ size, variant }: StyleProps<ToggleIconProps>) => {
  const breakpoint = sizeBreakpointMapping[size as NavbarSize];
  if (variant === "expand") {
    return {
      [mediaQueryByName[breakpoint]]: { display: "none " },
    };
  }

  return {};
};

export type ToggleIconProps = {
  className?: string;
  size?: NavbarSize;
  variant?: NavbarVariant;
};

export const ToggleIcon = ({
  className = "",
  size = "medium",
  variant = "expand",
}: ToggleIconProps) => {
  const { css } = useFela({ size, variant });
  const cx = `${css([
    base,
    expandSizeRule,
  ])} navbar-toggle-icon ${className}`.trim();
  return <span data-testid="navbar-toggle-icon" className={cx} />;
};
