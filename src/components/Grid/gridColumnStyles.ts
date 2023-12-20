import { CSSProperties, IStyle } from "fela";
import {
  hasMultipleKeyValuePairs,
  isEmpty,
  isSingleKeyValuePair,
  toPairs,
} from "../../utils";
import {
  BreakpointRange,
  Breakpoints,
  breakpoints,
  getMinWidth,
  mediaQueryBetween,
  mediaQueryByName,
  sortBreakpoints,
} from "../Flex/mediaQuery";
import { StyleProps } from "../common";
import { GridColumnProps } from "./types";

export const gridColumnRule = ({ span }: StyleProps<GridColumnProps>) => ({
  gridColumn: `auto/span ${span}`,
});

export const gridStartRule = ({ start }: StyleProps<GridColumnProps>) =>
  ({
    gridColumnStart: start,
  }) as unknown as CSSProperties;

export const breakpointGridColumnRule = ({
  sm,
  md,
  lg,
  xl,
  xxl,
}: StyleProps<GridColumnProps>): IStyle => {
  const obj = { sm, md, lg, xl, xxl };

  if (isEmpty(obj)) {
    return {};
  }

  const style: Record<string, string | number | { gridColumn: string }> = {};

  if (isSingleKeyValuePair(obj)) {
    for (const breakpoint of Object.keys(obj)) {
      const span = obj[breakpoint as Breakpoints];
      const mediaQuery = mediaQueryByName[breakpoint as Breakpoints];

      if (span) {
        const { gridColumn } = gridColumnRule({
          span,
        } as StyleProps<GridColumnProps>);
        style[mediaQuery] = { gridColumn };
      }
    }

    return style;
  }

  if (hasMultipleKeyValuePairs(obj)) {
    const style: Record<string, string | number | { gridColumn: string }> = {};

    const sortedBreakpoints = sortBreakpoints(obj);
    const pairs = toPairs(sortedBreakpoints);

    for (const pair of pairs) {
      const [from, to] = pair;
      if (from && to) {
        const { gridColumn } = gridColumnRule({
          span: obj[from]!,
        } as StyleProps<GridColumnProps>);
        const mediaQuery = mediaQueryBetween({ from, to } as BreakpointRange);

        if (gridColumn) {
          style[mediaQuery] = { gridColumn };
        }
      }
    }

    const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
    const { gridColumn: lastGridColumn } = gridColumnRule({
      span: obj[lastBreakpoint]!,
    } as StyleProps<GridColumnProps>);

    if (lastGridColumn) {
      style[`@media ${getMinWidth(breakpoints[lastBreakpoint])}`] = {
        gridColumn: lastGridColumn,
      };
    }

    return style;
  }

  return {};
};

export const breakpointGridStartRule = ({
  startSm: sm,
  startMd: md,
  startLg: lg,
  startXl: xl,
  startXxl: xxl,
}: StyleProps<GridColumnProps>): IStyle => {
  const obj = { sm, md, lg, xl, xxl };

  if (isEmpty(obj)) {
    return {};
  }
  const style: Record<
    string,
    string | number | { gridColumnStart: string | number | null | undefined }
  > = {};

  if (isSingleKeyValuePair(obj)) {
    for (const breakpoint of Object.keys(obj)) {
      const start = obj[breakpoint as Breakpoints];
      const mediaQuery = mediaQueryByName[breakpoint as Breakpoints];

      if (start) {
        const { gridColumnStart } = gridStartRule({
          start,
        } as StyleProps<GridColumnProps>);
        style[mediaQuery] = { gridColumnStart };
      }
    }

    return style;
  }

  if (hasMultipleKeyValuePairs(obj)) {
    const style: Record<
      string,
      string | number | { gridColumnStart: string | number }
    > = {};

    const sortedBreakpoints = sortBreakpoints(obj);
    const pairs = toPairs(sortedBreakpoints);

    for (const pair of pairs) {
      const [from, to] = pair;
      if (from && to) {
        const { gridColumnStart } = gridStartRule({
          start: obj[from]!,
        } as StyleProps<GridColumnProps>);
        const mediaQuery = mediaQueryBetween({ from, to } as BreakpointRange);

        if (gridColumnStart) {
          style[mediaQuery] = { gridColumnStart };
        }
      }
    }

    const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
    const { gridColumnStart: lastGridColumn } = gridStartRule({
      start: obj[lastBreakpoint]!,
    } as StyleProps<GridColumnProps>);

    if (lastGridColumn) {
      style[`@media ${getMinWidth(breakpoints[lastBreakpoint])}`] = {
        gridColumnStart: lastGridColumn,
      };
    }

    return style;
  }

  return {};
};
