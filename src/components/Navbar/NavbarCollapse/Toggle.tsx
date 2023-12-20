import { useContext } from "react";
import { Button } from "../../Button";
import { ToggleIcon } from "./ToggleIcon";
import { CollapseContext } from "../../Collapse";
import { useFela } from "react-fela";
import { NavbarVariant } from "../Navbar";
import { NavbarSize, sizeBreakpointMapping } from "../utils";
import { mediaQueryByName } from "../../Flex/mediaQuery";
import { StyleProps } from "../../common";

const rule = () => ({
  padding: "0.25rem 0.75rem",
  fontSize: "1.25rem",
  lineHeight: 1,
  color: "rgba(0, 0, 0, 0.65)",
  backgroundColor: "transparent",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "0.375rem",
  transition: "box-shadow 0.15s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":hover": {
    textDecoration: "none",
  },
  ":focus": {
    textDecoration: "none",
    outline: 0,
    boxShadow: "0 0 0 0.25rem",
  },
});

const expandSizeRule = ({ size, variant }: StyleProps<ToggleProps>) => {
  if (variant === "expand") {
    const breakpoint = sizeBreakpointMapping[size as NavbarSize];
    return {
      [mediaQueryByName[breakpoint]]: { display: "none !important" },
    };
  }

  return {};
};

export type ToggleProps = {
  size?: NavbarSize;
  label?: string;
  variant?: NavbarVariant;
};

export const Toggle = ({
  size = "medium",
  variant = "expand",
  label = "Toggle Navigation",
}: ToggleProps) => {
  const ctx = useContext(CollapseContext);
  const { css } = useFela({ size, variant });
  const { isOpen: expanded, toggleCollapse } = ctx;
  const cx = `${css([rule, expandSizeRule])} navbar-toggler`;
  return (
    <Button
      data-testid="navbar-toggle"
      onClick={toggleCollapse}
      className={cx}
      type="button"
      aria-controls="navbarScroll"
      aria-expanded={expanded}
      aria-label={label}
    >
      <ToggleIcon size={size} variant={variant} />
    </Button>
  );
};
