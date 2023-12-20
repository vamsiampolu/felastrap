import { useFela } from "react-fela";
import type { Theme, StyleProps, CaretProps } from "../common";

const caret = ({ width }: StyleProps<CaretProps>) => ({
  display: "inline-block",
  marginLeft: `calc(${width} * 0.85)`,
  marginRight: "3px",
  marginBottom: "-2px",
  verticalAlign: `calc(${width} * 0.85)`,
  content: "",
  borderTop: `${width} solid transparent`,
  borderRight: `${width} solid`,
  borderBottom: `${width} solid transparent`,
});

export const CaretStart = ({ width = "0.3em", ...other }: CaretProps) => {
  const { css } = useFela<Theme, CaretProps>({ width });
  return <div className={css(caret)} {...other}></div>;
};
