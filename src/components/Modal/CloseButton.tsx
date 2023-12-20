import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import close from "/close-button.svg";

const rule = () => ({
  marginTop: "-2px",
  appearance: "none",
  textAlign: "end",
  cursor: "pointer",
  border: 0,
  position: "absolute",
  right: "2rem",
  top: "1rem",
  padding: "1rem",
  backgroundColor: "transparent",
  backgroundImage: `url(${close})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "16px",
  backgroundPosition: "center",
});

export type CloseButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "type" | "aria-label"
>;

export const CloseButton = ({
  onClick,
  className = "",
  ...props
}: CloseButtonProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bs-close ${className}`.trim();
  return (
    <button
      data-testid="modal-close-button"
      className={cx}
      onClick={onClick}
      type="button"
      aria-label="Close"
      {...props}
    ></button>
  );
};
