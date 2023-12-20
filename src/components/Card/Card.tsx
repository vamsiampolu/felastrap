import { useFela } from "react-fela";
import type { DivProps, StyleProps } from "../common";

export type CardProps = DivProps &
  Partial<{
    height: number | string;
    textAlign: string;
    list: boolean;
  }>;

const borderRadius = {
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
};

const rule = ({
  height = "auto",
  textAlign = "left",
}: StyleProps<CardProps>) => ({
  ...borderRadius,
  position: "relative",
  display: "flex",
  flexDirection: "column",
  minWidth: 0,
  height,
  textAlign,
  backgroundClip: "border-box",
  backgroundColor: "#fff",
  borderColor: "rgba(0, 0, 0, 0.175)",
  borderStyle: "solid",
  borderWidth: "1px",
  color: "#212529",
  wordWrap: "break-word",
  "> a + a": {
    marginLeft: "1rem",
  },
});

export const Card = ({
  className = "",
  children,
  height,
  textAlign = "left",
  ...other
}: CardProps) => {
  const { css } = useFela({ height, textAlign });

  const cx = `${css(rule)} ${className || ""}`.trim();
  return (
    <div data-testid="card" className={cx} {...other}>
      {children}
    </div>
  );
};
