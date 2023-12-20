import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  display: "flex",
  fontSize: "1rem",
  fontWeight: 400,
  "@media((min-width: 768px)": {
    fontSize: "1.25rem",
  },
});

export const Lead = ({
  children,
  className = "",
  ...props
}: ComponentPropsWithoutRef<"p">) => {
  const { css } = useFela();
  const cx = `${css(rule)} lead column-lead ${className}`.trim();
  return (
    <p className={cx} {...props}>
      {children}
    </p>
  );
};
