import { useFela } from "react-fela";
import { Button } from "../Button";
import { backgroundColorByVariant, minHeightBySize } from "./mappings";
import { PlaceholderProps, PlaceholderStyleProps } from "./types";

const wrapperRule = () => ({
  color: "#212529",
});

const glow = () => ({
  "50%": {
    opacity: "0.5",
  },
});

const wave = () => ({
  "100%": {
    "-webkit-mask-position": "-200% 0%",
    maskPosition: "-200% 0%",
  },
});

const rule = ({ size, width, variant }: PlaceholderStyleProps) => {
  return {
    display: "inline-block",
    minHeight: minHeightBySize[size ?? "medium"],
    verticalAlign: "middle",
    cursor: "wait",
    backgroundColor: backgroundColorByVariant[variant ?? "default"],
    width,
    flex: "0 0 auto",
    opacity: 0.5,
    "::before": {
      display: "inline-block",
      content: "",
    },
  };
};

const waveRule = ({ animation }: PlaceholderStyleProps) => {
  if (animation === "wave") {
    return {
      "webkit-mask-size": "200% 100%",
      "mask-size": "200% 100%",
      webkitMaskImage:
        "linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)",
      maskImage:
        "linear-gradient(130deg, #000 55%, rgba(0, 0, 0, 0.8) 75%, #000 95%)",
    };
  }

  return {};
};

const animate = (animationName: string) => () => ({
  animationName,
  animationDuration: "2s",
  animationIterationCount: "infinite",
  animationTimingFunction: "linear",
});

export const Placeholder = ({
  className = "",
  size = "medium",
  width = "50%",
  type = "text",
  variant = "default",
  animation = null,
}: PlaceholderProps) => {
  const { css, renderer } = useFela({ width, size, variant, animation });
  let animationName;

  if (animation === "glow") {
    animationName = renderer.renderKeyframe(glow, {});
  }

  if (animation === "wave") {
    animationName = renderer.renderKeyframe(wave, {});
  }

  if (type === "text") {
    const cx = `${css([wrapperRule, waveRule, animate(animationName!)])}`;

    return (
      <p data-testid="placeholder-text" className={cx} aria-hidden={true}>
        <span className={`${css(rule)}  ${className}`.trim()}></span>
      </p>
    );
  }

  return (
    <Button
      data-testid="placeholder-button"
      className={`${css(rule)} ${className}`.trim()}
      disabled
      aria-disabled={true}
      variant={variant === "default" ? "primary" : variant}
    ></Button>
  );
};
