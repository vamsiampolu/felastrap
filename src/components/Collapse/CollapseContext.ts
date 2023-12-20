import { MutableRefObject, createContext } from "react";

export type CollapseContextValue = {
  collapsed: boolean;
  isOpen: boolean;
  toggleCollapse: () => void;
  contentRef: MutableRefObject<HTMLDivElement | null> | null;
  height?: undefined | string | number | null;
  width?: undefined | string | number | null;
};

export const CollapseContext = createContext<CollapseContextValue>({
  collapsed: false,
  isOpen: true,
  toggleCollapse: () => undefined,
  contentRef: null,
  height: 0,
  width: 0,
});
