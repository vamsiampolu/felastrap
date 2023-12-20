import { ElementType } from "react";
import { useFela } from "react-fela";
import { PolymorphicComponentPropsWithRef } from "../../polymorphicComponentProps";
import { Link } from "../Link/Link";
import type { StyleProps, Theme, Variant } from "../common";
import { listGroupItemAction } from "./mappings";

export type CustomProps = {
  active?: boolean;
  variant?: Variant;
};

export type ListGroupItemActionProps<T extends ElementType> =
  PolymorphicComponentPropsWithRef<T, CustomProps>;

const { backgroundColorByVariant } = listGroupItemAction;

const rule = ({
  variant = "default",
  active = false,
}: StyleProps<CustomProps>) => {
  return {
    width: "100%",
    color: active ? "#212529" : "rgba(33, 37, 41, 0.75)",
    textAlign: "inherit",
    ":active": {
      color: "#212529",
      backgroundColor: backgroundColorByVariant[variant],
    },
    ":focus": {
      zIndex: 1,
      color: "#000",
      textDecoration: "none",
      backgroundColor: backgroundColorByVariant[variant],
    },
    ":hover": {
      zIndex: 1,
      color: "#000",
      textDecoration: "none",
      backgroundColor: backgroundColorByVariant[variant],
    },
  };
};

export const ListGroupItemAction = <T extends ElementType>({
  active = false,
  as,
  children,
  className,
  variant = "default",
  ...other
}: ListGroupItemActionProps<T>) => {
  const { css } = useFela<Theme, CustomProps>({ variant, active });
  const Component = as || Link;
  const cx = `${css(rule)} list-group-item-action ${className || ""}`.trim();
  return (
    <Component
      data-testid="list-group-item-action"
      className={cx}
      active={active ? "active" : ""}
      {...other}
    >
      {children}
    </Component>
  );
};
