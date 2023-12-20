import { useFela } from "react-fela";
import { PlayButton } from "./PlayButton";
import { PauseButton } from "./PauseButton";
import { ButtonProps } from "../Button";

export type AutoplayControlsProps = ButtonProps<"button"> & {
  className?: string;
  autoplay?: boolean;
  enabled?: boolean;
  duration?: number;
};

const rule = () => ({
  position: "absolute",
  bottom: "10px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 5,
});

export const AutoplayControls = ({
  className = "",
  autoplay = false,
  enabled = false,
  duration = 2000,
  ...props
}: AutoplayControlsProps) => {
  const { css } = useFela();

  if (!enabled) {
    return null;
  }

  const cx = `${css(rule)} autoplay-controls ${className}`.trim();
  return (
    <div data-testid="autoplay-controls-wrapper" className={cx}>
      {autoplay ? (
        <PauseButton duration={duration} {...props} />
      ) : (
        <PlayButton duration={duration} {...props} />
      )}
    </div>
  );
};
