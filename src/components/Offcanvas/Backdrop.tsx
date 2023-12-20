import { CSSProperties } from "react";
import { useFela } from "react-fela";

const rule = ({ isOpen = false }) => ({
  position: "fixed",
  opacity: isOpen ? 0.5 : 0,
  top: 0,
  left: 0,
  zIndex: 1040,
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000",
});

export type BackdropProps = { isOpen?: boolean; style: CSSProperties };

export const Backdrop = ({ isOpen = false, style }: BackdropProps) => {
  const { css } = useFela({ isOpen });
  const cx = `${css(rule)} offcanvas-backdrop`;
  return <div data-testid="offcanvas-backdrop" style={style} className={cx} />;
};
