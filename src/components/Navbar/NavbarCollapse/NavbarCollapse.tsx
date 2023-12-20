import { useContext, type ReactNode } from "react";
import { CollapseContext, useCollapse } from "../../Collapse";
import { NavbarContext } from "../NavbarContext";
import { Toggle } from "./Toggle";
import { Content } from "./Content";

export const NavbarCollapse = ({ children }: { children: ReactNode }) => {
  const { size = "medium", variant = "expand" } = useContext(NavbarContext);
  const value = useCollapse({ collapsed: false });

  return (
    <CollapseContext.Provider value={value}>
      <Toggle size={size} variant={variant} />
      <Content id="navbar-collapse-content" size={size} variant={variant}>
        {children}
      </Content>
    </CollapseContext.Provider>
  );
};
