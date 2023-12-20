import { useFela } from "react-fela";
import { Button, type ButtonProps } from "../Button";
import { StyleProps } from "../common";

export type IndicatorProps = ButtonProps<"button"> & { label: string };

const rule = ({ active }: StyleProps<{ active: boolean }>) => ({
  boxSizing: "content-box",
  flex: "0 1 auto",
  width: "30px",
  height: "3px",
  padding: 0,
  marginRight: "3px",
  marginLeft: "3px",
  textIndent: "-999px",
  cursor: "pointer",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: 0,
  borderTop: "10px solid transparent",
  borderBottom: "10px solid transparent",
  opacity: active ? 1 : 0.5,
  transition: "opacity 0.6s ease",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
});

export const Indicator = ({
  className = "",
  active = false,
  label,
  onClick,
}: IndicatorProps) => {
  const { css } = useFela({ active });
  const cx = `${css(rule)} carousel-indicator ${className}`.trim();
  return (
    <Button
      data-testid="carousel-indicator"
      className={cx}
      onClick={onClick}
      type="button"
      aria-current={active}
      aria-label={label}
    ></Button>
  );
};
