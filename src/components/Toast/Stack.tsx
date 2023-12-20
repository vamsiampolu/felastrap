import { useFela } from "react-fela";
import { ToastContainer, type ToastPlacement } from "./Container";
import { CSSProperties } from "react";
import { Toast, ToastProps } from "./Toast";

export type StackedToastProps = Omit<ToastProps, "placement">;

export type ToastStackProps = {
  placement: ToastPlacement;
  style?: CSSProperties;
  className?: string;
  toasts: StackedToastProps[];
};

export const ToastStack = ({
  toasts = [],
  className = "",
  placement = "bottom-left",
  style = {},
}: ToastStackProps) => {
  const { css } = useFela();
  const cx = `${css({
    position: "static !important",
  })} toast-stack-container ${className}`.trim();
  return (
    <ToastContainer className={cx} style={style} placement={placement}>
      {toasts.map((toast, index) => {
        const last = index === toasts.length;
        const toastClassName = last ? "" : css({ marginBottom: "1.5rem" });
        return (
          <Toast
            className={toastClassName}
            close={toast.close}
            key={`toast-stack-${index}`}
            isOpen={toast.isOpen}
            body={toast.body}
            header={toast.header}
          />
        );
      })}
    </ToastContainer>
  );
};
