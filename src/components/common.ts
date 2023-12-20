import type * as Css from "csstype";
import type * as Fela from "fela";
import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ElementType,
} from "react";
import type * as ReactFela from "react-fela";

export type ExcludeFrom<T, U> = T extends U ? never : T;
export type Theme = object;

export type Rule = Fela.TRule;
export type CSSObject = Fela.CSSObject;
export type StyleProps<P = object> = ReactFela.StyleProps<Theme, P>;
export type StyleFunction<P = object> = ReactFela.StyleFunction<Theme, P>;

export type Padding = Required<
  Pick<
    Css.Properties,
    "paddingTop" | "paddingLeft" | "paddingRight" | "paddingBottom"
  >
>;
export type BorderRadius = Required<
  Pick<
    Css.Properties,
    | "borderTopLeftRadius"
    | "borderTopRightRadius"
    | "borderBottomRightRadius"
    | "borderBottomLeftRadius"
  >
>;

export type PaddingString = Required<Css.Properties["padding"]>;
export type Color = Css.Property.Color;

export type HeaderTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type Size = "small" | "medium" | "large";
export type Variant =
  | "default"
  | "danger"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export type FontSize = Css.Property.FontSize;
export type ColorMapping = Record<Variant, Color>;
export type PaddingBySize = Record<Size, Padding>;

export type SpanProps = ComponentPropsWithoutRef<"span">;
export type DivProps = ComponentPropsWithoutRef<"div">;
export type ListItemProps = ComponentPropsWithoutRef<"li">;

export type DropdownDirection = "up" | "down" | "end" | "start" | "centered";
export type CaretDirection = "up" | "down" | "end" | "start";
export type NavVariant =
  | "default"
  | "tabs"
  | "pills"
  | "underline"
  | "vertical";

export type CaretProps = DivProps & {
  width: string | number | null;
};

export type DynamicElement<T extends ElementType = "span"> =
  | keyof JSX.IntrinsicElements
  | ComponentType<T>;
export type PargraphProps = ComponentPropsWithoutRef<"p">;
export type ImageProps = ComponentPropsWithoutRef<"img">;
export type TooltipPlacement = "top" | "left" | "bottom" | "right";

export type MediaQuerySize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
export type Timer = ReturnType<typeof setTimeout>;
export type OnClick<T extends ElementType> =
  ComponentPropsWithoutRef<T>["onClick"];
export type StyleKey = Exclude<
  keyof HTMLElement["style"],
  "length" | "parentRule"
>;
