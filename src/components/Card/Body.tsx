import { useFela } from "react-fela";
import type { DivProps, StyleProps } from "../common";
import { overlayBase, overlayLayoutRule } from "./imageStyle";

const padding = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
};

const body = ({ color }: StyleProps<CardBodyProps>) => ({
  ...padding,
  color,
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: "auto",
});

export type CardBodyProps = DivProps & { color?: string; overlay?: boolean };

export const CardBody = ({
  className = "",
  children,
  color = "#000",
  overlay = false,
  ...other
}: CardBodyProps) => {
  const { css } = useFela({ color, overlay });
  const cx = `${css([body, overlayBase, overlayLayoutRule])} ${
    className || ""
  }`.trim();
  return (
    <div data-testid="card-body" className={cx} {...other}>
      {children}
    </div>
  );
};
