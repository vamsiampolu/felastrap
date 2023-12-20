import { Button, type ButtonProps } from "../Button";
import { useFillColor } from "../../hooks/useFillColor";
import { useRef } from "react";

export const PlayIcon = ({ fill }: { fill?: string }) => (
  <svg
    data-testid="carousel-play-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentcolor"
    width="16"
    height="16"
  >
    <path
      fill={fill}
      stroke={fill}
      d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
    ></path>
  </svg>
);

export const PlayButton = ({
  className,
  disabled,
  duration = 2000,
  ...props
}: ButtonProps<"button"> & Partial<{ duration: number }>) => {
  const buttonRef = useRef<HTMLElement>(null);
  const fill = useFillColor({ duration, buttonRef });
  return (
    <Button
      data-testid="carousel-play-btn"
      ref={buttonRef}
      style={{ backgroundColor: "unset" }}
      className={className}
      disabled={disabled}
      {...props}
    >
      <PlayIcon fill={fill} />
    </Button>
  );
};
