import { useFela } from "react-fela";
import type { Theme, StyleProps, CaretProps } from "../common";

const caret = ({ width }: StyleProps<CaretProps>) => ({
  borderTop: 0,
  borderRight: `${width} solid transparent`,
  borderBottom: `${width} solid`,
  borderLeft: `${width} solid transparent`,
  content: "",
  display: "inline-block",
  marginLeft: `calc(${width} * 0.85)`,
  verticalAlign: `calc(${width} * 0.85)`,
});

export const CaretUp = ({ width = "0.3em", ...other }: CaretProps) => {
  const { css } = useFela<Theme, CaretProps>({ width });
  return <div className={css(caret)} {...other}></div>;
};
