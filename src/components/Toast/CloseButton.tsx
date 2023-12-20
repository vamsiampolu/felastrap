import { useFela } from "react-fela";
import closeIcon from "/close-button.svg";
import { ComponentPropsWithoutRef } from "react";

const borderRadius = {
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
};

const rule = () => {
  return {
    ...borderRadius,
    marginRight: "calc(-0.5 * 0.75rem)",
    marginLeft: "0.75rem",
    paddingTop: "10px !important",
    paddingBottom: "10px !important",
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
  };
};

export type CloseButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "aria-label" | "type" | "children"
>;
export const CloseButton = ({ className = "", ...props }: CloseButtonProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} toast-btn-close ${className}`;
  return (
    <button
      data-testid="toast-close-button"
      type="button"
      className={cx}
      aria-label="Close"
      {...props}
    />
  );
};
