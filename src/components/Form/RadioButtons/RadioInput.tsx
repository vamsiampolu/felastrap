import { useFela } from "react-fela";
import radio from "/radio.svg";
import { ComponentPropsWithoutRef } from "react";
import { StyleProps } from "../../common";

const rule = () => ({
  float: "left !important",
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
  printColorAdjust: "exact",
  colorAdjust: "exact",
  borderRadius: "50%",
  ":active": {
    filter: "brightness(90%)",
  },
  ":disabled": {
    pointerEvents: "none",
    filter: "none",
    opacity: 0.5,
  },
  ":focus": {
    borderColor: "#86b7fe",
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
  ":checked": {
    backgroundColor: "#0d6efd",
    backgroundImage: `url(${radio})`,
    borderColor: "#0d6efd",
  },
});

type RuleProps = StyleProps<{ reverse: boolean }>;

const reverseRule = ({ reverse }: RuleProps) =>
  reverse
    ? {
        paddingRight: "1.5em",
        paddingLeft: 0,
        textAlign: "right",
      }
    : {};

export type Attributes =
  | "checked"
  | "value"
  | "required"
  | "name"
  | "id"
  | "className"
  | "onSelect"
  | "onChange"
  | "onInput"
  | "disabled";
export type RadioInputProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & { reverse?: boolean };

export const RadioInput = ({
  id,
  onChange = () => undefined,
  name,

  className = "",
  reverse = false,
  ...props
}: RadioInputProps) => {
  const { css } = useFela({ reverse });
  const cx = `${css([rule, reverseRule])} form-check-input ${className}`.trim();
  return (
    <input
      data-testid="radio-input"
      type="radio"
      onChange={onChange}
      className={cx}
      name={name}
      id={id}
      {...props}
    />
  );
};
