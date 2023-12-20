import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  color: "rgba(33, 37, 41, 0.75)",
  fontSize: "1rem",
  marginBottom: "1.5rem!important",
  "@media (min-width: 768px) and (min-width: 1200px)": {
    fontSize: "1.5rem",
  },
  "@media (min-width: 768px)": {
    fontSize: "calc(1.275rem + 0.3vw)",
  },
});

export type LeadProps = ComponentPropsWithoutRef<"p">;

export const Lead = ({ children, ...props }: LeadProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} lead`;
  return (
    <p className={cx} {...props}>
      {children}
    </p>
  );
};
