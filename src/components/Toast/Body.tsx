import { useFela } from "react-fela";
import { DivProps } from "../common";

const rule = () => ({
  padding: "0.75rem",
  wordWrap: "break-word",
});

export const ToastBody = ({ children, className = "", ...props }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} toast-body ${className}`.trim();
  return (
    <div data-testid="toast-body" className={cx} {...props}>
      {children}
    </div>
  );
};
