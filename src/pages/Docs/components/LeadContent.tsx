import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const leadRule = () => ({
  fontSize: "calc(1.275rem + .3vw)",
  fontWeight: "300",
  "@media (min-width: 1200px)": {
    fontSize: "1.5rem",
  },
});

export type LeadContentProps = ComponentPropsWithoutRef<"p">;

export const LeadContent = ({ className = "", children }: LeadContentProps) => {
  const { css } = useFela();
  const cx = `${css(leadRule)} bd-lead ${className}`.trim();
  return <p className={cx}>{children}</p>;
};
