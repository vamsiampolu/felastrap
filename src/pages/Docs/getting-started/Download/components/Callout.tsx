import { useFela } from "react-fela";
import { ColorMapping, Variant } from "../../../../../components/common";
import { ReactNode } from "react";

const colorByVariant: ColorMapping = {
  default: "inherit",
  danger: "#58151c",
  info: "#055160",
  primary: "#052c65",
  secondary: "#2b2f32",
  success: "#0a3622",
  warning: "#664d03",
};

const backgroundColorByVariant: ColorMapping = {
  default: "#f8f9fa",
  danger: "#f8d7da",
  info: "#cff4fc",
  primary: "#cfe2ff",
  secondary: "#e2e3e5",
  success: "#d1e7dd",
  warning: "#fff3cd",
};

const borderColorByVariant: ColorMapping = {
  default: "#dee2e6",
  danger: "#f1aeb5",
  info: "#9eeaf9",
  primary: "#9ec5fe",
  secondary: "#c4c8cb",
  success: "#a3cfbb",
  warning: "#ffe69c",
};

const variantRule = ({ variant = "default" }) => ({
  color: colorByVariant[variant as Variant],
  backgroundColor: backgroundColorByVariant[variant as Variant],
  borderColor: borderColorByVariant[variant as Variant],
});

const rule = () => ({
  padding: "1.25rem",
  marginTop: "1.25rem",
  marginBottom: "1.25rem",
  color: "inherit",
  backgroundColor: "#f8f9fa",
  borderLeft: "0.25rem solid #dee2e6",
  "> h4": {
    marginBottom: "0.25rem",
  },
  ">:last-child": {
    marginBottom: 0,
  },
  "> .highlight": {
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  "&+.bd-callout": {
    marginTop: "-0.25rem",
  },
});

export type CalloutProps = {
  variant?: Variant;
  children: ReactNode;
};

export const Callout = ({ variant = "default", children }: CalloutProps) => {
  const { css } = useFela({ variant });
  const cx = `${css([rule, variantRule])} bd-callout bd-callout-${variant}`;
  return <div className={cx}>{children}</div>;
};
