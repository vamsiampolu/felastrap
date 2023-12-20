import { IStyle } from "fela";
import {
  between,
  hasMultipleKeyValuePairs,
  isEmpty,
  isSingleKeyValuePair,
  oneOf,
  toPairs,
} from "../../utils";
import { CSSObject, StyleProps } from "../common";
import { CssProps } from "./Column";
import { getWidth } from "./calc";
import {
  BreakpointRange,
  Breakpoints,
  breakpoints,
  getMinWidth,
  mediaQueryBetween,
  mediaQueryByName,
  sortBreakpoints,
} from "./mediaQuery";
import {
  Order,
  alignMapping,
  alignValues,
  getOrder,
  justifyMapping,
  justifyValues,
  orderValues,
} from "./mapping";

export const base = ({ span, maxCols }: StyleProps<CssProps>) => {
  if (span || maxCols) {
    return {
      flexShrink: 0,
      flexGrow: 0,
      flexBasis: "auto",
    };
  }

  return {
    flexGrow: 1,
    flexShrink: 0,
  };
};

export const colOffset = ({ offset = null, maxCols }: StyleProps<CssProps>) => {
  if (between(1, maxCols || 12, offset ?? 0)) {
    const marginLeft = 100 / offset!;
    return { marginLeft: `${marginLeft}%` };
  }

  return {};
};

export const colWidth = ({ span }: StyleProps<CssProps>) => {
  const width = getWidth(span);
  return width ? { width } : {};
};

export const breakpointColWidth = ({
  sm,
  md,
  lg,
  xl,
  xxl,
}: StyleProps<CssProps>): IStyle => {
  const obj = { sm, md, lg, xl, xxl };

  if (isEmpty(obj)) {
    return {};
  }

  if (isSingleKeyValuePair(obj)) {
    const style: Record<string, string | number | { width: string }> = {};

    for (const breakpoint of Object.keys(obj)) {
      const span = obj[breakpoint as Breakpoints];
      const mediaQuery = mediaQueryByName[breakpoint as Breakpoints];

      const width = getWidth(span);
      if (width) {
        style[mediaQuery] = { width };
      }
    }

    return style;
  }

  if (hasMultipleKeyValuePairs(obj)) {
    const style: Record<string, string | number | { width: string }> = {};

    const sortedBreakpoints = sortBreakpoints(obj);
    const pairs = toPairs(sortedBreakpoints);

    for (const pair of pairs) {
      const [from, to] = pair;
      if (from && to) {
        const width = getWidth(obj[from]);
        const mediaQuery = mediaQueryBetween({ from, to } as BreakpointRange);

        if (width) {
          style[mediaQuery] = { width };
        }
      }
    }
    const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
    const lastWidth = getWidth(obj[lastBreakpoint]);

    if (lastWidth) {
      style[`@media ${getMinWidth(breakpoints[lastBreakpoint])}`] = {
        width: lastWidth,
      };
    }

    return style;
  }

  return {};
};

export const verticalAlign = ({ align }: StyleProps<CssProps>) => {
  if (align && oneOf(alignValues, align)) {
    const alignItems = alignMapping[align];
    return { alignItems };
  }

  return {};
};

export const horizontalAlign = ({ justify }: StyleProps<CssProps>) => {
  if (justify && oneOf(justifyValues, justify)) {
    return { justifyContent: justifyMapping[justify] };
  }

  return {};
};

export const colOrder = ({ order }: StyleProps<CssProps>) => {
  if (order !== null && order !== undefined && oneOf(orderValues, order)) {
    return { order: `${getOrder(order as Order)}` };
  }

  return {};
};

export const gutters = ({ gx = 0, gy = 0 }: StyleProps<CssProps>) => {
  const style: CSSObject = {};

  if (gx) {
    style.paddingLeft = `calc(0.5 * ${gx})`;
    style.paddingRight = `calc(0.5 * ${gx})`;
  }

  if (gy) {
    style.marginTop = gy;
  }

  return style;
};
