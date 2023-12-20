import type { ColorMapping, Variant } from "../common";

export const backgroundColorByVariant: ColorMapping = {
  default: "#fff",
  primary: "#cfe2ff",
  secondary: "#e2e3e5",
  success: "#d1e7dd",
  info: "#cff4fc",
  warning: "#fff3cd",
  danger: "#f8d7da",
};

export const stripedBackgroundColorByVariant: ColorMapping = {
  default: "rgba(0, 0, 0, 0.05)",
  primary: "rgba(197, 215, 242, 0.05)",
  secondary: "rgba(215, 216, 218, 0.05)",
  success: "rgba(199, 219, 210, 0.05)",
  info: "rgba(197, 232, 239, 0.05)",
  warning: "rgba(242, 231, 195, 0.05)",
  danger: "rgb(236, 204, 207, 0.05)",
};

export const borderColorByVariant: ColorMapping = {
  default: "#dee2e6",
  primary: "#a6b5cc",
  secondary: "#b5b6b7",
  success: "#a7b9b1",
  info: "#a6c3ca",
  warning: "#ccc2a4",
  danger: "#c6acae",
};

/*
 --bs-table-hover-bg: #bfd1ec;
  --bs-table-hover-color: #000;
*/

export const hoveredBackgroundColorByVariant: ColorMapping = {
  default: " rgba(0, 0, 0, 0.075)",
  primary: "rgba(191, 209, 236, 0.075)",
  secondary: "rgba(209, 210, 212, 0.075)",
  success: "rgba(193, 214, 204, 0.075)",
  info: "rgba(191, 226, 233, 0.075)",
  warning: "rgba(236, 225, 190, 0.075)",
  danger: "rgba(229, 199, 202, 0.075)",
};

export const activeBackgroundColorByVariant = {
  default: "rgba(0, 0, 0, 0.1)",
  primary: "rgba(186, 203, 230, 0.1)", // #bacbe6',
  secondary: "rgba(186, 203, 230, 0.1)",
  success: "rgba(188, 208, 199, 0.1)",
  info: "rgba(186, 220, 227, 0.1)",
  warning: "rgba(230, 219, 185, 0.1)",
  danger: "rgba(223, 194, 196, 0.1)",
};

export const variantRule = ({
  variant = "default",
  exclude = false,
  striped = false,
  hover = false,
}) =>
  exclude || hover
    ? {
        color: "#000",
        backgroundColor: backgroundColorByVariant.default,
        borderColor: borderColorByVariant.default,
      }
    : {
        color: "#000",
        borderColor: borderColorByVariant[variant as Variant],
        backgroundColor: striped
          ? stripedBackgroundColorByVariant[variant as Variant]
          : backgroundColorByVariant[variant as Variant],
      };
