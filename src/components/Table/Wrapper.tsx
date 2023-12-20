import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { variantRule } from "./variant";
import { TableContext } from "./TableContext";

const rule = () => ({
  width: "100%",
  marginBottom: "1rem",
  verticalAlign: "top",
  borderColor: "#dee2e6",
});

const borderlessRule = () => ({
  ":not(:first-child)": {
    borderTopWidth: 0,
  },
});

export type WrapperProps = ComponentPropsWithoutRef<"table">;

export const Wrapper = ({
  className = "",
  children,
  ...props
}: WrapperProps) => {
  const {
    hover = false,
    borderless = false,
    variant = "default",
  } = useContext(TableContext);
  const { css } = useFela({ variant, borderless, hover });
  return (
    <table
      data-testid="table"
      className={`${css([
        rule,
        variantRule,
        borderlessRule,
      ])} bs-table ${className}`.trim()}
      {...props}
    >
      {children}
    </table>
  );
};
