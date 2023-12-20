import { IStyle } from "fela";
import { ComponentPropsWithoutRef, ForwardedRef, forwardRef } from "react";
import { useFela } from "react-fela";
import { Size, StyleProps } from "../../common";

export type Attributes =
  | "accept"
  | "capture"
  | "className"
  | "multiple"
  | "name"
  | "value"
  | "disabled"
  | "required"
  | "style"
  | "tabIndex"
  | "hidden"
  | "form"
  | "onChange"
  | "id";

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
  lineHeight: 1.5,
  overflow: "hidden",
  padding: "0.375rem 0.75rem",
  width: "100%",
  cursor: "pointer",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":disabled": {
    backgroundColor: "#e9ecef",
    cursor: "default",
    opacity: 1,
  },
  ":focus": {
    backgroundColor: "#fff",
    borderColor: "#86b7fe",
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    color: "#212529",
    outline: 0,
  },
  "::file-selector-button": {
    padding: "0.375rem 0.75rem",
    margin: "-0.375rem -0.75rem",
    marginRight: "0.75rem",
    marginEnd: "0.75rem",
    marginInlineEnd: "0.75rem",
    color: "#212529",
    backgroundColor: "#f8f9fa",
    pointerEvents: "none",
    borderColor: "inherit",
    borderStyle: "solid",
    borderWidth: 0,
    borderInlineEndWidth: "1px",
    borderRadius: 0,
    transition:
      "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    ":hover:not(:disabled):not([readonly])": {
      backgroundColor: "#e9ecef",
    },
  },
});

const smallRule = ({ size }: StyleProps<{ size: Size }>) =>
  size === "small"
    ? {
        minHeight: "calc(1.5em + 0.5rem + 2px)",
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
        "::file-selector-button": {
          padding: "0.25rem 0.5rem",
          margin: "-0.25rem -0.5rem",
          "-webkit-margin-end": "0.5rem",
          marginRight: "0.5rem",
          marginInlineEnd: "0.5rem",
        },
      }
    : {};

const largeRule = ({ size }: StyleProps<{ size: Size }>): IStyle =>
  size === "large"
    ? {
        minHeight: "calc(1.5em + 1rem + 2px)",
        padding: "0.5rem 1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
        "::file-selector-button": {
          padding: "0.5rem 1rem",
          margin: "-0.5rem -1rem",
          marginRight: "1rem",
          "-webkit-margin-end": "1rem",
          marginInlineEnd: "1rem",
        },
      }
    : {};

export type FileUploadProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & {
  size?: Size;
};

export const FileUploadInputComponent = (
  { id, size = "medium", className = "", ...props }: FileUploadProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const { css } = useFela({ size });
  const cx = `${css([
    rule,
    smallRule,
    largeRule,
  ])} form-control file-upload ${className}`.trim();
  return (
    <input
      data-testid="file-upload"
      ref={ref}
      className={cx}
      type="file"
      id={id}
      {...props}
    />
  );
};

export const FileUploadInput = forwardRef(FileUploadInputComponent);
