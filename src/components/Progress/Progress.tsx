import { IStyle } from "fela";
import { linearGradient } from "polished";
import { useFela } from "react-fela";
import type { DivProps, StyleProps } from "../common";

export type ProgressVariant =
  | "default"
  | "success"
  | "info"
  | "danger"
  | "warning";

const backgroundColorByVariant: Record<ProgressVariant, string> = {
  default: "#0d6efd",
  success: "rgba(25, 135, 84, 1)",
  info: "rgba(13, 202, 240, 1)",
  warning: "rgba(255, 193, 7, 1)",
  danger: "rgba(220, 53, 69, 1)",
};

export type ProgressProps = DivProps &
  Partial<{
    value: number;
    variant: ProgressVariant;
    label: string;
    showLabel: boolean;
    stacked: boolean;
    striped: boolean;
    animated: boolean;
  }>;

const rule = ({ stacked = false, value = 0 }) => ({
  display: "flex",
  height: "1rem",
  overflow: stacked ? "hidden" : "visible",
  fontSize: "0.75rem",
  backgroundColor: "#e9ecef",
  width: stacked ? `${value}%` : "100%",
  borderRadius: "0.375rem",
  boxShadow: stacked ? "inset 0 1px 2px rgba(0, 0, 0, 0.075)" : "",
});

const stripedRule = ({ striped = false, variant = "default " }) =>
  striped
    ? {
        backgroundSize: "1rem 1rem",
        ...linearGradient({
          toDirection: "45deg",
          fallback: backgroundColorByVariant[variant as ProgressVariant],
          colorStops: [
            "rgba(255,255,255,.15) 25%",
            "transparent 25%",
            "transparent 50%",
            "rgba(255,255,255,.15) 50%",
            "rgba(255,255,255,.15) 75%",
            "transparent 75%",
            "transparent",
          ],
        }),
      }
    : {};

const stripeKeyframe = () => ({
  "0%": {
    backgroundPositionX: "1rem",
  },
});

const stripedAnimation =
  (animationName: string | null) =>
  ({ striped = false, animated = false }): IStyle =>
    striped && animated && animationName
      ? {
          animationDuration: "1s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationName: animationName,
        }
      : {};

const progressBarRule = ({
  variant = "default",
  stacked = false,
  value = 0,
}: StyleProps<ProgressProps>) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  color: "#fff",
  textAlign: "center",
  whiteSpace: "nowrap",
  backgroundColor: backgroundColorByVariant[variant as ProgressVariant],
  transition: "width 0.6s ease",
  width: stacked ? "100%" : `${value}%`,
  height: "1rem",
  fontSize: "0.75rem",
  borderRadius: "0.375rem",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
});

export const Progress = ({
  className = "",
  variant = "default",
  label = "Progress Bar",
  value = 0,
  showLabel = false,
  stacked = false,
  striped = false,
  animated = false,
  ...other
}: ProgressProps) => {
  const { css, renderer } = useFela({
    variant,
    stacked,
    value,
    striped,
    animated,
  });
  const animationName =
    striped && animated ? renderer.renderKeyframe(stripeKeyframe, {}) : null;

  const cx = `${css(rule)} ${className ?? ""}`.trim();
  const progressBar = `${css([
    progressBarRule,
    stripedRule,
    stripedAnimation(animationName),
  ])}`;
  return (
    <div
      data-testid="progressbar"
      className={cx}
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      {...other}
    >
      <div data-testid="progressbar-label" className={progressBar}>
        {showLabel ? `${value}%` : null}
      </div>
    </div>
  );
};
