import { createContext } from "react";
import { useInteractions } from "@floating-ui/react";

export type GetItemProps = ReturnType<typeof useInteractions>["getItemProps"];
export type HandleSelect = (index: number | null) => void;

export type DropdownContextValue = {
  activeIndex: number | null;
  selectedIndex: number | null;
  getItemProps: GetItemProps;
  handleSelect: HandleSelect;
};

export const DropdownContext = createContext({} as DropdownContextValue);
