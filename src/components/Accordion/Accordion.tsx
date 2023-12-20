import { useState } from "react";
import { DivProps } from "../common";
import { AccordionContext, AccordionContextValue } from "./AccordionContext";

export type AccordionProps = DivProps & { flush?: boolean };

export const Accordion = ({
  children,
  flush = false,
  ...props
}: AccordionProps) => {
  const [activeKey, setActiveKey] = useState("");

  const value: AccordionContextValue = {
    activeKey,
    setActiveKey,
    flush,
  };

  return (
    <div data-testid="accordion" {...props}>
      <AccordionContext.Provider value={value}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};
