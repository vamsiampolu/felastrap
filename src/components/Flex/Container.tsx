import { useFela } from "react-fela";
import { createMediaQuery, breakpoints, Breakpoints } from "./mediaQuery";
import { DivProps, Theme } from "../common";
import { IStyle } from "fela";

export type ContainerProps = DivProps & {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
};

const rule = () => ({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  width: "100%",
});

const maxWidthByName: Record<Breakpoints, string> = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1140px",
  xxl: "1400px",
};

const mediaQueryReducer = (acc: IStyle, [name, minWidth]: [string, string]) => {
  const maxWidth = maxWidthByName[name as Breakpoints];
  const mediaQuery = createMediaQuery(minWidth);
  return {
    ...acc,
    [mediaQuery]: { maxWidth },
  };
};

/**
 * @description Gets a mapping of breakpoints including and above a given breakpoint and the min-width
 * for applying them. Only one of the breakpoints must be set to true.
 *
 * @param minBreakpoint
 * @property {boolean} sm Restrict to breakpoint sm and up
 * @property {boolean} md Restrict to breakpoint md and up
 * @property {boolean} lg Restrict to breakpoint lg and up
 * @property {boolean} xl Restrict to breakpoint xl and up
 * @property {boolean} xxl Restrict to breakpoint xxl and up
 *
 * @returns {Partial<Record<Breakpoints, string>>} A r
 */
const getRestrictedBreakpoints = ({
  sm,
  md,
  lg,
  xl,
  xxl,
}: ContainerProps): Partial<Record<Breakpoints, string>> => {
  let restrictedBreakpoints: Partial<Record<Breakpoints, string>> = {};
  if (sm) {
    restrictedBreakpoints = {
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      xxl: breakpoints.xxl,
    };
  }

  if (md) {
    restrictedBreakpoints = {
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      xxl: breakpoints.xxl,
    };
  }

  if (lg) {
    restrictedBreakpoints = {
      lg: breakpoints.lg,
      xl: breakpoints.xl,
      xxl: breakpoints.xxl,
    };
  }

  if (xl) {
    restrictedBreakpoints = {
      xl: breakpoints.xl,
      xxl: breakpoints.xxl,
    };
  }

  if (xxl) {
    restrictedBreakpoints = { xxl: breakpoints.xxl };
  }

  return restrictedBreakpoints;
};

function none<T>(arr: T[]) {
  return arr.every((item: T) => !item);
}

function exactlyOne<T>(arr: T[]) {
  const trueValues = arr.filter((item: T) => item === true);
  return trueValues.length === 1;
}

const mediaQueriesRule = ({
  sm = false,
  md = false,
  lg = false,
  xl = false,
  xxl = false,
}) => {
  if (none([sm, md, lg, xl, xxl])) {
    const entries = Object.entries(breakpoints);
    return entries.reduce(mediaQueryReducer, {} as Record<string, object>);
  }

  if (!exactlyOne([sm, md, lg, xl, xxl])) {
    throw new Error("Only one of sm, md, lg, xl, xxl must be set");
  }

  const restrictedBreakpoints = getRestrictedBreakpoints({
    sm,
    md,
    lg,
    xl,
    xxl,
  });
  const restrictedEntries = Object.entries(restrictedBreakpoints);
  return restrictedEntries.reduce(
    mediaQueryReducer,
    {} as Record<string, object>,
  );
};

export const Container = ({
  className = "",
  style = {},
  children,
  id,
  sm = false,
  md = false,
  lg = false,
  xl = false,
  xxl = false,
  ...other
}: ContainerProps) => {
  const { css } = useFela<Theme, ContainerProps>({ sm, md, lg, xl, xxl });
  const cx = `${css([rule, mediaQueriesRule])} container ${className}`.trim();
  return (
    <div
      data-testid="container"
      className={cx}
      id={id}
      style={style}
      {...other}
    >
      {children}
    </div>
  );
};
