import type { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { useFloatingTextContext } from "./useFloatingTextContext";
import { StyleProps } from "../../../common";

export type RuleProps = StyleProps<{
  disabled: boolean;
  placeholder: boolean;
  focused: boolean;
  plainText: boolean;
  readOnly: boolean;
  autoFill: boolean;
}>;

const labelRule = () => ({
  display: "inline-block",
  marginBottom: "0.5rem",
  border: "1px solid transparent",
  height: "100%",
  left: 0,
  overflow: "hidden",
  padding: "1rem 0.75rem",
  pointerEvents: "none",
  position: "absolute",
  textAlign: "start",
  textOverflow: "ellipsis",
  top: 0,
  transformOrigin: "0 0",
  transition: "opacity 0.1s ease-in-out, transform 0.1s ease-in-out",
  whiteSpace: "nowrap",
  zIndex: 2,
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
});

const disabledRule = ({ disabled }: RuleProps) =>
  disabled
    ? {
        color: "#6c757d",
        "::after": {
          backgroundColor: "#e9ecef",
        },
      }
    : {};

const noPlaceholderRule = ({ placeholder }: RuleProps) =>
  placeholder
    ? {
        transform: "scale(0.85) translateY(0.5rem) translateX(0.15rem)",
      }
    : {
        color: "rgba(33, 37, 41, 0.65)",
        transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
        "::after": {
          position: "absolute",
          inset: "1rem 0.375rem",
          zIndex: -1,
          height: "1.5em",
          content: "",
          backgroundColor: "#fff",
          borderRadius: "0.375rem",
        },
      };

const focusRule = ({ focused }: RuleProps) =>
  focused
    ? {
        color: "rgba(33, 37, 41, 0.65)",
        transform:
          "scale(0.85) translateY(-0.5rem) translateX(0.15rem) !important",
        "::after": {
          position: "absolute",
          inset: "1rem 0.375rem",
          zIndex: -1,
          height: "1.5em",
          content: "",
          backgroundColor: "#fff",
          borderRadius: "0.375rem",
        },
      }
    : {};

const plainTextReadOnlyRule = ({ plainText, readOnly }: RuleProps) =>
  plainText && readOnly
    ? {
        borderWidth: "1px 0",
        color: "rgba(33, 37, 41, 0.65)",
        transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
        "::after": {
          position: "absolute",
          inset: "1rem 0.375rem",
          zIndex: -1,
          height: "1.5em",
          content: "",
          backgroundColor: "#fff",
          borderRadius: "0.375rem",
        },
      }
    : {};

const autofillRule = ({ autoFill }: RuleProps) => {
  if (autoFill) {
    return {
      color: "rgba(33, 37, 41, 0.65)",
      transform: "scale(0.85) translateY(-0.5rem) translateX(0.15rem)",
    };
  }

  return {};
};

export type FloatingLabelProps = Omit<
  ComponentPropsWithoutRef<"label">,
  "children"
> & { label?: string };

export const FloatingLabel = ({
  className = "",
  label,
  htmlFor,
  ...props
}: FloatingLabelProps) => {
  const {
    autoFilled: autoFill = false,
    disabled = false,
    focused = false,
    placeholderShown: placeholder = false,
    plainText = false,
    readOnly = false,
  } = useFloatingTextContext();

  const { css } = useFela({
    autoFill,
    disabled,
    focused,
    placeholder,
    plainText,
    readOnly,
  });

  const labelClassName = `${css([
    labelRule,
    focusRule,
    disabledRule,
    noPlaceholderRule,
    plainTextReadOnlyRule,
    autofillRule,
  ])} floating-label ${className}`.trim();

  return (
    <label
      data-testid="floating-label"
      htmlFor={htmlFor}
      className={labelClassName}
      {...props}
    >
      {label}
    </label>
  );
};
