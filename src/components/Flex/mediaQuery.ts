import type { CSSObject } from "fela";
import { math, stripUnit } from "polished";
import { sortUsingMapping } from "../../utils";
import { ExcludeFrom } from "../common";

export type Breakpoints = "sm" | "md" | "lg" | "xl" | "xxl";

export type BreakpointRange = {
  [K in Breakpoints]: { from: K; to: ExcludeFrom<Breakpoints, K> };
}[Breakpoints];

export const createMediaQuery = (minWidth: string): string =>
  `@media (min-width: ${minWidth})`;

export const breakpoints: Record<Breakpoints, string> = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1320px",
};

export const mediaQueryByName = Object.entries(breakpoints).reduce(
  (acc, [name, minWidth]) => ({
    ...acc,
    [name]: createMediaQuery(minWidth),
  }),
  {} as Record<Breakpoints, string>,
);

export const mediaQueries = Object.values(mediaQueryByName);

export const createMediaQueryReducer = (
  style: Record<string, string | number>,
) => {
  const mediaQueryReducer = (acc: CSSObject, mediaQuery: string) => ({
    ...acc,
    [mediaQuery]: style,
  });

  return mediaQueryReducer;
};

export const sortBreakpoints = (input: Record<Breakpoints, unknown>) =>
  sortUsingMapping<Breakpoints>(input, breakpoints);

export const getMinWidth = (width: string) => `(min-width: ${width})`;
export const getMaxWidth = (width: string) =>
  `(max-width: ${math(`${width} - 0.02px`)})`;

/**
 * @description Get a media query that defines the width starting at the smaller of `from` and `to`
 * and ends just before  the larger of the two values.
 *
 * @param {BreakpointRange} breakpointRange A range of breakpoints starting at `from` and `ending` at to.
 * @property {Breakpoints} from The breakpoint to be used for `min-width`.
 * @property {Breakpoints} to The breakpoint to be used for max-width. (cannot be same as `from`).
 * @returns {string} A media query for all widths between `from` and `to - 0.02px`
 */
export const mediaQueryBetween = ({ from, to }: BreakpointRange) => {
  if (from === to) {
    throw new Error(
      `The breakpoint for min-width: ${from} and max-width: ${to} cannot be the same`,
    );
  }

  let fromWidth = breakpoints[from];
  let toWidth = breakpoints[to];

  if (stripUnit(fromWidth) > stripUnit(toWidth)) {
    [fromWidth, toWidth] = [toWidth, fromWidth];
  }

  const minWidth = getMinWidth(fromWidth);
  const maxWidth = getMaxWidth(toWidth);
  return `@media ${minWidth} and ${maxWidth}`;
};
