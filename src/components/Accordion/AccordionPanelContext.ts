import { createContext } from "react";
export type AccordionPanelContextValue = {
  first?: boolean;
  last?: boolean;
  isOpen?: boolean;
  flush?: boolean;
  toggle?: () => void;
};

export const AccordionPanelContext = createContext<
  AccordionPanelContextValue | undefined
>(undefined);
