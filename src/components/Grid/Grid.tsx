import { useFela } from "react-fela";
import {
  breakpointGridColumnRule,
  breakpointGridStartRule,
  gridColumnRule,
  gridStartRule,
} from "./gridColumnStyles";
import { GridColumnProps, GridProps } from "./types";

const gridRule = ({ rows = 1, columns = 12, gap = "1.5rem" }) => ({
  display: "grid",
  gap,
  gridTemplateRows: `repeat(${rows}, 1fr)`,
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
});

export const Grid = ({
  rows = 1,
  columns = 12,
  gap = "1.5em",
  className = "",
  children,
  ...props
}: GridProps) => {
  const { css } = useFela({ rows, columns, gap });
  return (
    <div
      data-testid="grid"
      className={`${css(gridRule)} grid ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};

export const GridColumn = ({
  className = "",
  span = 1,
  start = null,
  children,
  sm = null,
  md = null,
  lg = null,
  xl = null,
  xxl = null,
  startSm = null,
  startMd = null,
  ...props
}: GridColumnProps) => {
  const { css } = useFela({
    span,
    sm,
    md,
    lg,
    xl,
    xxl,
    start,
    startSm,
    startMd,
  });
  return (
    <div
      data-testid="grid-column"
      className={`${css(
        gridColumnRule,
        breakpointGridColumnRule,
        gridStartRule,
        breakpointGridStartRule,
      )} grid-column-${span} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
};
