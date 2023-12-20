import { useFela } from "react-fela";
import type { IStyle } from "fela";
import { Button, type ButtonProps } from "../Button";

const rule = ({ isOpen = false, first = false, last = false }) => {
  const style: IStyle = {
    position: "relative",
    display: "flex !important",
    alignItems: "center",
    width: "100%",
    padding: "1.25rem 1rem",
    fontSize: "1rem",
    color: "#212529",
    textAlign: "left",
    backgroundColor: "#fff",
    border: 0,
    borderRadius: 0,
    overflowAnchor: "none",
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-radius 0.15s ease",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    ":focus": {
      zIndex: 3,
      borderColor: "#86b7fe",
      outline: 0,
      boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    },
    ":hover": {
      zIndex: 2,
    },
  };

  if (isOpen) {
    style.color = "#052c65";
    style.backgroundColor = "#cfe2ff";
    style.boxShadow = "inset 0 calc(-1 * -1px) 0 #dee2e6";
  }

  if (first) {
    style.borderTopLeftRadius = "calc(0.375rem - 1px)";
    style.borderTopRightRadius = "calc(0.375rem - 1px)";
  }

  if (last && !isOpen) {
    style.borderBottomRightRadius = "calc(0.375rem - 1px)";
    style.borderBottomLeftRadius = "calc(0.375rem - 1px)";
  }

  return style;
};

export type ToggleButtonProps = ButtonProps<"button"> & {
  isOpen?: boolean;
  first?: boolean;
  last?: boolean;
};

export const ToggleButton = ({
  isOpen = false,
  first = false,
  last = false,
  children,
  ...other
}: ToggleButtonProps) => {
  const { css } = useFela({ isOpen, first, last });
  const cx = `${css(rule)} accordion-toggle-button`;
  return (
    <Button
      data-testid="accordion-toggle-button"
      aria-expanded={isOpen}
      className={cx}
      {...other}
    >
      {children}
    </Button>
  );
};
