import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { TableContext } from "./TableContext";
import { variantRule } from "./variant";
import { StyleProps } from "../common";

const rowRule = () => ({
  padding: "0.5rem 0.5rem",
  color: "initial",
  backgroundColor: "#fff",
  borderBottomWidth: "1px",
  boxShadow: "inset 0 0 0 9999px initial",
});

const borderedRule = ({ bordered }: StyleProps<{ bordered: boolean }>) =>
  bordered
    ? {
        borderWidth: "0 1px",
      }
    : {};

const borderlessRule = ({ borderless = false }) =>
  borderless
    ? {
        borderBottomWidth: 0,
      }
    : {};

export type TableRowProps = ComponentPropsWithoutRef<"tr"> & {
  oddRow?: boolean;
  header?: boolean;
  active?: boolean;
};

export const TableRow = ({
  children,
  className = "",
  header = false,
  ...props
}: TableRowProps) => {
  const {
    variant = "default",
    bordered = false,
    borderless = false,
  } = useContext(TableContext);
  const { css } = useFela({
    variant,
    bordered,
    borderless,
    header,
  });
  const cx = `${css([
    rowRule,
    variantRule,
    borderedRule,
    borderlessRule,
  ])} table-row ${className}`.trim();

  return (
    <tr data-testid="table-row" className={cx} {...props}>
      {children}
    </tr>
  );
};
