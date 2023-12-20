import { between, isNumber } from "../../utils";

export type GutterModifier = 0 | 1 | 2 | 3 | 4 | 5;
export type ColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export const calcGutter = (modifier: GutterModifier = 0) => {
  if (modifier === 0) {
    return 0;
  }

  if (modifier === 1) {
    return "0.25rem";
  }

  if (modifier === 2) {
    return "0.5rem";
  }

  if (modifier === 3) {
    return "1rem";
  }

  if (modifier === 4) {
    return "1.5rem";
  }

  if (modifier === 5) {
    return "3rem";
  }

  return 0;
};

export const calcWidth = (span: ColSpan = 1, maxCols: number = 12) => {
  return (100 / maxCols) * span;
};

export const getWidth = (
  span: "auto" | ColSpan | null | undefined,
  maxCols = 12,
): string | null => {
  let width: string | null = null;

  if (span && span === "auto") {
    width = "auto";
  }

  if (span && isNumber(span) && between(1, maxCols, span)) {
    width = `${calcWidth(span, maxCols)}% !important`;
  }

  return width;
};

export type Gutter = ReturnType<typeof calcGutter>;
export type Width = ReturnType<typeof calcWidth>;
