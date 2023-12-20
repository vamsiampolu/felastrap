import { useFela } from "react-fela";
import type { Theme, StyleProps, CaretProps } from "../common";

const caret = ({ width }: StyleProps<CaretProps>) => ({
  borderBottom: 0,
  borderLeft: `${width} solid transparent`,
  borderRight: `${width} solid transparent`,
  borderTop: `${width} solid`,
  content: "",
  display: "inline-block",
  marginLeft: `calc(${width} * 0.85)`,
  verticalAlign: `calc(${width} * 0.85)`,
});

export const CaretDown = ({ width = "0.3em", ...other }: CaretProps) => {
  const { css } = useFela<Theme, CaretProps>({ width });
  return <div className={css(caret)} {...other}></div>;
};
