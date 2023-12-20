import { ElementType, useContext } from "react";
import { useFela } from "react-fela";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import type { Theme } from "../common";
import { ContextValue, RowContext } from "./RowContext";
import { type ColSpan } from "./calc";
import {
  base,
  breakpointColWidth,
  colOffset,
  colOrder,
  colWidth,
  gutters,
  horizontalAlign,
  verticalAlign,
} from "./columnStyles";
import { Breakpoints } from "./mediaQuery";

export type CustomProps = Partial<{
  span: ColSpan | "auto" | null;
  offset: number | null;
  align: string | null;
  justify: string | null;
  order: string | null;
}> &
  Partial<{
    [K in Breakpoints]: ColSpan | "auto" | null;
  }>;

export type ColumnProps<T extends ElementType> =
  PolymorphicComponentPropsWithoutRef<T, CustomProps>;

export type CssProps = CustomProps & ContextValue;

export const Column = <T extends ElementType = "div">({
  children,
  className,
  span = null,
  offset = null,
  align = null,
  justify = null,
  order = null,
  sm = null,
  md = null,
  lg = null,
  xl = null,
  xxl = null,
  as,
  ...other
}: ColumnProps<T>) => {
  const { gx, gy, maxCols } = useContext(RowContext);
  const { css } = useFela<Theme, CssProps>({
    span: typeof maxCols === "number" && !span ? 1 : span,
    offset,
    align,
    maxCols,
    justify,
    order,
    gx,
    gy,
    sm,
    md,
    lg,
    xl,
    xxl,
  });

  const colCx = css([
    base,
    colWidth,
    breakpointColWidth,
    colOffset,
    verticalAlign,
    horizontalAlign,
    colOrder,
    gutters,
  ]);

  const cx = `${colCx} ${className || ""}`.trim();
  const Component = as || "div";
  return (
    <Component className={cx} {...other}>
      {children}
    </Component>
  );
};
