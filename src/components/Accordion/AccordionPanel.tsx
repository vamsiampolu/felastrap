import { CSSProperties } from "fela";
import { useFela } from "react-fela";
import type { DivProps, StyleProps } from "../common";
import {
  AccordionPanelContext,
  AccordionPanelContextValue,
} from "./AccordionPanelContext";
import { useContext, useEffect, useRef, useState } from "react";
import { AccordionContext } from "./AccordionContext";
import getPanelKey from "./getPanelKey";

export type CustomProps = {
  first?: boolean;
  last?: boolean;
};

export type AccordionPanelProps = DivProps & CustomProps;

const base = () => ({
  color: "#212529",
  backgroundColor: "#fff",
  border: "1px solid #dee2e6",
  borderTop: 0,
});

const firstRule = ({ first }: StyleProps<AccordionPanelProps>) =>
  first
    ? {
        borderTop: "1px",
        borderTopLeftRadius: "0.375rem",
        borderTopRightRadius: "0.375rem",
      }
    : {};

const lastRule = ({ last }: StyleProps<AccordionPanelProps>) =>
  last
    ? {
        borderBottomRightRadius: "0.375rem",
        borderBottomLeftRadius: "0.375rem",
      }
    : {};

const flushRule = ({
  first,
  last,
  flush,
}: StyleProps<AccordionPanelProps & { flush: boolean }>) => {
  if (!flush) {
    return {};
  }

  const style: CSSProperties = {
    borderRight: 0,
    borderLeft: 0,
    borderRadius: 0,
  };

  if (first) {
    style.borderTop = 0;
  }

  if (last) {
    style.borderBottom = 0;
  }

  return style;
};

export const AccordionPanel = ({
  className = "",
  first = false,
  last = false,
  children,
  ...props
}: AccordionPanelProps) => {
  const panelKey = getPanelKey();
  const ref = useRef(panelKey);

  const {
    flush = false,
    activeKey,
    setActiveKey,
  } = useContext(AccordionContext)!;

  const { css } = useFela({
    first,
    last,
    flush,
  });

  const cx = `${css([
    base,
    firstRule,
    lastRule,
    flushRule,
  ])} accordion-item ${className}`;

  const [isOpen, setOpen] = useState(activeKey === ref.current);

  useEffect(() => {
    if (isOpen) {
      setActiveKey(ref.current);
    }
  }, [isOpen, setActiveKey]);

  useEffect(() => {
    setOpen(ref.current === activeKey);
  }, [activeKey]);

  const value: AccordionPanelContextValue = {
    toggle: () => setOpen((x) => !x),
    isOpen,
    first,
    last,
    flush,
  };

  return (
    <div data-testid="accordion-panel" className={cx} {...props}>
      <AccordionPanelContext.Provider value={value}>
        {children}
      </AccordionPanelContext.Provider>
    </div>
  );
};
