import { IStyle } from "fela";
import { useContext } from "react";
import { useFela } from "react-fela";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import { Variant } from "../common";
import { TableContext } from "./TableContext";
import { activeBackgroundColorByVariant, variantRule } from "./variant";

const columnRule = () => ({
  padding: "0.5rem 0.5rem",
  color: "initial",
  backgroundColor: "#fff",
  borderBottomWidth: "1px",
  boxShadow: "inset 0 0 0 9999px initial",
});

const stripedRule = ({
  variant = "default",
  striped = false,
  header = false,
  oddRow = false,
  hover = false,
}) => {
  if (!striped) {
    return variantRule({ variant, striped: false, exclude: header || hover });
  }

  return variantRule({ variant, striped, exclude: header || !oddRow || hover });
};

const borderedRule = ({ bordered = false }) =>
  bordered
    ? {
        borderWidth: "0 1px",
      }
    : {};

const borderlessRule = ({ borderless = false }): IStyle =>
  borderless
    ? {
        borderBottomWidth: 0,
      }
    : {};

const activeRule = ({ variant = "default", active = false }) =>
  active
    ? {
        backgroundColor: activeBackgroundColorByVariant[variant as Variant],
        color: "rgb(0, 0, 0)",
      }
    : {};

export type TableColProps = PolymorphicComponentPropsWithoutRef<
  "th" | "td",
  {
    oddRow?: boolean;
    header?: boolean;
    active?: boolean;
  }
>;

export const TableCol = ({
  children,
  className = "",
  header = false,
  as,
  oddRow = false,
  active = false,
  ...props
}: TableColProps) => {
  const {
    variant = "default",
    striped = false,
    bordered = false,
    borderless = false,
    hover = false,
  } = useContext(TableContext);
  const { css } = useFela({
    variant,
    header,
    as,
    hover,
    striped,
    active,
    oddRow,
    bordered,
    borderless,
  });
  const Component = as || "td";
  const cx = `${css([
    columnRule,
    variantRule,
    stripedRule,
    activeRule,
    borderedRule,
    borderlessRule,
  ])} table-col ${className}`.trim();

  return (
    <Component data-testid="table-col" className={cx} {...props}>
      {children}
    </Component>
  );
};
