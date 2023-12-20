import { useFela } from "react-fela";
import type { PargraphProps } from "../common";

export const CardText = ({
  className = "",
  children,
  ...other
}: PargraphProps) => {
  const { css } = useFela();
  const cx = `${css({ marginTop: 0, marginBottom: "1rem" })} ${
    className || ""
  }`.trim();
  return (
    <p data-testid="card-text" className={cx} {...other}>
      {children}
    </p>
  );
};
