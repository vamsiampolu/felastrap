import { useFela } from "react-fela";
import type { Theme, StyleProps, CaretProps } from "../common";

const caret = ({ width }: StyleProps<CaretProps>) => ({
  borderTop: `${width} solid transparent`,
  borderRight: 0,
  borderBottom: `${width} solid transparent`,
  borderLeft: `${width} solid`,
  content: "",
  display: "inline-block",
  marginLeft: `calc(${width} * 0.85)`,
  verticalAlign: `calc(${width} * 0.85)`,
});

export const CaretEnd = ({ width = "0.3em", ...other }: CaretProps) => {
  const { css } = useFela<Theme, CaretProps>({ width });
  return <div className={css(caret)} {...other}></div>;
};
