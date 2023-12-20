import { createContext } from "react";
import type { NavbarPosition, NavbarVariant } from "./Navbar";
import { NavbarSize } from "./utils";

export type NavbarContextProps = {
  size: NavbarSize;
  variant: NavbarVariant;
  position: NavbarPosition;
};

export const NavbarContext = createContext<NavbarContextProps>({
  size: "medium",
  variant: "expand",
  position: "top",
});
