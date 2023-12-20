import { type SetStateAction, type Dispatch, createContext } from "react";

export type AccordionContextValue =
  | {
      activeKey: string;
      flush: boolean;
      setActiveKey: Dispatch<SetStateAction<string>>;
    }
  | undefined;

export const AccordionContext = createContext<AccordionContextValue>(undefined);
