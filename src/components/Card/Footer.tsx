import { useFela } from "react-fela";
import type { DivProps } from "../common";

const rule = () => {
  const innerRadius = "calc(0.375rem - 1px)";
  return {
    padding: "0.5rem 1rem",
    color: "rgb(33,37,41)",
    backgroundColor: "rgba(33, 37, 41, 0.03)",
    borderTop: "1px solid rgba(0, 0, 0, 0.175)",
    borderRadius: `0 0 ${innerRadius} ${innerRadius}`,
  };
};

export const Footer = ({ children, className, ...other }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} ${className ?? ""}`.trim();
  return (
    <div className={cx} {...other}>
      {children}
    </div>
  );
};
