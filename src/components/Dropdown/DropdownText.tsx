import { useFela } from "react-fela";
import type { ListItemProps as DropdownTextProps } from "../common";

export type { DropdownTextProps };

export const DropdownText = ({
  className = "",
  children,
  ...other
}: DropdownTextProps) => {
  const { css } = useFela();
  const cx = `${css({
    color: "#212529",
    display: "block",
    padding: "1rem 0.25rem",
  })} dropdown-text`;

  return (
    <li data-testid="dropdown-text-item">
      <span
        data-testid="dropdown-text"
        className={`${cx} ${className || ""}`}
        {...other}
      >
        {children}
      </span>
    </li>
  );
};
