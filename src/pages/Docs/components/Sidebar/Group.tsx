import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type GroupProps = ComponentPropsWithoutRef<"li">;

const rule = () => ({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
});

export const Group = ({ className = "", children }: GroupProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-links-group ${className}`.trim();
  return <li className={cx}>{children}</li>;
};
