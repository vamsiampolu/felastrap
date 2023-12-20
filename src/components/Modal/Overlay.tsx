import { useFela } from "react-fela";
import { DivProps } from "../common";
export type OverlayProps = DivProps & { title: string };

const rule = () => ({
  width: "100%",
  height: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  outline: 0,
  opacity: 1,
  zIndex: 1050,
  overflow: "hidden",
  overflowX: "hidden",
  overflowY: "auto",
  transition: "opacity 0.15s linear",
});

export const Overlay = ({
  title,
  className = "",
  children,
  ...props
}: OverlayProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} modal ${className}`.trim();
  return (
    <div
      data-testid="modal-overlay"
      className={cx}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={title}
      {...props}
    >
      {children}
    </div>
  );
};
