import toggle from "/toggle.svg";
import toggleFocus from "/toggle-focus.svg";
import toggleChecked from "/toggle-checked.svg";
import { useFela } from "react-fela";
import { CheckboxLabel as Label } from "../Checkbox";
import { StyleProps } from "../../common";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ReactNode,
  useState,
} from "react";

const wrapperRule = ({ reverse }: StyleProps<{ reverse: boolean }>) => ({
  display: "block",
  minHeight: "1.5rem",
  paddingLeft: reverse ? 0 : "2.5em",
  paddingRight: reverse ? "2.5em" : 0,
  marginBottom: "0.125rem",
  textAlign: reverse ? "right" : "left",
});

const inputRule = ({ reverse }: StyleProps<{ reverse: boolean }>) => ({
  float: reverse ? "right" : "left",
  flexShrink: 0,
  backgroundImage: `url(${toggle})`,
  height: "1em",
  marginTop: "0.25em",
  verticalAlign: "top",
  appearance: "none",
  backgroundColor: "#fff",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  border: "1px solid #dee2e6",
  colorAdjust: "exact",
  printColorAdjust: "exact",
  width: "2em",
  marginLeft: reverse ? 0 : "-2.5em !important",
  marginRight: reverse ? "-2.5em !important" : 0,
  backgroundPosition: "left center",
  borderRadius: "2em",
  transition: "background-position 0.15s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":active": {
    filter: "brightness(90%)",
  },
  ":checked": {
    backgroundPosition: "right center",
    backgroundImage: `url(${toggleChecked})`,
    backgroundColor: "#0d6efd",
    borderColor: "#0d6efd",
  },
  ":disabled": {
    pointerEvents: "none",
    filter: "none",
    opacity: 0.5,
  },
  ":focus": {
    backgroundImage: `url(${toggleFocus})`,
    borderColor: "#86b7fe",
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
    outline: 0,
  },
});

type Attributes =
  | "id"
  | "name"
  | "className"
  | "checked"
  | "disabled"
  | "defaultChecked"
  | "onSelect"
  | "onChange"
  | "onInput"
  | "required";

export type SwitchProps = Pick<
  ComponentPropsWithoutRef<"input">,
  Attributes
> & { reverse?: boolean; label: ReactNode };

export const Switch = ({
  id,
  className = "",
  disabled = false,
  reverse = false,
  required = false,
  checked: controlledChecked,
  name,
  onSelect,
  onChange,
  onInput,
  label,
  defaultChecked,
  ...props
}: SwitchProps) => {
  const { css } = useFela({ reverse });

  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false,
  );
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      const updatedValue = e.target.checked;
      setUncontrolledChecked(updatedValue);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const externalClassNames = "form-check-input form-switch-input";
  const externalWrapperClassNames = "form-check form-switch";

  const wrapperClassName = `${css(
    wrapperRule,
  )} ${externalWrapperClassNames}`.trim();
  const inputClassName = `${css(
    inputRule,
  )} ${externalClassNames} ${className}`.trim();

  return (
    <div data-testid="switch-field" className={wrapperClassName}>
      <input
        id={id}
        data-testid="switch-input"
        className={inputClassName}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        required={required}
        name={name}
        onSelect={onSelect}
        onChange={handleChange}
        onInput={onInput}
        role="switch"
        {...props}
      />
      <Label className="form-check-label form-switch-label" htmlFor={id!}>
        {label}
      </Label>
    </div>
  );
};
