import type { IStyle } from "fela";
import type { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { Size } from "../common";

export type PageLinkProps = ComponentPropsWithoutRef<"a"> &
  Partial<{
    size: Size;
    active: boolean;
    disabled: boolean;
    first: boolean;
    last: boolean;
  }>;

const paddingBySize: Record<Size, string> = {
  small: "0.25rem 0.5rem",
  medium: "0.375rem 0.75rem",
  large: "0.75rem 1.5rem",
};

const fontSizeMapping: Record<Size, string> = {
  small: "0.875rem",
  medium: "1rem",
  large: "1.25rem",
};
const borderRadiusBySize: Record<Size, string> = {
  small: "0.25rem",
  medium: "0.375rem",
  large: "0.5rem",
};

const rule = ({ first = false, last = false, size = "medium" }) => {
  const style: IStyle = {
    position: "relative",
    display: "block",
    padding: paddingBySize[size as Size],
    fontSize: fontSizeMapping[size as Size],
    color: "#6ea8fe",
    textDecoration: "none",
    backgroundColor: "#fff",
    border: "1px solid #dee2e6",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    ":focus": {
      zIndex: 3,
      color: "#8bb9fe",
      backgroundColor: "#e9ecef",
      outline: 0,
      boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    },
    ":hover": {
      zIndex: 2,
      color: "#8bb9fe",
      backgroundColor: "#2b3035",
      borderColor: "#dee2e6",
    },
  };

  if (!first) {
    style.marginLeft = "-1px";
  }

  const borderRadius = borderRadiusBySize[size as Size];

  if (first) {
    style.borderTopLeftRadius = borderRadius;
    style.borderBottomLeftRadius = borderRadius;
  }

  if (last) {
    style.borderTopRightRadius = borderRadius;
    style.borderBottomRightRadius = borderRadius;
  }

  return style;
};

const activeRule = ({ active = false }) =>
  active
    ? {
        zIndex: 3,
        color: "#fff",
        backgroundColor: "#0d6efd",
        borderColor: "#0d6efd",
      }
    : {};

const disabledRule = ({ disabled = false }) =>
  disabled
    ? {
        color: "rgba(33, 37, 41, 0.75)",
        pointerEvents: "none",
        backgroundColor: "#e9ecef",
        borderColor: "#dee2e6",
      }
    : {};

export const PageLink = ({
  active = false,
  className = "",
  children,
  disabled = false,
  first = false,
  last = false,
  size = "medium",
  ...other
}: PageLinkProps) => {
  const { css } = useFela({ first, last, active, disabled, size });
  const cx = `${css([rule, activeRule, disabledRule])} ${className}`;
  return (
    <a
      aria-disabled={disabled}
      aria-current={active ? "page" : undefined}
      data-testid="page-link"
      className={cx}
      {...other}
    >
      {children}
    </a>
  );
};
