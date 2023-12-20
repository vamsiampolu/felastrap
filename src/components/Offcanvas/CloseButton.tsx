import { useFela } from "react-fela";
import closeIcon from "/close-button.svg";
import { ComponentPropsWithoutRef } from "react";

const borderRadius = {
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
};

const rule = () => ({
  ...borderRadius,
  borderColor: "rgb(0,0,0)",
  backgroundColor: "transparent",
  backgroundImage: `url(${closeIcon})`,
  backgroundPositionX: "center",
  backgroundOrigin: "padding-box",
  backgroundClip: "border-box",
  backgroundPositionY: "1em",
  backgroundRepeat: "no-repeat",
  backgroundSize: "auto",
  boxSizing: "content-box",
  border: 0,
  color: "#000",
  height: "1em",
  opacity: 0.5,
  paddingTop: "10px",
  paddingBottom: "10px",
  paddingLeft: "0.25em",
  paddingRight: "0.25em",
  width: "1em",
  ":focus": {
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    opacity: 1,
    outline: 0,
  },
  ":disabled": {
    opacity: 0.25,
    pointerEvents: "none",
    userSelect: "none",
  },
});

const offcanvasRule = () => ({
  padding: "calc(1rem * 0.5) calc(1rem * 0.5)",
  marginTop: "calc(-0.5 * 1rem)",
  marginRight: "calc(-0.5 * 1rem)",
  marginBottom: "calc(-0.5 * 1rem)",
});

export type CloseButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "aria-label" | "type" | "children"
>;

export const CloseButton = ({ className = "", ...props }: CloseButtonProps) => {
  const { css } = useFela();
  const cx = `${css([
    rule,
    offcanvasRule,
  ])} offcanvas-btn-close ${className}`.trim();
  return (
    <button
      data-testid="offcanvas-close-button"
      type="button"
      className={cx}
      aria-label="Close"
      {...props}
    />
  );
};
