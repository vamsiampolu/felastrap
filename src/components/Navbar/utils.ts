import type { Breakpoints } from "../Flex/mediaQuery";

export type NavbarBg = "default" | "dark" | "primary";
export type NavbarSize = "small" | "medium" | "large" | "x-large";

export const sizeBreakpointMapping: Record<NavbarSize, Breakpoints> = {
  small: "sm",
  medium: "md",
  large: "lg",
  "x-large": "xl",
};

export const backgroundColorMapping: Record<NavbarBg, string> = {
  default: "rgba(248, 249, 250, 1)",
  dark: "rgba(33, 37, 41, 1)",
  primary: "rgba(13, 110, 253, 1)",
};
