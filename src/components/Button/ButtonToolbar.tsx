import { useFela } from "react-fela";
import type { DivProps } from "../common";

export const ButtonToolbar = ({
  className = "",
  children,
  ...other
}: DivProps) => {
  const { css } = useFela();
  const cx = `${css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flexStart",
  })} button-toolbar ${className}`;
  return (
    <div data-testid="button-toolbar" className={cx} {...other}>
      {children}
    </div>
  );
};
