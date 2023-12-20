import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { ListGroupContext, ListGroupContextValue } from "./ListGroupContext";
import type { StyleProps, Variant } from "../common";
import { listGroupItem } from "./mappings";
import { CSSProperties } from "fela";

const { borderColorByVariant, colorByVariant, backgroundColorByVariant } =
  listGroupItem;

export type CustomProps = {
  active: boolean;
  disabled: boolean;
  first: boolean;
  last: boolean;
  variant: Variant;
};

export type ListItemProps = ComponentPropsWithoutRef<"li"> &
  Partial<CustomProps>;

export type CssProps = ListItemProps & Partial<ListGroupContextValue>;

const variantRule = ({ variant = "default" }: StyleProps<CssProps>) => {
  const borderColor = borderColorByVariant[variant];
  const color = colorByVariant[variant];
  const backgroundColor = backgroundColorByVariant[variant];

  return {
    backgroundColor,
    borderColor,
    color,
    ":active": {
      color: backgroundColor,
      backgroundColor: color,
      borderColor: color,
    },
  };
};

const base = ({
  numbered = false,
  first = false,
  last = false,
  active = false,
}: StyleProps<CssProps>) => {
  const border = {
    borderWidth: "1px",
    borderTopWidth: !first ? 0 : "1px",
    borderColor: active ? "#0d6efd" : "#dee2e6",
    borderStyle: "solid",
  };

  const padding = {
    paddingTop: "0.5rem",
    paddingLeft: "1rem",
    paddingBottom: "0.5rem",
    paddingRight: "1rem",
  };

  const before = numbered
    ? {
        content: `counters(section, '.') '. '`,
        counterIncrement: "section",
      }
    : null;

  const borderRadius = {
    borderTopLeftRadius: first ? "inherit" : "0",
    borderTopRightRadius: first ? "inherit" : "0",
    borderBottomLeftRadius: last ? "inherit" : "0",
    borderBottomRightRadius: last ? "inherit" : "0",
  };

  const style = {
    ...border,
    ...padding,
    ...borderRadius,
    zIndex: active ? 2 : "auto",
    color: active ? "#fff" : "#212529",
    backgroundColor: active ? "#0d6efd" : "#fff",
    position: "relative",
    display: "block",
    textDecoration: "none",
    width: "100%",
    "::before": before,
    ":disabled": {
      color: "rgba(33, 37, 41, 0.75)",
      pointerEvents: "none",
    },
  } as CSSProperties;

  if (active) {
    style.zIndex = 2;
  }

  return style;
};

const flushRule = ({ flush = false, last = false }: StyleProps<CssProps>) => {
  if (!flush) {
    return {} as CSSProperties;
  }

  const style: CSSProperties = {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: "1px",
  };

  if (last) {
    style.borderBottomWidth = 0;
  }

  return style;
};

const horizontalRule = ({
  horizontal = false,
  first = false,
  last = false,
  active = false,
}: StyleProps<CssProps>) => {
  const isMiddleItem = !(first || last);
  const isOnlyItem = first && last;

  const style: CSSProperties = {};

  if (!horizontal) {
    return style;
  }

  if (active) {
    style.marginTop = 0;
  }

  if (isOnlyItem) {
    return style;
  }

  if (first) {
    style.borderTopRightRadius = 0;
    style.borderBottomLeftRadius = "0.375rem";
  }

  if (last) {
    style.borderTopRightRadius = "0.375rem";
    style.borderBottomLeftRadius = 0;
  }

  if (isMiddleItem) {
    style.borderTopWidth = "1px";
    style.borderLeftWidth = 0;
  }

  if (isMiddleItem && active) {
    style.marginLeft = 'calc(-1 * "1px")';
    style.borderLeftWidth = "1px";
  }

  return style;
};

const cardRule = ({
  card = false,
  first = false,
  last = false,
}: StyleProps<CssProps>) => {
  const style: CSSProperties = {};
  if (!card) {
    return style;
  }

  const borderRadius = "calc(0.375rem - 1px)";
  if (first) {
    style.borderTopWidth = 0;
    style.borderTopLeftRadius = borderRadius;
    style.borderTopRightRadius = borderRadius;
  }

  if (last) {
    style.borderBottomWidth = 0;
    style.borderBottomRightRadius = borderRadius;
    style.borderBottomLeftRadius = borderRadius;
  }

  return style;
};

export const ListGroupItem = ({
  children,
  className = "",
  variant = "default",
  first = false,
  last = false,
  active = false,
  disabled = false,
  ...other
}: ListItemProps) => {
  const { card, flush, numbered, horizontal } = useContext(ListGroupContext);

  const { css } = useFela({
    card,
    disabled,
    flush,
    numbered,
    horizontal,
    first,
    last,
    active,
    variant,
  });

  const cx = `${css([
    base,
    horizontalRule,
    flushRule,
    variantRule,
    cardRule,
  ])} list-group-item ${className || ""}`.trim();

  return (
    <li data-testid="list-group-item" className={cx} {...other}>
      {children}
    </li>
  );
};
