import { useListItem } from "@floating-ui/react";
import { useContext } from "react";
import { useFela } from "react-fela";
import type { StyleProps } from "../common";
import { DropdownContext } from "./DropdownContext";
export type DropDownItemProps = {
  label: string;
  disabled: boolean;
};

export type CssProps = {
  active: boolean;
  disabled: boolean;
};

const rule = () => {
  const color = "#212529";
  const backgroundColor = "transparent";

  return {
    backgroundColor,
    border: 0,
    borderRadius: 0,
    clear: "both",
    color,
    display: "block",
    fontWeight: 400,
    padding: "0.25rem 1rem",
    textAlign: "inherit",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ":focus": {
      color: "#212529",
      backgroundColor: "#f8f9fa",
    },
    ":hover": {
      color: "#212529",
      backgroundColor: "#f8f9fa",
    },
  };
};

const activeRule = ({ active }: StyleProps<CssProps>) => {
  if (active) {
    return {
      backgroundColor: "#0d6efd",
      color: "#fff",
      textDecoration: "none",
    };
  }

  return {};
};

const disabledRule = ({ disabled }: StyleProps<CssProps>) => {
  if (disabled) {
    return {
      backgroundColor: "#ff",
      color: "#212529",
      opacity: "0.5",
      pointerEvents: "none",
    };
  }

  return {};
};

export const DropdownItem = ({
  label,
  disabled = false,
}: DropDownItemProps) => {
  const { activeIndex, selectedIndex, getItemProps, handleSelect } =
    useContext(DropdownContext);

  const { ref, index } = useListItem({ label });

  const isActive = activeIndex === index;
  const isSelected = selectedIndex === index;
  const tabIndex = isActive ? 0 : -1;
  const selected = isActive && isSelected;

  const onClick = () => handleSelect(index);
  const itemProps = getItemProps({ onClick });

  const { css } = useFela({ active: isActive, disabled });
  const className = `${css([rule, activeRule, disabledRule])} dropdown-item`;

  return (
    <li
      data-testid="dropdown-item"
      aria-disabled={disabled}
      aria-selected={selected}
      className={className}
      ref={ref}
      role="option"
      tabIndex={tabIndex}
      {...itemProps}
    >
      {label}
    </li>
  );
};
