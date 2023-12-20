import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type ItemsProps = ComponentPropsWithoutRef<"ul">;

const contentNavRule = () => ({
  listStyle: "none",
  paddingLeft: 0,
  paddingBottom: "1rem",
  "@media (min-width: 992px)": {
    paddingRight: "0.5rem !important",
  },
  "@media (min-width: 768px)": {
    paddingBottom: "0.5rem !important",
  },
});

export const Groups = ({ className = "", children }: ItemsProps) => {
  const { css } = useFela();
  const cx = `${css(contentNavRule)} bd-links-nav ${className}`.trim();
  return <ul className={cx}>{children}</ul>;
};
