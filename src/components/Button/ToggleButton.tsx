import { Button, type ButtonProps } from "./Button";
import { CheckboxInputProps } from "../Form";
import { useFela } from "react-fela";
import { useEffect, useRef, useState } from "react";
import { ColorMapping, Variant } from "../common";
import { isTest } from "../../utils";

export type InputType = "checkbox" | "radio";
export type ToggleButtonProps = Omit<ButtonProps<"label">, "type"> &
  Omit<CheckboxInputProps, "reverse"> & { type?: InputType };

const colorByVariant: ColorMapping = {
  danger: "#fff",
  default: "#333",
  info: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  warning: "#000",
};

const outlineColorByVariant: ColorMapping = {
  danger: "#dc3545",
  default: "#333",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const outlineActiveColorByVariant: ColorMapping = {
  danger: "#fff",
  default: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  info: "#000",
  warning: "#000",
};

const outlineBoxShadowColor: ColorMapping = {
  danger: "rgba(220, 53, 69, 0.5)",
  default: "rgba(248, 249, 250, 0.5)",
  info: "rgba(13, 202, 240, 0.5)",
  primary: "rgba(13, 110, 253, 0.5)",
  secondary: "rgba(108, 117, 125, 0.5)",
  success: "rgba(25, 135, 84, 0.5)",
  warning: "rgba(255, 193, 7, 0.5)",
};

const backgroundColorByVariant: ColorMapping = {
  default: "#fff",
  danger: "#dc3545",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const borderColorByVariant: ColorMapping = {
  danger: "#dc3545",
  default: "#ccc",
  info: "#0dcaf0",
  primary: "#2e6da4",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const activeColor: ColorMapping = {
  default: "#333",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  info: "#000",
  warning: "#000",
  danger: "#fff",
};

const activeBorderColor: ColorMapping = {
  danger: "#a52834",
  default: "#adadad",
  info: "#25cff2",
  primary: "#0a53be",
  secondary: "#51585e",
  success: "#13653f",
  warning: "#ffc720",
};

const activeBackgroundColor: ColorMapping = {
  danger: "#b02a37",
  default: "#e6e6e6",
  info: "#3dd5f3",
  primary: "#0a58ca",
  secondary: "#565e64",
  success: "#146c43",
  warning: "#ffcd39",
};

const focusBoxShadow: ColorMapping = {
  danger: "rgba(225, 83, 97, .5)",
  default: "rgba(0, 0, 0, 0.125)",
  info: "rgba(11, 172, 204, .5)",
  primary: "rgba(49, 132, 253, .5)",
  secondary: "rgba(130, 138, 145, .5)",
  success: "rgba(60, 153, 110, .5)",
  warning: "rgba(217, 164, 6, .5)",
};

const checkRule = () => ({
  position: "absolute",
  clip: "rect(0, 0, 0, 0)",
  pointerEvents: "none",
});

const labelRule = ({ outline = false, variant = "default" }) => ({
  borderColor: "rgb(0, 0, 0)",
  borderWidth: 0,
  ":hover": {
    color: outline
      ? outlineColorByVariant[variant as Variant]
      : colorByVariant[variant as Variant],
    backgroundColor: backgroundColorByVariant[variant as Variant],
    borderColor: borderColorByVariant[variant as Variant],
  },
});

const checkedLabelRule = ({
  outline = false,
  variant = "default",
  checked = false,
}) =>
  checked
    ? {
        color: `${
          outline
            ? outlineActiveColorByVariant[variant as Variant]
            : activeColor[variant as Variant]
        } !important`,
        backgroundColor: outline
          ? outlineColorByVariant[variant as Variant]
          : activeBackgroundColor[variant as Variant],
        borderColor: outline
          ? outlineColorByVariant[variant as Variant]
          : activeBorderColor[variant as Variant],
        borderWidth: "1px",
        ":focus-visible": {
          boxShadow: "0 0 0 0.25rem rgba(0, 0, 0, 0.125)",
        },
      }
    : {};

const disabledLabelRule = ({ disabled = false }) =>
  disabled
    ? {
        pointerEvents: "none",
        filter: "none",
        opacity: 0.65,
      }
    : {};

const focusedVisibleRule = ({
  outline = false,
  variant = "default",
  focusedVisible = false,
}) =>
  focusedVisible
    ? {
        borderColor: outline
          ? outlineColorByVariant[variant as Variant]
          : activeBorderColor[variant as Variant],
        outline: 0,
        boxShadow: `0 0 0 0.25rem ${
          outline
            ? outlineBoxShadowColor[variant as Variant]
            : focusBoxShadow[variant as Variant]
        }`,
      }
    : {};

export const ToggleButton = ({
  id,
  name,
  className = "",
  type = "checkbox",
  value,
  variant = "default",
  outline = false,
  checked = false,
  disabled = false,
  onChange = () => undefined,
  ...props
}: ToggleButtonProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focusedVisible, setFocusedVisible] = useState(false);

  useEffect(() => {
    const selector = isTest() ? ":focus" : ":focus-visible";
    const updatedValue = inputRef?.current?.matches(selector) ?? false;
    setFocusedVisible(updatedValue);
  }, [inputRef, setFocusedVisible]);

  const { css } = useFela({
    checked,
    disabled,
    focusedVisible,
    variant,
    outline,
  });

  const labelClassName = `${css([
    labelRule,
    checkedLabelRule,
    disabledLabelRule,
    focusedVisibleRule,
  ])} toggle-button-label`;
  const inputClassName = `${css(
    checkRule,
  )} toggle-button-input ${className}`.trim();

  return (
    <>
      <input
        data-testid="toggle-button-input"
        ref={inputRef}
        className={inputClassName}
        name={name}
        type={type}
        value={value}
        autoComplete="off"
        checked={checked}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={onChange}
        id={id}
      />
      <Button
        data-testid="toggle-button-label"
        outline={outline}
        variant={variant}
        className={labelClassName}
        as="label"
        htmlFor={id}
        {...props}
      />
    </>
  );
};
