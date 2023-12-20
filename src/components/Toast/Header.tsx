import { useFela } from "react-fela";
import { DivProps } from "../common";
import { Icon } from "./Icon";
import { ReactNode } from "react";
import { CloseButton } from "./CloseButton";

const rule = () => ({
  alignItems: "center",
  backgroundClip: "padding-box",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.175)",
  borderTopLeftRadius: "calc(0.375rem - 1px)",
  borderTopRightRadius: "calc(0.375rem - 1px)",
  color: "rgba(33, 37, 41, 0.75)",
  display: "flex !important",
  padding: "0.5rem 0.75rem",
});

export type ToastHeaderProps = Omit<DivProps, "children"> & {
  icon?: ReactNode;
  title?: ReactNode;
  right?: ReactNode;
  close: () => void;
};

export const ToastHeader = ({
  className = "",
  icon,
  title,
  right,
  close,
  ...props
}: ToastHeaderProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} toast-header ${className}`.trim();
  return (
    <div data-testid="toast-header" className={cx} {...props}>
      {icon || <Icon />}
      {title && (
        <strong
          data-testid="toast-title"
          className={`${css({
            marginRight: "auto",
            marginTop: "0.5rem",
          })} toast-title`}
        >
          {title}
        </strong>
      )}
      {right && (
        <small className="toast-header-right" data-testid="toast-header-right">
          {right}
        </small>
      )}
      <CloseButton onClick={close} />
    </div>
  );
};
