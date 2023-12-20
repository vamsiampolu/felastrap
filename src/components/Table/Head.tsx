import { ComponentPropsWithoutRef, useContext } from "react";
import { useFela } from "react-fela";
import { TableContext } from "./TableContext";
import { StyleProps } from "../common";

export type TableHeadProps = ComponentPropsWithoutRef<"thead">;

const rule = () => ({
  verticalAlign: "bottom",
});

const borderedRule = ({ bordered }: StyleProps<{ bordered: boolean }>) =>
  bordered
    ? {
        borderWidth: "1px 0",
      }
    : {};

export const TableHead = ({
  className = "",
  children,
  ...props
}: TableHeadProps) => {
  const { bordered = false } = useContext(TableContext);
  const { css } = useFela({ bordered });
  const cx = `${css([rule, borderedRule])} table-head ${className}`.trim();
  return (
    <thead data-testid="table-head" className={cx} {...props}>
      {children}
    </thead>
  );
};
