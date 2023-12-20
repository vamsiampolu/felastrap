import { useFela } from "react-fela";
import { RadioLabel, type RadioLabelProps } from "./Label";
import { RadioInput, type RadioInputProps } from "./RadioInput";
import { ReactNode } from "react";
import { StyleProps } from "../../common";

type RuleProps = StyleProps<{ reverse: boolean; inline: boolean }>;

const rule = () => ({
  display: "block",
  minHeight: "1.5rem",
  paddingLeft: "1.5rem !important",
  paddingRight: 0,
  marginBottom: "0.125rem",
  textAlign: "left",
});

const reverseRule = ({ reverse }: RuleProps) =>
  reverse
    ? {
        paddingRight: "1.5em",
        paddingLeft: 0,
        textAlign: "right",
      }
    : {
        paddingLeft: "1.5rem !important",
        paddingRight: 0,
        textAlign: "left",
      };

const inlineRule = ({ inline }: RuleProps) =>
  inline
    ? {
        display: "inline-block",
        marginRight: "1rem",
      }
    : {
        display: "block",
      };

export type RadioButtonProps = Omit<
  RadioLabelProps & RadioInputProps,
  "htmlFor" | "children"
> & { label: ReactNode; inline?: boolean };
export const RadioButton = ({
  label,
  className = "",
  reverse = false,
  inline = false,
  value,
  required = false,
  name,
  id,
  onSelect,
  onChange = () => undefined,
  onInput,
  disabled = false,
}: RadioButtonProps) => {
  const { css } = useFela({ reverse, inline });
  const cx = `${css([rule, reverseRule, inlineRule])} ${className}`.trim();
  return (
    <div data-testid="form-control-radio-button" className={cx}>
      <RadioInput
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
      <RadioLabel htmlFor={id!} disabled={disabled}>
        {label}
      </RadioLabel>
    </div>
  );
};
