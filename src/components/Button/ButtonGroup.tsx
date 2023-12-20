import { CSSProperties } from "fela";
import { useFela } from "react-fela";
import { DivProps } from "../common";

export type ButtonGroupProps = DivProps & Partial<{ vertical: boolean }>;

const rule = ({ vertical = false }) => {
  const style: CSSProperties = {
    position: "relative",
    display: "inline-flex",
    verticalAlign: "middle",
  };

  if (!vertical) {
    style.borderRadius = "0.375rem";
  }

  if (vertical) {
    style.flexDirection = "column";
    style.alignItems = "flex-start";
    style.justifyContent = "center";
  }

  return style;
};

export const ButtonGroup = ({
  vertical = false,
  className = "",
  children,
  ...other
}: ButtonGroupProps) => {
  const { css } = useFela({ vertical });
  const cx = `${css(rule)} button-group ${className}`;
  return (
    <div
      data-testid="button-group"
      className={cx}
      role="group"
      aria-label={other["aria-label"]}
      {...other}
    >
      {children}
    </div>
  );
};
