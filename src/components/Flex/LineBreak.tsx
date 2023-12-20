import { useFela } from "react-fela";
import { DivProps } from "../common";
import { CSSProperties } from "react";

export type LineBreakProps = DivProps & {
  height?: "auto" | CSSProperties["height"];
};
export const LineBreak = ({ height = "auto", ...other }: LineBreakProps) => {
  const { css } = useFela();
  return (
    <div
      data-testid="line-break"
      className={css({ width: "100%", height })}
      {...other}
    />
  );
};
