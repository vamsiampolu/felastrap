import { useFela } from "react-fela";
import { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import { Size, StyleProps } from "../../common";

export type TextInputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "tel"
  | "url";
export type TextInputAttributes =
  | "autoComplete"
  | "disabled"
  | "form"
  | "maxLength"
  | "minLength"
  | "name"
  | "pattern"
  | "placeholder"
  | "defaultValue"
  | "readOnly"
  | "required"
  | "value"
  | "onChange"
  | "onBlur"
  | "onFocus";
export type GlobalAttributes =
  | "autoFocus"
  | "className"
  | "hidden"
  | "id"
  | "inputMode"
  | "spellCheck"
  | "style"
  | "tabIndex"
  | "translate";

export type Attributes = TextInputAttributes | GlobalAttributes;
export type TextInputProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & {
  type?: TextInputType;
  size?: Size;
  plainText?: boolean;
};

const inputRule = () => ({
  appearance: "none",
  backgroundClip: "padding-box",
  backgroundColor: "#fff",
  border: "1px solid #dee2e6",
  borderRadius: "0.375rem",
  color: "#212529",
  display: "block",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  padding: "0.375rem 0.75rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  width: "100%",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":disabled": {
    backgroundColor: "#e9ecef",
    opacity: 1,
  },
  ":focus": {
    backgroundColor: "#fff",
    borderColor: "#86b7fe",
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    color: "#212529",
    outline: 0,
  },
  "::placeholder": {
    color: "rgba(33, 37, 41, 0.75)",
    opacity: 1,
  },
});

const smallInputRule = ({ size }: StyleProps<{ size: Size }>) =>
  size === "small"
    ? {
        minHeight: "calc(1.5em + 0.5rem + calc(1px * 2))",
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

const largeInputRule = ({ size }: StyleProps<{ size: Size }>) =>
  size === "large"
    ? {
        minHeight: "calc(1.5em + 1rem + 2px)",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

const readOnlyPlaintextRule = ({
  readOnly,
  plainText,
}: StyleProps<{ readOnly: boolean; plainText: boolean }>) =>
  readOnly && plainText
    ? {
        display: "block",
        width: "100%",
        padding: "0.375rem 0",
        marginBottom: 0,
        lineHeight: 1.5,
        color: "#212529",
        backgroundColor: "transparent",
        border: "solid transparent",
        borderWidth: "1px 0",
        ":focus": {
          outline: 0,
        },
      }
    : {};

const readOnlyPlainTextSmallRule = ({
  readOnly,
  plainText,
  size,
}: StyleProps<{ readOnly: boolean; plainText: boolean; size: Size }>) =>
  readOnly && plainText && size === "small"
    ? {
        paddingRight: 0,
        paddingLeft: 0,
      }
    : {};

const readOnlyPlainTextLargeRule = ({
  readOnly,
  plainText,
  size,
}: StyleProps<{ readOnly: boolean; plainText: boolean; size: Size }>) =>
  readOnly && plainText && size === "large"
    ? {
        paddingRight: 0,
        paddingLeft: 0,
      }
    : {};

export const TextInput = ({
  plainText = false,
  type = "text",
  id,
  readOnly = false,
  placeholder,
  size = "medium",
  value: controlledValue,
  defaultValue,
  onChange,
  ...props
}: TextInputProps) => {
  const { css } = useFela({ size, readOnly, plainText });
  const [uncontrolled, setUncontrolledValue] = useState(defaultValue ?? "");

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolled;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const inputClassName = `${css([
    inputRule,
    readOnlyPlaintextRule,
    smallInputRule,
    readOnlyPlainTextSmallRule,
    largeInputRule,
    readOnlyPlainTextLargeRule,
  ])} form-control text-field form-control-${size}`;

  return (
    <input
      data-testid="text-input"
      type={type}
      className={inputClassName}
      id={id}
      readOnly={readOnly}
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
      {...props}
    />
  );
};
