import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type WrapperProps = ComponentPropsWithoutRef<"ul"> &
  Partial<{ size: number }>;

export const Wrapper = ({
  className = "",
  children,
  ...other
}: WrapperProps) => {
  const { css } = useFela();
  const style = {
    display: "flex",
    listStyle: "none",
    paddingLeft: 0,
  };
  const label = other["aria-label"] || "Page Navigation";
  const cx = `${css(style)} ${className}`;
  return (
    <nav data-testid="pagination-wrapper" aria-label={label}>
      <ul className={cx}>{children}</ul>
    </nav>
  );
};
