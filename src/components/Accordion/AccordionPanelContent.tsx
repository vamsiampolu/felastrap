import { useFela } from "react-fela";
import { DivProps } from "../common";
import { useContext } from "react";
import { AccordionPanelContext } from "./AccordionPanelContext";
import { CSSProperties } from "fela";

const rule = ({ flush = false, last = false, isOpen = false }) => {
  const style: CSSProperties = {
    padding: "1rem 1.25rem",
    height: isOpen ? "100%" : 0,
  };

  if (flush) {
    style.borderWidth = 0;
  }

  if (last) {
    style.borderBottomRightRadius = "0.375rem";
    style.borderBottomLeftRadius = "0.375rem";
  }

  return style;
};

export const AccordionPanelContent = ({
  className = "",
  children,
  ...props
}: DivProps) => {
  const {
    isOpen = false,
    flush = false,
    last = false,
  } = useContext(AccordionPanelContext)!;
  const { css } = useFela({ flush, last, isOpen });
  const cx = `${css(rule)} accordion-body ${className}`;
  return (
    <div
      data-testid="accordion-panel-content"
      className={cx}
      hidden={!isOpen}
      {...props}
    >
      {children}
    </div>
  );
};
