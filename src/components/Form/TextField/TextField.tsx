import { useFela } from "react-fela";
import { Label } from "../Controls/Label";
import { TextInput, TextInputProps } from "./TextInput";
import { FormText } from "../Controls/FormText";
import {
  FloatingLabel,
  FloatingTextField,
  FloatingTextInput,
} from "../Floating";

export type RegularTextFieldProps = TextInputProps & {
  id: string;
  label: string;
  text?: string;
};

export const RegularTextField = ({
  id,
  type = "text",
  className = "",
  placeholder,
  size = "medium",
  readOnly = false,
  plainText = false,
  label,
  text,
  ...props
}: RegularTextFieldProps) => {
  const { css } = useFela({ size, plainText, readOnly });
  const wrapperClassName = `${css({
    marginBottom: "1rem",
  })} ${className}`.trim();

  return (
    <div data-testid="text-field" className={wrapperClassName}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <TextInput
        id={id}
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        plainText={plainText}
        size={size}
        {...props}
      />
      {text && <FormText>{text}</FormText>}
    </div>
  );
};

export type TextFieldProps = RegularTextFieldProps & { floating?: boolean };
export const TextField = ({
  id,
  disabled = false,
  readOnly = false,
  plainText = false,
  label,
  floating = false,
  ...props
}: TextFieldProps) => {
  if (floating) {
    return (
      <FloatingTextField
        disabled={disabled}
        readOnly={readOnly}
        plainText={plainText}
        id={id}
      >
        <FloatingLabel htmlFor={id} label={label} />
        <FloatingTextInput id={id} {...props} />
      </FloatingTextField>
    );
  }

  return (
    <RegularTextField
      label={label}
      id={id}
      plainText={plainText}
      disabled={disabled}
      readOnly={readOnly}
      {...props}
    />
  );
};
