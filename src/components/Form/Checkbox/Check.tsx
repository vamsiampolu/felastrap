import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";
import { StyleProps } from "../../common";
import { CHECKBOX_STATES, CheckboxStates } from "./CheckboxStates";
import { useCheckbox } from "./useCheckbox";
import checked from "/checked.svg";
import indeterminate from "/indeterminate.svg";

type RuleProps = StyleProps<{ reverse: boolean }>;

const rule = () => ({
  float: "left",
  marginLeft: "-1.5em",
  flexShrink: 0,
  width: "1em",
  height: "1em",
  marginTop: "0.25em",
  verticalAlign: "top",
  appearance: "none",
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "contain",
  border: "1px solid #dee2e6",
  colorAdjust: "exact",
  printColorAdjust: "exact",
  borderRadius: "0.25em",
  ":active": {
    filter: "brightness(90%)",
  },
  ":checked": {
    backgroundColor: "#0d6efd",
    backgroundImage: `url(${checked})`,
    borderColor: " #0d6efd",
  },
  ":focus": {
    borderColor: "#86b7fe",
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
  ":indeterminate": {
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd",
    backgroundImage: `url(${indeterminate})`,
  },
  ":disabled": {
    pointerEvents: "none",
    filter: "none",
    opacity: 0.5,
  },
});

const reverseRule = ({ reverse }: RuleProps) =>
  reverse
    ? {
        float: "right",
        marginRight: "-1.5em",
        marginLeft: 0,
      }
    : {
        float: "left",
        marginRight: 0,
        marginLeft: "-1.5em",
      };

export type Attributes =
  | "id"
  | "name"
  | "className"
  | "checked"
  | "disabled"
  | "defaultValue"
  | "onSelect"
  | "onChange"
  | "onInput"
  | "required";

export type CheckboxInputProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & {
  reverse?: boolean;
  value?: CheckboxStates;
  defaultValue?: CheckboxStates;
  allowIndeterminate?: boolean;
};

export const CheckboxInput = ({
  id,
  className = "",
  disabled = false,
  reverse = false,
  value = CHECKBOX_STATES.Empty,
  allowIndeterminate = false,
  onChange = () => undefined,
  ...props
}: CheckboxInputProps) => {
  const ref = useCheckbox({ value, allowIndeterminate });
  const { css } = useFela({ reverse });
  const cx = `${css([rule, reverseRule])} form-check-input ${className}`.trim();

  return (
    <input
      data-testid="checkbox-input"
      type="checkbox"
      disabled={disabled}
      id={id}
      className={cx}
      ref={ref}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};
