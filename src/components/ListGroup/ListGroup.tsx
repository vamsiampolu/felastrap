import { useFela } from "react-fela";
import { ListGroupContext } from "./ListGroupContext";
import type { ComponentPropsWithoutRef } from "react";
import { type CSSProperties } from "fela";
import { type Theme, type StyleProps } from "../common";

export type CustomProps = {
  card: boolean;
  flush: boolean;
  horizontal: boolean;
  numbered: boolean;
};

export type ListGroupProps = ComponentPropsWithoutRef<"ol" | "ul"> &
  Partial<CustomProps>;

const rule = ({
  card = false,
  flush = false,
  horizontal = false,
  numbered = false,
}: StyleProps<ListGroupProps>) => {
  const borderRadiusValue = flush ? 0 : "0.375rem";
  const borderRadius = {
    borderTopLeftRadius: borderRadiusValue,
    borderTopRightRadius: borderRadiusValue,
    borderBottomRightRadius: borderRadiusValue,
    borderBottomLeftRadius: borderRadiusValue,
  };

  const style: CSSProperties = {
    ...borderRadius,
    display: "flex",
    flexDirection: horizontal ? "row" : "column",
    paddingLeft: 0,
    marginBottom: 0,
    borderRadius: 0,
  };

  if (numbered) {
    style.listStyleType = "none";
    style.counterReset = "section";
  }

  if (card) {
    style.borderTop = "inherit";
    style.borderBottom = "inherit";
  }

  return style;
};

export const ListGroup = ({
  children,
  className = "",
  card = false,
  flush = false,
  horizontal = false,
  numbered = false,
  ...other
}: ListGroupProps) => {
  const { css } = useFela<Theme, ListGroupProps>({
    flush,
    horizontal,
    numbered,
  });
  const cx = `${css(rule)} list-group ${className || ""}`.trim();
  const value = { flush, horizontal, numbered, card };

  const Component = numbered ? "ol" : "ul";
  return (
    <ListGroupContext.Provider value={value}>
      <Component data-testid="list-group" className={cx} {...other}>
        {children}
      </Component>
    </ListGroupContext.Provider>
  );
};
