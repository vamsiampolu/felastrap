import { DivProps } from "../common";
import { useFela } from "react-fela";

export const Wrapper = ({ className = "", children, ...other }: DivProps) => {
  const { css } = useFela();
  const cx = `${css({ position: "relative" })} ${className} carousel`;
  return (
    <div data-testid="carousel" className={cx} {...other}>
      {children}
    </div>
  );
};
