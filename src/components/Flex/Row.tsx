import { CSSProperties, IStyle } from "fela";
import { ElementType } from "react";
import { useFela } from "react-fela";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import { between, isEmptyObj, isNumber, isObject } from "../../utils";
import type { StyleProps, Theme } from "../common";
import { ContextValue, RowContext } from "./RowContext";
import { GutterModifier, calcGutter, type ColSpan, type Gutter } from "./calc";
import { createMediaQueryReducer, mediaQueries } from "./mediaQuery";

export type CustomProps = Partial<{
  cols: ColSpan | null;
  gutter: GutterModifier;
}>;

export type RuleProps = {
  gx: Gutter;
  gy: Gutter;
};

export type RowProps<C extends ElementType = "div"> =
  PolymorphicComponentPropsWithoutRef<C, CustomProps>;

const row = () => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginLeft: "-0.75rem",
  marginRight: "-0.75rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
  marginTop: 0,
  width: "100%",
});

const gutters = ({ gx = 0, gy = 0 }: StyleProps<RuleProps>) => {
  const style = {} as CSSProperties;
  if (gx) {
    style.marginRight = `calc(-0.5 * ${gx})`;
    style.marginLeft = `calc(-0.5 * ${gx})`;
  }

  if (gy) {
    style.marginTop = `calc(-1 * ${gy})`;
  }

  if (!isEmptyObj(style)) {
    const mediaQueryReducer = createMediaQueryReducer(style);
    const styles = mediaQueries.reduce(mediaQueryReducer, {});
    return {
      ...(style as IStyle),
      ...(styles as IStyle),
    } as IStyle;
  }

  return style;
};

export const Row = <C extends ElementType = "div">({
  children,
  cols = null,
  className,
  as,
  gutter = 1,
  ...other
}: RowProps<C>) => {
  let gx: Gutter = 0;
  let gy: Gutter = 0;
  if (isNumber(gutter) && between(0, 5, gutter)) {
    const value = calcGutter(gutter);
    gx = value;
    gy = value;
  } else if (isObject(gutter)) {
    const { x = null, y = null } = gutter;
    gx = x ? calcGutter(x) : 0;
    gy = y ? calcGutter(y) : 0;
  }

  const { css } = useFela<Theme, RuleProps>({ gx, gy });
  const value: ContextValue = { gx, gy, maxCols: cols };

  const Component = as || "div";
  const cx = `${css([row, gutters])} ${className || ""}`.trim();
  return (
    <RowContext.Provider value={value}>
      <Component className={cx} {...other}>
        {children}
      </Component>
    </RowContext.Provider>
  );
};
