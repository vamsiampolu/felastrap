import type { Size } from "../common";
import { PageItem } from "./Item";
import type { ComponentPropsWithoutRef } from "react";

export type NextProps = ComponentPropsWithoutRef<"li"> &
  Partial<{ disabled: boolean; label: string; size: Size }>;

const defaultLabel = "\u00BB";
export const Next = ({
  disabled = false,
  size = "medium",
  label = defaultLabel,
  ...other
}: NextProps) => {
  return (
    <PageItem
      data-testid="next"
      active={false}
      disabled={disabled}
      last
      label={label}
      size={size}
      {...other}
    />
  );
};
