import { Textarea, type TextareaProps } from "./Textarea";
import { Label } from "../Controls/Label";

import { FormText } from "../Controls/FormText";
import { useFela } from "react-fela";
import {
  FloatingLabel,
  FloatingTextField,
  FloatingTextarea,
} from "../Floating";

export type TextareaFieldProps = TextareaProps & {
  id: string;
  label: string;
  text?: string;
  floating?: boolean;
};

export const TextareaField = ({
  id,
  className = "",
  placeholder,
  size = "medium",
  readOnly = false,
  plainText = false,
  floating = false,
  disabled = false,
  label,
  text,
  ...props
}: TextareaFieldProps) => {
  const { css } = useFela({ size, plainText, readOnly });
  const wrapperClassName = `${css({
    marginBottom: "1rem",
  })} textarea-field ${className}`.trim();

  if (floating) {
    return (
      <FloatingTextField
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        plainText={plainText}
      >
        <FloatingLabel htmlFor={id} label={label} />
        <FloatingTextarea id={id} {...props} />
      </FloatingTextField>
    );
  }

  return (
    <div data-testid="textarea-field" className={wrapperClassName}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Textarea
        id={id}
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
