import { CSSProperties } from "fela";
import { ColorMapping } from "../common";

const baseBorderRadius: CSSProperties = {
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
};

const pillBorderRadius: CSSProperties = {
  borderTopLeftRadius: "50rem",
  borderTopRightRadius: "50rem",
  borderBottomRightRadius: "50rem",
  borderBottomLeftRadius: "50rem",
};

const positionedBorderRadius: CSSProperties = {
  borderTopLeftRadius: "50rem",
  borderTopRightRadius: "50rem",
  borderBottomRightRadius: "50rem",
  borderBottomLeftRadius: "50rem",
};

export const borderRadius = {
  base: baseBorderRadius,
  pill: pillBorderRadius,
  positioned: positionedBorderRadius,
};

export const backgroundColorByVariant = {
  default: "rgba(25, 135, 84, 1)",
  primary: "rgba(13, 110, 253,1)",
  secondary: "rgba(108, 117, 125, 1)",
  success: "rgba(25, 135, 84, 1)",
  info: "rgba(13, 202, 240, 1)",
  warning: "rgba(255, 193, 7, 1)",
  danger: "rgba(220, 53, 69, 1)",
} as ColorMapping;

export const contrastColorByVariant = {
  default: "#fff",
  danger: "#fff",
  info: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  warning: "#000",
} as ColorMapping;
