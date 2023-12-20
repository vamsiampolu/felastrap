import type { CSSProperties, IStyle } from "fela";
import { ElementType, forwardRef } from "react";
import { useFela } from "react-fela";
import {
  PolymorphicComponentPropsWithoutRef,
  PolymorphicRef,
} from "../../polymorphicComponentProps";
import type { NavVariant, StyleProps, Theme } from "../common";
import { isPills, isTabs, isUnderline } from "./utils";

export type CustomProps = Partial<{
  active: boolean;
  card: boolean;
  disabled: boolean;
  fill: boolean;
  justified: boolean;
  variant: NavVariant;
}>;

export type NavLinkProps<C extends ElementType = "a"> =
  PolymorphicComponentPropsWithoutRef<C, CustomProps>;

const none = "none";

const link = () => ({
  display: "block",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  fontWeight: 400,
  color: "#0d6efd",
  textDecoration: none,
  background: none,
  border: 0,
  transition:
    "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: none,
  },
  ":hover": {
    color: "#0a58ca",
  },
  ":focus": {
    color: "#0a58ca",
  },
  ":focus-visible": {
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
});

const disabledRule = ({ disabled }: StyleProps<CustomProps>) => {
  if (!disabled) {
    return {};
  }

  return {
    color: "rgba(33, 37, 41, 0.75)",
    pointerEvents: none,
    cursor: "default",
  };
};

const tabsRule = ({
  variant = "default",
  active = false,
}: StyleProps<CustomProps>) => {
  if (!isTabs({ variant })) {
    return {};
  }

  const style: IStyle = {
    marginBottom: "-1px",
    border: "1px solid transparent",
    borderTopLeftRadius: "0.375rem",
    borderTopRightRadius: "0.375rem",
    ":focus": {
      borderColor: "#e9ecef #e9ecef #dee2e6",
    },
    ":hover": {
      borderColor: "#e9ecef #e9ecef #dee2e6",
    },
  };

  if (active) {
    style.color = "#000";
    style.backgroundColor = "#fff";
    style.borderColor = "#dee2e6 #dee2e6 #fff";
  }

  return style;
};

const cardTabsRule = ({ card = false, variant = "default" }) => {
  if (!card || variant !== "tabs") {
    return {};
  }

  return {
    marginRight: "calc(-0.5 * 1rem)",
    marginBottom: "calc(-1 * 0.5rem)",
    marginLeft: "calc(-0.5 * 1rem)",
    borderBottom: 0,
  };
};

const cardPillsRule = ({ card = false, variant = "default" }) => {
  if (!card || variant !== "pills") {
    return {};
  }

  return {
    marginRight: "calc(-0.5 * 1rem)",
    marginLeft: "calc(-0.5 * 1rem)",
  };
};

const pillsRule = ({
  variant = "default",
  active = false,
}: StyleProps<CustomProps>) => {
  if (!isPills({ variant })) {
    return {};
  }

  const style: CSSProperties = {
    borderRadius: "0.375rem",
  };

  if (active) {
    style.color = "#fff !important";
    style.backgroundColor = "#0d6efd !important";
  }

  return style;
};

const underlineRule = ({
  variant = "default",
  active = false,
}: StyleProps<CustomProps>) => {
  if (!isUnderline({ variant })) {
    return {};
  }

  const borderBottomColor = active ? "currentcolor" : "transparent";

  const style: IStyle = {
    paddingRight: 0,
    paddingLeft: 0,
    borderBottom: `0.125rem solid ${borderBottomColor}`,
    ":focus": {
      borderBottomColor: "currentcolor",
    },
    ":hover": {
      borderBottomColor: "currentcolor",
    },
  };

  if (active) {
    style.fontWeight = 700;
    style.color = "#000";
  }

  return style;
};

const fillRule = ({ fill = false }: StyleProps<CustomProps>) =>
  fill
    ? {
        width: "100%",
        flex: "1 1 auto",
        textAlign: "center",
      }
    : {};

const justifiedRule = ({ justified = false }: StyleProps<CustomProps>) =>
  justified
    ? {
        flexBasis: 0,
        flexGrow: 1,
        textAlign: "center",
        width: "100%",
      }
    : {};

export const NavLink = forwardRef(
  <C extends ElementType = "a">(
    {
      active = false,
      as,
      card,
      children,
      className,
      disabled = false,
      fill = false,
      href,
      justified = false,
      rel,
      target,
      variant = "default",
      ...other
    }: NavLinkProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { css } = useFela<Theme, CustomProps>({
      active,
      card,
      disabled,
      fill,
      justified,
      variant,
    });

    const cx = `${css([
      link,
      tabsRule,
      pillsRule,
      underlineRule,
      fillRule,
      justifiedRule,
      disabledRule,
      cardTabsRule,
      cardPillsRule,
    ])} nav-link ${className || ""}`;

    const Component = as ?? "a";
    const isLink = !as || as === "a";

    return (
      <Component
        data-testid="nav-link"
        ref={ref}
        rel={isLink ? rel : undefined}
        href={isLink ? href : undefined}
        target={isLink ? target : undefined}
        className={cx}
        {...other}
      >
        {children}
      </Component>
    );
  },
);

NavLink.displayName = "NavLink";
