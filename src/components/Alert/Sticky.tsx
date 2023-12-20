import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export const Sticky = ({
  className = "",
  children,
}: ComponentPropsWithoutRef<"div">) => {
  const { css } = useFela();
  const style = {
    position: "sticky",
    top: "56px",
    zIndex: 10,
  };

  const cx = `${css(style)} ${className}`.trim();
  return (
    <div data-testid="sticky" className={cx}>
      {children}
    </div>
  );
};
