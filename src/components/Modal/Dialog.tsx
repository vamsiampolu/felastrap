import { useFela } from "react-fela";
import { DivProps, Size } from "../common";
import { fadeIn } from "./animations";
import { ForwardedRef, forwardRef } from "react";
import { IStyle } from "fela";

const dialogRule = () => ({
  transform: "translate(0)",
  transition: "transform 0.3s ease-out",
  position: "relative",
  width: "auto",
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "1.75rem",
  marginBottom: "1.75rem",
  maxWidth: "500px",
});

const scrollableDialogRule = ({ scrollable = false }) =>
  scrollable
    ? {
        height: "calc(100% - 3.5rem)",
        overflowY: "auto",
      }
    : {};

const centeredDialogRule = ({ centered = false }) =>
  centered
    ? {
        display: "flex",
        alignItems: "center",
        minHeight: "calc(100% - 1.75rem * 2)",
      }
    : {};

const contentRule = () => ({
  position: "relative",
  backgroundColor: "#fff",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: "6px",
  boxShadow: "0 3px 9px rgba(0, 0, 0, 0.5)",
  backgroundClip: "padding-box",
  outline: 0,
  textAlign: "center",
});

const smallSizeRule = ({ size = "medium" }): IStyle =>
  size === "small"
    ? {
        "@media (min-width: 576px)": {
          maxWidth: "300px",
          width: "300px",
        },
      }
    : {};

const largeSizeRule = ({ size = "medium" }): IStyle =>
  size === "large"
    ? {
        "@media (min-width: 992px)": {
          maxWidth: "800px",
          width: "800px",
        },
      }
    : {};

export type DialogProps = DivProps & {
  isOpen?: boolean;
  centered?: boolean;
  scrollable?: boolean;
  size?: Size;
};

export const DialogComponent = (
  {
    className = "",
    children,
    size = "medium",
    centered = false,
    scrollable = false,
    isOpen,
    ...props
  }: DialogProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { css, renderer } = useFela({ centered, scrollable, size, isOpen });
  const animationName = renderer.renderKeyframe(fadeIn, {});
  const fadeInRule = () => ({ animationName, animationFillMode: "both" });

  const dialogClassName = `${css([
    dialogRule,
    scrollableDialogRule,
    smallSizeRule,
    largeSizeRule,
    centeredDialogRule,
    fadeInRule,
  ])} bs-modal-dialog ${className}`.trim();

  const contentClassName = `${css(
    contentRule,
    scrollableDialogRule,
  )} bs-modal-content ${className}`.trim();

  return (
    <div
      data-testid="modal-dialog"
      ref={ref}
      className={dialogClassName}
      {...props}
    >
      <div data-testid="modal-dialog-inner" className={contentClassName}>
        {children}
      </div>
    </div>
  );
};

export const Dialog = forwardRef(DialogComponent);
Dialog.displayName = "Dialog";
