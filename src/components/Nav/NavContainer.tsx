import type { CSSProperties } from "fela";
import type { ElementType } from "react";
import { useFela } from "react-fela";
import type { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import type { NavVariant, StyleProps } from "../common";
import { isTabs, isUnderline, isVertical } from "./utils";

export type CustomNavContainerProps = Partial<{
  card: boolean;
  center: boolean;
  fill: boolean;
  justify: boolean;
  variant: NavVariant;
}>;

export type NavContainerProps<C extends ElementType> =
  PolymorphicComponentPropsWithoutRef<C, CustomNavContainerProps>;

const rule = ({
  center = false,
  variant = "default",
}: StyleProps<CustomNavContainerProps>) => {
  const style: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: 0,
    marginBottom: 0,
    listStyle: "none",
  };

  if (center) {
    style.justifyContent = "center";
  } else if (isVertical({ variant })) {
    style.flexDirection = "column";
  }

  if (isUnderline({ variant })) {
    style.gap = "1rem";
  }

  if (isTabs({ variant })) {
    style.borderBottom = "1px solid #dee2e6";
  }

  return style;
};

export const NavContainer = <C extends ElementType = "ul">({
  className,
  center = false,
  variant = "default",
  as,
  children,
  ...other
}: NavContainerProps<C>) => {
  const { css } = useFela({ center, variant });
  const cx = `${css([rule])} nav-container ${className || ""}`;
  const Component = as || "ul";
  return (
    <Component data-testid="nav-container" className={cx} {...other}>
      {children}
    </Component>
  );
};
