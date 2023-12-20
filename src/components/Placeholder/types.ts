import { StyleProps, Variant } from "../common";

export type PlaceholderSize = "xsmall" | "small" | "medium" | "large";
export type PlaceholderType = "text" | "button";
export type AnimationType = "glow" | "wave" | null;
export type PlaceholderProps = {
  className?: string;
  size?: PlaceholderSize;
  width?: string | number;
  type?: PlaceholderType;
  variant?: Variant;
  animation?: AnimationType;
};

export type RuleKeys = "width" | "size" | "variant" | "animation";
export type RequiredPlaceholder = Required<PlaceholderProps>;
export type RuleProps = Pick<RequiredPlaceholder, RuleKeys>;
export type PlaceholderStyleProps = StyleProps<RuleProps>;
