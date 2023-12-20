import { useFela } from "react-fela";
import { Content as CollapseContent } from "../../Collapse";
import type { CollapseContentProps } from "../../Collapse/Content";
import { mediaQueryByName } from "../../Flex/mediaQuery";
import { NavbarSize, sizeBreakpointMapping } from "../utils";
import { NavbarVariant } from "../Navbar";
import { StyleProps } from "../../common";

const rule = () => ({
  flexBasis: "100%",
  flexGrow: 1,
  alignItems: "center",
});

const expandSizeRule = ({ size, variant }: StyleProps<ContentProps>) => {
  if (variant === "expand") {
    const breakpoint = sizeBreakpointMapping[size as NavbarSize];
    return {
      [mediaQueryByName[breakpoint]]: {
        display: "flex !important",
        flexBasis: "auto",
        flexGrow: 1,
        alignItems: "center",
      },
    };
  }

  return {};
};

export type ContentProps = CollapseContentProps & {
  size?: NavbarSize;
  variant?: NavbarVariant;
};

export const Content = ({
  className = "",
  size = "medium",
  variant = "expand",
  ...props
}: ContentProps) => {
  const { css } = useFela({ size, variant });
  const cx = `${css([
    rule,
    expandSizeRule,
  ])} navbar-collapse ${className}`.trim();
  return <CollapseContent className={cx} {...props} />;
};
