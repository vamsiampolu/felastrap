import { useFela } from "react-fela";
import { Button, ButtonProps } from "../../../components/Button";
import { ElementType } from "react";

const colorByVariant: Record<BtnVariant, string> = {
  accent: "#ffe484",
  default: "#212529",
  primary: "#fff !important",
  light: "#6c757d",
};

const borderColorByVariant: Record<BtnVariant, string> = {
  accent: "#ffe484",
  default: "transparent",
  light: "#dee2e6",
  primary: "#712cf9",
};

const backgroundColorByVariant: Record<BtnVariant, string> = {
  accent: "transparent",
  default: "transparent",
  light: "transparent",
  primary: "#712cf9",
};

const activeColorByVariant = {
  accent: "#212529",
  default: "#333",
  light: "#000",
  primary: "#6528e0",
};

const activeBackgroundColorByVariant = {
  accent: "#ffe484",
  default: "#e6e6e6",
  primary: "#5a23c8",
  light: "#fff",
};

const activeBorderColorByVariant = {
  accent: "#ffe484",
  default: "#adadad",
  light: "#9461fb",
  primary: "#5a23c8",
};

const hoverColorByVariant = {
  default: "#333",
  accent: "#212529",
  light: "#9461fb",
  primary: "#6528e0",
};

const hoverBackgroundColorByVariant = {
  default: "#e6e6e6",
  accent: "#ffe484",
  light: "#fff",
  primary: "#6528e0",
};

const hoverBorderColorByVariant = {
  default: "#adadad",
  accent: "#ffe484",
  light: "#9461fb",
  primary: "#6528e0",
};

const focusBoxShadowByVariant = {
  accent: "0 0 0 0.25rem rgba(255,228,132, 0.5)",
  default: "0 0 0 0.25rem rgba(0, 0, 0, 0.125)",
  light: "0 0 0 0.25rem rgba(112.520718,44.062154,249.437846, 0.5)",
  primary: "0 0 0 0.25rem rgba(112.520718,44.062154,249.437846, 0.5)",
};

const baseRule = ({ size = "medium" }) => ({
  fontSize: "1rem",
  fontWeight: 600,
  padding: size === "medium" ? "0.375rem 0.75rem" : ".8125rem 2rem",
  borderRadius: size === "medium" ? "0.375rem" : "0.5rem",
});

const variantRule = ({ variant = "default" }) => ({
  color: colorByVariant[variant as BtnVariant],
  backgroundColor: backgroundColorByVariant[variant as BtnVariant],
  borderColor: borderColorByVariant[variant as BtnVariant],
  ":active": {
    color: activeColorByVariant[variant as BtnVariant],
    backgroundColor: activeBackgroundColorByVariant[variant as BtnVariant],
    borderColor: activeBorderColorByVariant[variant as BtnVariant],
  },
  ":focus-visible": {
    color: hoverColorByVariant[variant as BtnVariant],
    backgroundColor: hoverBackgroundColorByVariant[variant as BtnVariant],
    borderColor: hoverBorderColorByVariant[variant as BtnVariant],
    outline: 0,
    boxShadow: focusBoxShadowByVariant[variant as BtnVariant],
  },
  ":hover": {
    color: hoverColorByVariant[variant as BtnVariant],
    backgroundColor: hoverBackgroundColorByVariant[variant as BtnVariant],
    borderColor: hoverBorderColorByVariant[variant as BtnVariant],
  },
});

export type BtnSize = "medium" | "Large";
export type BtnVariant = "default" | "primary" | "accent" | "light";
export type ButtonLinkProps<T extends ElementType> = Omit<
  ButtonProps<T>,
  "size" | "variant"
> & {
  size?: BtnSize;
  variant?: BtnVariant;
  href?: string;
};

export const ButtonLink = <T extends ElementType = "a">({
  className,
  children,
  variant = "default",
  as,
  size = "medium",
  ...props
}: ButtonLinkProps<T>) => {
  const { css } = useFela({ size, variant });
  const cx = `${css([baseRule, variantRule])} btn-link ${className}`.trim();
  return (
    <Button
      as={as || ("a" as ElementType)}
      className={cx}
      {...(props as ButtonProps<T>)}
    >
      {children}
    </Button>
  );
};
