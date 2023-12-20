import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type ItemsProps = ComponentPropsWithoutRef<"ul">;

const rule = () => ({
  paddingLeft: 0,
  paddingBottom: "0.5rem !important",
  fontSize: "0.875rem",
  listStyle: "none",
  fontWeight: 400,
});

export const Items = ({ className = "", children }: ItemsProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} content-items-nav ${className}`.trim();
  return <ul className={cx}>{children}</ul>;
};
