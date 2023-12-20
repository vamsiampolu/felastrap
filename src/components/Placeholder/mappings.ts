import type { ColorMapping } from "../common";
import type { PlaceholderSize } from "./types";

export const minHeightBySize: Record<PlaceholderSize, string> = {
  xsmall: "0.6em",
  small: "0.8em",
  medium: "1em",
  large: "1.2em",
};

export const backgroundColorByVariant: ColorMapping = {
  default: "currentcolor",
  danger: "#dc3545",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};
