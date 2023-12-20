import { ReactNode } from "react";
import { Variant } from "../common";
import { TableBody } from "./Body";
import { TableCol as Col, TableColProps } from "./Col";
import { TableHead } from "./Head";
import { TableRow as Row, TableRowProps } from "./Row";
import { Wrapper } from "./Wrapper";
import { TableContext } from "./TableContext";

export type ColData = Omit<
  TableColProps,
  "children" | "borderless" | "bordered" | "variant" | "as"
> & {
  rowHeader?: boolean;
  value: ReactNode;
};
export type RowData = Omit<TableRowProps, "children"> & {
  cols: ColData[];
};

const isOdd = (num: number) => Math.floor(num / 2) * 2 !== num;

export type HeaderCol = Omit<TableColProps, "children" | "as" | "scope"> & {
  value: ReactNode;
};
export type HeaderRow = Omit<
  TableRowProps,
  "children" | "borderless" | "bordered"
> & { cols: HeaderCol[] };

export type TableProps = {
  variant?: Variant;
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  rows: RowData[];
  header: HeaderRow;
};

export const Table = ({
  variant = "default",
  bordered = false,
  borderless = false,
  striped = false,
  hover = false,
  header,
  rows = [],
}: TableProps) => {
  const ctxValue = {
    variant,
    bordered,
    borderless,
    striped,
    hover,
  };

  const { cols: headerCols = [], ...headerProps } = header;
  return (
    <TableContext.Provider value={ctxValue}>
      <Wrapper>
        <TableHead>
          <Row header {...headerProps}>
            {headerCols.map(({ value, ...headerColProps }, index) => (
              <Col
                header
                key={`header-col-${index}`}
                as="th"
                scope="col"
                {...headerColProps}
              >
                {value}
              </Col>
            ))}
          </Row>
        </TableHead>
        <TableBody>
          {rows.map(({ cols: rowCols, active = false, ...rowProps }, index) => {
            return (
              <Row key={`row-${index + 1}`} {...rowProps}>
                {rowCols.map(
                  (
                    {
                      rowHeader = false,
                      value,
                      active: colActive = false,
                      ...colProps
                    },
                    colIndex,
                  ) => (
                    <Col
                      active={active || colActive}
                      className={`col-row-${index + 1}-${colIndex + 1}`}
                      oddRow={isOdd(index + 1)}
                      key={`col-row${index + 1}-${colIndex + 1}`}
                      as={rowHeader ? "th" : "td"}
                      scope={rowHeader ? "row" : undefined}
                      {...colProps}
                    >
                      {value}
                    </Col>
                  ),
                )}
              </Row>
            );
          })}
        </TableBody>
      </Wrapper>
    </TableContext.Provider>
  );
};
