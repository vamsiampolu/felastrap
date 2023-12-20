import { IStyle } from "fela";
import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { TableContext } from "./TableContext";
import { hoveredBackgroundColorByVariant } from "./variant";
import { Variant } from "../common";

export type TableBodyProps = ComponentPropsWithoutRef<"tbody"> & {
  striped?: boolean;
  hover?: boolean;
  bordered?: boolean;
};

const rule = () => ({ verticalAlign: "inherit" });

const hoverRule = ({ hover = false, variant = "default" }): IStyle =>
  hover
    ? {
        "> tr:hover > *": {
          cursor: "pointer",
          color: "#000",
          backgroundColor: hoveredBackgroundColorByVariant[variant as Variant],
        },
      }
    : {};

const borderedRule = ({ bordered = false }) =>
  bordered
    ? {
        borderWidth: "1px 0",
      }
    : {};

export const TableBody = ({
  className = "",
  children,
  ...props
}: TableBodyProps) => {
  const { hover, bordered, variant = "default" } = useContext(TableContext);
  const { css } = useFela({ hover, bordered, variant });
  const cx = `${css([
    rule,
    hoverRule,
    borderedRule,
  ])} table-body ${className}`.trim();
  return (
    <tbody data-testid="table-body" className={cx} {...props}>
      {children}
    </tbody>
  );
};
