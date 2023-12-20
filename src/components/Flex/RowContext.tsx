import { createContext } from "react";
import type { ColSpan, Gutter } from "./calc";

export type ContextValue = {
  gx: Gutter;
  gy: Gutter;
  maxCols: ColSpan | null;
};

const defaultValue: ContextValue = { gx: 0, gy: 0, maxCols: null };
export const RowContext = createContext(defaultValue);
