import { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import { useFela } from "react-fela";
import { Size, StyleProps } from "../../common";

const rule = () => ({
  cursor: "pointer",
  display: "block",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#212529",
  appearance: "none",
  backgroundColor: "#fff",
  backgroundClip: "padding-box",
  border: "1px solid #dee2e6",
  borderRadius: "0.375rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  width: "3rem",
  height: "calc(1.5em + 0.75rem + 2px)",
  padding: "0.375rem",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":focus": {
    color: "#212529",
    backgroundColor: "#fff",
    borderColor: "#86b7fe",
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
  "::color-swatch": {
    border: "0 !important",
    borderRadius: "0.375rem",
  },
  ":disabled": {
    cursor: "default",
  },
  ":readonly": {
    cursor: "default",
  },
});

const smallRule = ({ size }: StyleProps<{ size: Size }>) =>
  size === "small" ? { height: "calc(1.5em + 0.5rem + 2px)" } : {};
const largeRule = ({ size }: StyleProps<{ size: Size }>) =>
  size === "large" ? { height: "calc(1.5em + 1rem + 2px)" } : {};

export type Attributes =
  | "autoComplete"
  | "defaultValue"
  | "list"
  | "value"
  | "id"
  | "className"
  | "onChange"
  | "onInput"
  | "onSelect"
  | "title";

export type ColorPickerProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & { size?: Size };

export const ColorPicker = ({
  id,
  className = "",
  title,
  value: controlledValue,
  size = "medium",
  onChange: onChange,
  defaultValue,
  ...props
}: ColorPickerProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );
  const { css } = useFela({ size });

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const cx = `${css([
    rule,
    smallRule,
    largeRule,
  ])} form-control-color ${className}`.trim();

  return (
    <input
      data-testid="color-picker"
      value={value}
      onChange={handleChange}
      id={id}
      type="color"
      className={cx}
      title={title}
      {...props}
    />
  );
};
