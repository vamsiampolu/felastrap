import { IStyle } from "fela";
import { useFela } from "react-fela";
import { Button } from "../Button";
import { OnClick, StyleProps } from "../common";
import { Icon, type IconName } from "./Icon";

export type ControlProps = {
  name: IconName;
  disabled?: boolean;
  label: string;
  className?: string;
  onClick: OnClick<"button">;
};

const rule = ({ name }: StyleProps<ControlProps>) => {
  const style: IStyle = {
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
    padding: 0,
    color: "#fff",
    textAlign: "center",
    background: "none",
    border: 0,
    opacity: 0.5,
    transition: "opacity 0.15s ease",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    ":hover": {
      color: "#fff",
      textDecoration: "none",
      outline: 0,
      opacity: 0.9,
    },
    ":focus": {
      color: "#fff",
      textDecoration: "none",
      outline: 0,
      opacity: 0.9,
    },
  };

  switch (name) {
    case "prev":
      style.left = 0;
      break;
    case "next":
      style.right = 0;
      break;
  }

  return style;
};

export const Control = ({
  name,
  label,
  className = "",
  disabled = false,
  onClick,
}: ControlProps) => {
  const { css } = useFela({ name });
  const cx = `${css(rule)} ${className} carousel-control-${name}`.trim();
  return (
    <Button
      data-testid="carousel-control"
      disabled={disabled}
      onClick={onClick}
      className={cx}
    >
      <Icon name={name} label={label} />
    </Button>
  );
};
