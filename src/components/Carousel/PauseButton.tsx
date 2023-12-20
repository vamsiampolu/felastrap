import { Button, type ButtonProps } from "../Button";
import { useFillColor } from "../../hooks/useFillColor";
import { useRef } from "react";

export const PauseIcon = ({ fill }: { fill?: string }) => (
  <svg
    data-testid="carousel-pause-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width="16"
    height="16"
  >
    <path
      fill={fill}
      d="M5.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5z"
    ></path>
  </svg>
);

export const PauseButton = ({
  className,
  disabled,
  duration = 2000,
  ...props
}: ButtonProps<"button"> & Partial<{ duration: number }>) => {
  const buttonRef = useRef(null);
  const fill = useFillColor({ duration, buttonRef });
  return (
    <Button
      data-testid="carousel-pause-btn"
      ref={buttonRef}
      style={{ backgroundColor: "unset" }}
      className={className}
      disabled={disabled}
      {...props}
    >
      <PauseIcon fill={fill} />
    </Button>
  );
};
