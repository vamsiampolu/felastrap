import { type PropsWithChildren } from "react";
import { CollapseContext, CollapseContextValue } from "./CollapseContext";
import { useCollapse } from "./useCollapse";

export type CollapseProps = PropsWithChildren<{
  isOpen?: boolean;
}>;

export const Collapse = ({
  children,
  isOpen: initOpen = false,
}: CollapseProps) => {
  const {
    toggleCollapse,
    height = 0,
    collapsed,
    isOpen,
    contentRef,
    width = 0,
  } = useCollapse({
    collapsed: !initOpen,
  });

  const value: CollapseContextValue = {
    collapsed,
    isOpen,
    toggleCollapse,
    contentRef,
    height,
    width,
  };

  return (
    <CollapseContext.Provider value={value}>
      {children}
    </CollapseContext.Provider>
  );
};
