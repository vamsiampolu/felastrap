import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
} from "react";
import { Label } from "./Label";
import { useFela } from "react-fela";

export type Attributes =
  | "min"
  | "max"
  | "step"
  | "id"
  | "name"
  | "className"
  | "required"
  | "disabled"
  | "defaultValue"
  | "list"
  | "onChange"
  | "value"
  | "onInput";
export type RangeProps = Pick<ComponentPropsWithoutRef<"input">, Attributes> & {
  label?: ReactNode;
};

const rule = () => ({
  appearance: "none",
  backgroundColor: "transparent",
  height: "1.5rem",
  padding: 0,
  width: "100%",
  ":disabled": {
    pointerEvents: "none",
  },
  ":disabled::webkit-slider-thumb": {
    backgroundColor: "rgba(33, 37, 41, 0.75)",
  },
  ":disabled::-moz-range-thumb": {
    backgroundColor: "rgba(33, 37, 41, 0.75)",
  },
  ":focus": {
    outline: 0,
  },
  "::-webkit-slider-thumb": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    width: "1rem",
    height: "1rem",
    marginTop: "-0.25rem",
    appearance: "none",
    backgroundColor: "#0d6efd",
    border: 0,
    borderRadius: "1rem",
    transition:
      "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    ":active": {
      backgroundColor: "#b6d4fe",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  "::-webkit-slider-runnable-track": {
    width: "100%",
    height: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "#e9ecef",
    borderColor: "transparent",
    borderRadius: "1rem",
  },
  "::-moz-range-track": {
    width: "100%",
    height: "0.5rem",
    color: "transparent",
    cursor: "pointer",
    backgroundColor: "#e9ecef",
    borderColor: "transparent",
    borderRadius: "1rem",
  },
  "::-moz-range-thumb": {
    boxShadow: "0 0 0 1px #fff, 0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    width: "1rem",
    height: "1rem",
    marginTop: "-0.25rem",
    appearance: "none",
    backgroundColor: "#0d6efd",
    border: 0,
    borderRadius: "1rem",
    transition:
      "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    ":active": {
      backgroundColor: "#b6d4fe",
    },
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },
  "::-moz-focus-outer": {
    border: 0,
  },
});

export const Range = ({
  id,
  className = "",
  label,
  value: controlledValue,
  onChange,
  defaultValue,
  ...props
}: RangeProps) => {
  const { css } = useFela();
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);

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

  const cx = `${css(rule)} form-range ${className}`.trim();
  return (
    <>
      {label && <Label htmlFor={id!}>{label}</Label>}
      <input
        type="range"
        value={value}
        onChange={handleChange}
        data-testid="form-range"
        id={id}
        className={cx}
        {...props}
      />
    </>
  );
};
