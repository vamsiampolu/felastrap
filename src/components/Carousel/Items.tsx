import type { DivProps } from "../common";
import { useFela } from "react-fela";

const itemsRule = () => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",
});

export const Items = ({ className = "", children }: DivProps) => {
  const { css } = useFela();
  const cx = `${css(itemsRule)} ${className} carousel-inner`;

  return (
    <div data-testid="carousel-items" className={cx}>
      {children}
    </div>
  );
};
