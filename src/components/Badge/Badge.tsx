import { useFela } from "react-fela";
import { SpanProps, StyleProps, Theme, Variant } from "../common";
import { IStyle } from "fela";
import {
  backgroundColorByVariant,
  borderRadius as borderRadiusMapping,
  contrastColorByVariant,
} from "./mappings";

export type CustomProps = Partial<{
  heading: boolean;
  button: boolean;
  positioned: boolean;
  pill: boolean;
  variant: Variant;
}>;

export type BadgeProps = SpanProps & CustomProps;

const headingRule = ({ heading }: StyleProps<BadgeProps>) =>
  heading ? { backgroundColor: "rgba(108, 117, 125, 1)" } : {};

const buttonRule = ({ button }: StyleProps<BadgeProps>) =>
  button
    ? {
        color: "#fff",
        position: "relative",
        top: "-1px",
        backgroundColor: "rgba(108, 117, 125, 1)",
      }
    : {};

const positionedRule = ({ positioned }: StyleProps<BadgeProps>) =>
  positioned
    ? {
        ...borderRadiusMapping.positioned,
        color: " #fff",
        left: "100%",
        top: "0%",
        backgroundColor: "rgba(220, 53, 69, 1)",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }
    : {};

const base = ({ pill }: StyleProps<BadgeProps>): IStyle => {
  const borderRadius = pill
    ? borderRadiusMapping.pill
    : borderRadiusMapping.base;

  return {
    ...borderRadius,
    color: " #fff",
    display: "inline-block",
    fontSize: "0.75em",
    fontWeight: "700",
    lineHeight: 1,
    paddingTop: "0.35em",
    paddingBottom: "0.35em",
    paddingLeft: "0.65em",
    paddingRight: "0.65em",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    ":empty": {
      display: "none",
    },
  };
};

const contrastRule = ({ variant }: StyleProps<BadgeProps>) => ({
  color: contrastColorByVariant[variant as Variant],
  backgroundColor: backgroundColorByVariant[variant as Variant],
});

export const Badge = ({
  children,
  className = "",
  heading = false,
  button = false,
  positioned = false,
  pill = false,
  variant = "secondary",
  ...other
}: BadgeProps) => {
  const { css } = useFela<Theme, BadgeProps>({
    heading,
    positioned,
    button,
    variant,
    pill,
  });
  const cx = `${css([
    base,
    contrastRule,
    buttonRule,
    headingRule,
    positionedRule,
  ])} ${className || ""}`.trim();

  return (
    <span data-testid="badge" className={cx} {...other}>
      {children}
    </span>
  );
};
