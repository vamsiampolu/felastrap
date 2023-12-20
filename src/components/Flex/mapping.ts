import { CSSProperties } from "fela";

export type Order = "first" | "last" | 0 | 1 | 2 | 3 | 4 | 5;

export const justifyValues = [
  "start",
  "end",
  "center",
  "between",
  "around",
  "evenly",
];

export const justifyMapping: Record<string, CSSProperties["justifyContent"]> = {
  around: "space-around",
  between: "space-between",
  center: "center",
  end: "flex-end",
  evenly: "space-evenly",
  start: "flex-start",
};

export const alignValues = ["start", "end", "center", "baseline", "stretch"];
export const orderValues = ["first", "last", 0, 1, 2, 3, 4, 5];

export const alignMapping: Record<string, CSSProperties["alignItems"]> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
};

/**
 * @description Get the order multiplier based on the order prop.
 * @param {Order} order Order prop for a column
 * @returns {number} A number between -1 and 6.
 */
export const getOrder = (order: Order): CSSProperties["order"] => {
  if (order === "first") return -1;
  if (order === "last") return 6;

  return order as CSSProperties["order"];
};
