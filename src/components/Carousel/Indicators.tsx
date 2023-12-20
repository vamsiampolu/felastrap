import { useFela } from "react-fela";
import type { DivProps } from "../common";

const rule = () => ({
  position: "absolute",
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2,
  display: "flex",
  justifyContent: "center",
  padding: 0,
  marginRight: "15%",
  marginBottom: "1rem",
  marginLeft: "15%",
});

export const Indicators = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} carousel-indicators ${className}`.trim();
  return (
    <div data-testid="carousel-indicators" className={cx}>
      {children}
    </div>
  );
};
