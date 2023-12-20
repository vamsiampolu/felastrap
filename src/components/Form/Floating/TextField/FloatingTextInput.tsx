import { useFela } from "react-fela";
import type { TextInputProps } from "../../TextField/TextInput";
import {
  useState,
  type FocusEvent,
  type FocusEventHandler,
  type ForwardedRef,
  ChangeEvent,
} from "react";
import { useFloatingTextContext } from "./useFloatingTextContext";
import { FloatingTextContextValue } from "./FloatingTextContext";
import { Size, StyleProps } from "../../../common";

type RuleProps = StyleProps<{
  group: boolean;
  size: Size;
  readOnly: boolean;
  plainText: boolean;
}>;

const rule = () => ({
  appearance: "none",
  backgroundClip: "padding-box",
  backgroundColor: "#fff",
  border: "1px solid #dee2e6",
  borderRadius: "0.375rem",
  color: "#212529",
  display: "block",
  fontSize: "1rem",
  fontWeight: 400,
  height: "calc(3.5rem + 2px)",
  lineHeight: 1.25,
  minHeight: "calc(3.5rem + 2px)",
  padding: "1rem 0.75rem",
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
    opacity: 1,
    color: "transparent",
  },
  ":not(:placeholder-shown)": {
    paddingTop: "1.625rem",
    paddingBottom: "0.625rem",
  },
  ":-webkit-autofill": {
    paddingTop: "1.625rem",
    paddingBottom: "0.625rem",
  },
});

const groupRule = ({ group }: RuleProps) =>
  group
    ? {
        position: "relative",
        flex: "1 1 auto",
        // width: "1%",
        minWidth: 0,
        ":focus": {
          zIndex: 5,
        },
      }
    : {};

const largeGroupInputRule = ({ group, size }: RuleProps) =>
  group && size === "large"
    ? {
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

const smallGroupInputRule = ({ group, size }: RuleProps) =>
  group && size === "small"
    ? {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

const smallInputRule = ({ size }: RuleProps) =>
  size === "small"
    ? {
        minHeight: "calc(1.5em + 0.5rem + calc(1px * 2))",
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

const largeInputRule = ({ size }: RuleProps) =>
  size === "large"
    ? {
        minHeight: "calc(1.5em + 1rem + 2px)",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

const readOnlyPlaintextRule = ({ readOnly, plainText }: RuleProps) =>
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
}: RuleProps) =>
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
}: RuleProps) =>
  readOnly && plainText && size === "large"
    ? {
        paddingRight: 0,
        paddingLeft: 0,
      }
    : {};

export type FloatingTextInputProps = Omit<
  TextInputProps,
  "readOnly" | "plainText" | "disabled"
>;

export const FloatingTextInput = ({
  className = "",
  id,
  size = "medium",
  value: controlledValue,
  type = "text",
  defaultValue,
  onChange,
  ...props
}: FloatingTextInputProps) => {
  const {
    readOnly = false,
    plainText = false,
    disabled = false,
    group = false,
    inputRef,
    setFocused,
    setPlaceholderShown,
  } = useFloatingTextContext() as FloatingTextContextValue;
  const { css } = useFela({ readOnly, plainText, disabled, size, group });
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const cx = `${css([
    rule,
    groupRule,
    smallInputRule,
    smallGroupInputRule,
    largeInputRule,
    largeGroupInputRule,
    readOnlyPlaintextRule,
    readOnlyPlainTextSmallRule,
    readOnlyPlainTextLargeRule,
  ])} ${className}`.trim();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const onFocus: FocusEventHandler<HTMLInputElement> = () => {
    if (
      !disabled &&
      !readOnly &&
      !plainText &&
      setFocused &&
      setPlaceholderShown
    ) {
      setFocused(true);
      setPlaceholderShown(false);
    }
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (setFocused && setPlaceholderShown) {
      setFocused(false);
      if (!e.target.value) {
        setPlaceholderShown(true);
      }
    }
  };

  return (
    <input
      data-testid="floating-text-input"
      type={type}
      ref={inputRef as ForwardedRef<HTMLInputElement>}
      className={cx}
      id={id}
      disabled={disabled}
      readOnly={readOnly}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={handleChange}
      value={value}
      {...props}
    />
  );
};
