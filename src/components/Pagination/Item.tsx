import { ComponentPropsWithoutRef } from "react";
import { PageLink } from "./Link";
import type { Size } from "../common";

export type PageItemProps = ComponentPropsWithoutRef<"li"> &
  Partial<{
    active: boolean;
    disabled: boolean;
    first: boolean;
    label: string;
    last: boolean;
    size: Size;
  }>;

export const PageItem = ({
  active = false,
  className = "",
  disabled = false,
  first = false,
  label = "",
  last = false,
  size = "medium",
  ...other
}: PageItemProps) => {
  return (
    <li
      aria-disabled={disabled}
      aria-current={active ? "page" : undefined}
      data-testid="page-item"
      className={className}
      {...other}
    >
      <PageLink
        size={size}
        active={active}
        disabled={disabled}
        first={first}
        last={last}
      >
        {label}
      </PageLink>
    </li>
  );
};
