import { useFela } from "react-fela";
import { ComponentPropsWithoutRef } from "react";

export type DropdownDividerProps = ComponentPropsWithoutRef<"hr">;

export const DropdownDivider = ({
  className = "",
  ...props
}: DropdownDividerProps) => {
  const { css } = useFela();
  const cx = css({
    margin: "0.5rem 0",
    overflow: "hidden",
    borderTop: "1px solid rgba(0, 0, 0, 0.175)",
    opacity: 1,
  });
  return (
    <li data-testid="dropdown-divider-item">
      <hr
        data-testid="dropdown-divider"
        className={`${cx} dropdown-divider ${className || ""}`}
        {...props}
      />
    </li>
  );
};
