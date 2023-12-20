import { CaretDown } from "./CaretDown";
import { CaretUp } from "./CaretUp";
import { CaretEnd } from "./CaretEnd";
import { CaretStart } from "./CaretStart";
import type { CaretDirection, DivProps } from "../common";

export type CaretWrapperProps = DivProps & {
  direction?: CaretDirection;
  width?: string;
};

export const Caret = ({
  direction = "down",
  width = "0.3em",
  ...other
}: CaretWrapperProps) => {
  switch (direction) {
    case "up":
      return <CaretUp width={width} {...other} />;

    case "end":
      return <CaretEnd width={width} {...other} />;

    case "start":
      return <CaretStart width={width} {...other} />;

    default:
      return <CaretDown width={width} {...other} />;
  }
};
