import { createContext } from "react";
import type { Variant } from "../common";

export type TableContextValue = {
  bordered: boolean;
  borderless: boolean;
  variant: Variant;
  striped: boolean;
  hover: boolean;
};

export const TableContext = createContext<TableContextValue>({
  bordered: false,
  borderless: false,
  variant: "default",
  striped: false,
  hover: false,
});
