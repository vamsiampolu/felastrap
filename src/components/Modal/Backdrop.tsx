import { useFela } from "react-fela";
import { DivProps } from "../common";
import { CSSProperties } from "react";

const backdropRule = () => ({
  backgroundColor: "#000",
  opacity: 0,
  height: "100vh",
  width: "100vw",
  left: 0,
  position: "fixed",
  top: 0,
  zIndex: 1050,
});

export type BackdropProps = DivProps & {
  isOpen?: boolean;
  style?: CSSProperties | null;
};

export const Backdrop = ({ className = "", style }: BackdropProps) => {
  const { css } = useFela();
  return (
    <div
      data-testid="modal-backdrop"
      style={style}
      className={`${css(backdropRule)} bs-modal-backdrop ${className}`.trim()}
    ></div>
  );
};
