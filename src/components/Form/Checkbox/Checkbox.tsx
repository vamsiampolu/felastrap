import { useFela } from "react-fela";
import { CheckboxInput, CheckboxInputProps } from "./Check";
import { CheckboxLabel, CheckboxLabelProps } from "./Label";
import { ReactNode } from "react";
import { StyleProps } from "../../common";

const rule = ({ reverse }: StyleProps<{ reverse: boolean }>) => ({
  display: "block",
  minHeight: "1.5rem",
  marginBottom: "1.5em",
  paddingLeft: reverse ? 0 : "1.5em",
  paddingRight: reverse ? "1.5em" : 0,
  textAlign: reverse ? "right" : "left",
});

export type CheckboxProps = Omit<
  CheckboxInputProps & CheckboxLabelProps,
  "htmlFor" | "children"
> & {
  label: ReactNode;
};

export const Checkbox = ({
  reverse = false,
  disabled = false,
  required = false,
  value,
  name,
  onSelect,
  onChange,
  onInput,
  className = "",
  allowIndeterminate = false,
  id,
  label,
}: CheckboxProps) => {
  const { css } = useFela({ reverse });
  const cx = `${css(rule)} form-check ${className}`.trim();
  return (
    <div data-testid="form-control-checkbox" className={cx}>
      <CheckboxInput
        allowIndeterminate={allowIndeterminate}
        disabled={disabled}
        reverse={reverse}
        required={required}
        value={value}
        name={name}
        id={id}
        onSelect={onSelect}
        onChange={onChange}
        onInput={onInput}
      />
      <CheckboxLabel htmlFor={id!} disabled={disabled}>
        {label}
      </CheckboxLabel>
    </div>
  );
};
