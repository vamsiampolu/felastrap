import { Placement } from "@floating-ui/core";
import type { CaretDirection, Size } from "../common";
import type { DropdownDirection } from "../common";
export const paddingBySize: Record<Size, string> = {
  small: "0.375rem",
  medium: "0.5625rem",
  large: "0.75rem",
};

export const transformByDirection: Record<DropdownDirection, string> = {
  down: "translate3d(0px, 40px, 0px)",
  centered: "translate3d(14px, 40px, 0px)",
  up: "translate3d(0px, -40px, 0px)",
  end: "translate3d(163.5px, 0px, 0px)",
  start: "translate3d(-170px, 0px, 0px)",
};

export const placementByDirection: Record<DropdownDirection, Placement> = {
  down: "bottom-start",
  up: "top-start",
  end: "right-start",
  start: "left-start",
  centered: "bottom",
};

export const caretDirectionByDropdown: Record<
  DropdownDirection,
  CaretDirection
> = {
  down: "down",
  up: "up",
  end: "end",
  start: "start",
  centered: "down",
};
