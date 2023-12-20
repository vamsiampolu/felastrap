import type { ComponentPropsWithoutRef } from "react";
import { PageItem } from "./Item";
import { Size } from "../common";
const defaultLabel = "\u00AB";

export type PrevProps = ComponentPropsWithoutRef<"li"> &
  Partial<{ disabled: boolean; label: string; size: Size }>;

export const Prev = ({
  label = defaultLabel,
  disabled = false,
  size = "medium",
  ...other
}: PrevProps) => (
  <PageItem
    data-testid="prev"
    active={false}
    disabled={disabled}
    first
    label={label}
    size={size}
    {...other}
  />
);
