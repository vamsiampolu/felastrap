import type { CSSProperties } from "fela";
import { useFela } from "react-fela";
import { ColorMapping, Variant } from "../common";

export type SpinnerType = "border" | "grow";
const textColorMapping: ColorMapping = {
  danger: "rgb(220, 53, 69)",
  default: "rgb(33, 37, 41)",
  info: "rgb(13, 202, 240)",
  primary: "rgb(13, 110, 253)",
  secondary: "rgb(108, 117, 125)",
  success: "rgb(25, 135, 84)",
  warning: "rgb(255, 193, 7)",
};

const borderSpinnerKeyframe = ({ type = "border" }) =>
  type === "border"
    ? {
        from: {
          transform: "rotate(0deg)",
        },
        to: {
          transform: "rotate(360deg)",
        },
      }
    : {};

const growSpinnerKeyframe = ({ type = "border" }) =>
  type === "grow"
    ? {
        "0%": {
          transform: "scale(0)",
        },
        "50%": {
          opacity: 1,
          transform: "none",
        },
      }
    : {};

const baseRule = ({ variant = "default", small = false }) => ({
  color: textColorMapping[variant as Variant],
  display: "inline-block",
  width: small ? "1rem" : "2rem",
  height: small ? "1rem" : "2rem",
  verticalAlign: "-0.125em",
  borderRadius: "50%",
});

const borderRule = ({ type = "border" }) =>
  type === "border"
    ? {
        border: "0.25em solid currentcolor",
        borderRightColor: "transparent",
      }
    : {};

const visuallyHidden = () => {
  return {
    width: "1px !important",
    height: "1px !important",
    padding: "0 !important",
    margin: "-1px !important",
    overflow: "hidden !important",
    clip: "rect(0, 0, 0, 0) !important",
    whiteSpace: "nowrap !important",
    border: "0 !important",
    ":not(caption)": {
      position: "absolute !important",
    },
  };
};

const growRule = ({ type = "grow", variant = "default" }) =>
  type === "grow"
    ? {
        color: textColorMapping[variant as Variant],
        backgroundColor: "currentcolor",
        opacity: 0,
      }
    : {};

export type SpinnerProps = {
  className?: string;
  type?: SpinnerType;
  variant?: Variant;
  small?: boolean;
};
export const Spinner = ({
  className = "",
  type = "border",
  variant = "default",
  small = false,
}: SpinnerProps) => {
  const { css, renderer } = useFela({ type, variant, small });
  const borderAnimationName = renderer.renderKeyframe(borderSpinnerKeyframe, {
    type: type,
  });

  const growAnimationName = renderer.renderKeyframe(growSpinnerKeyframe, {
    type,
  });

  const animationRule = ({ type = "border" }) => {
    let animationName;
    switch (type) {
      case "border":
        animationName = borderAnimationName;
        break;
      case "grow":
        animationName = growAnimationName;
        break;
    }

    return {
      animationDuration: "0.75s",
      animationIterationCount: "infinite",
      animationTimingFunction: "linear",
      animationName,
    } as CSSProperties;
  };

  const cx = `${css([
    baseRule,
    borderRule,
    growRule,
    animationRule,
  ])} spinner-${type}-${variant} ${className}`;
  return (
    <div data-testid="spinner" className={cx} role="status">
      <span data-testid="spinner-hidden-text" className={css(visuallyHidden)}>
        Loading...
      </span>
    </div>
  );
};
