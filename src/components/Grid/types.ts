import { ColSpan } from "../Flex/calc";
import { Breakpoints } from "../Flex/mediaQuery";
import { DivProps } from "../common";

export type GridProps = DivProps & {
  rows?: number;
  columns?: number;
  gap?: string;
};

export type StartBreakpoints = `start${Capitalize<Breakpoints>}`;

export type GridColumnProps = DivProps & {
  span?: ColSpan;
  start?: Exclude<ColSpan, 12> | null;
} & Partial<{ [key in Breakpoints]: ColSpan | null }> &
  Partial<{
    [key in StartBreakpoints]: Exclude<ColSpan, 12> | null;
  }>;
