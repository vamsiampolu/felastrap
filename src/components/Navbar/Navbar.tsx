import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { Container } from "../Flex";
import { mediaQueryByName } from "../Flex/mediaQuery";
import { NavbarContext } from "./NavbarContext";
import {
  NavbarBg,
  NavbarSize,
  backgroundColorMapping,
  sizeBreakpointMapping,
} from "./utils";
import { StyleProps } from "../common";

export type NavbarVariant = "expand" | "fixed" | "sticky";
export type NavbarPosition = "top" | "bottom";

const fixedRule = ({ variant = "expand", position = "top" }) => {
  let style = {};
  if (variant === "fixed") {
    style = {
      position: "fixed",
      right: 0,
      left: 0,
      zIndex: 1030,
      [position]: 0,
    };
  }

  return style;
};

const base = () => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0.5rem 0",
});

const containerRule = () => ({
  display: "flex",
  flexWrap: "inherit",
  alignItems: "center",
  justifyContent: "space-between",
});

const bgRule = ({ backgroundColor }: StyleProps<NavbarProps>) => ({
  backgroundColor: backgroundColorMapping[backgroundColor as NavbarBg],
});

const expandSizeRule = ({ variant, size }: StyleProps<NavbarProps>) => {
  if (variant === "expand") {
    const breakpoint = sizeBreakpointMapping[size as NavbarSize];

    return {
      [mediaQueryByName[breakpoint]]: {
        flexWrap: "nowrap",
        justifyContent: "flex-start",
      },
    };
  }

  return {};
};

export type NavbarProps = ComponentPropsWithoutRef<"nav"> & {
  backgroundColor?: NavbarBg;
  size?: NavbarSize;
  position?: NavbarPosition;
  variant?: NavbarVariant;
};

export const Wrapper = ({
  className = "",
  children,
  variant = "expand",
  position = "top",
  size = "medium",
  backgroundColor = "default",
}: NavbarProps) => {
  const { css } = useFela({ backgroundColor, size, variant, position });
  const cx = `${css([
    base,
    bgRule,
    expandSizeRule,
    fixedRule,
  ])} ${className} navbar`;
  const value = { size, variant, position };

  return (
    <nav data-testid="navbar" className={cx}>
      <Container className={`${css(containerRule)} navbar-container`}>
        <NavbarContext.Provider value={value}>
          {children}
        </NavbarContext.Provider>
      </Container>
    </nav>
  );
};
