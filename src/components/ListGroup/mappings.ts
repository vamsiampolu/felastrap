import type { ColorMapping } from "../common";

export const listGroupItem: Record<string, ColorMapping> = {
  colorByVariant: {
    default: "#212529",
    primary: "#052c65",
    secondary: "#2b2f32",
    success: "#0a3622",
    info: "#055160",
    warning: "#664d03",
    danger: "#58151c",
  },
  backgroundColorByVariant: {
    default: "#fff",
    primary: "#cfe2ff",
    secondary: "#e2e3e5",
    success: "#d1e7dd",
    info: "#cff4fc",
    warning: "#fff3cd",
    danger: "#f8d7da",
  },
  borderColorByVariant: {
    default: "#dee2e6",
    primary: "#9ec5fe",
    secondary: "#c4c8cb",
    success: "#a3cfbb",
    info: "#9eeaf9",
    warning: "#ffe69c",
    danger: "#f1aeb5",
  },
};

export const listGroupItemAction: Record<string, ColorMapping> = {
  backgroundColorByVariant: {
    default: "#f8f9fa",
    primary: "#031633",
    secondary: "#161719",
    success: "#051b11",
    info: "#032830",
    warning: "#332701",
    danger: "#2c0b0e",
  },
};
