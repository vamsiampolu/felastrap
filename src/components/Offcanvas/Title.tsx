import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  marginBottom: 0,
  lineHeight: 1.5,
});

export type OffcanvasTitleProps = ComponentPropsWithoutRef<"h5">;

export const OffcanvasTitle = ({
  className = "",
  id,
  children,
}: OffcanvasTitleProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} offcanvas-title ${className}`.trim();
  return (
    <h5 data-testid="offcanvas-title" className={cx} id={id}>
      {children}
    </h5>
  );
};
