import { useFela } from "react-fela";
import { SelectProps } from "../../Select/Select";
import { FloatingSelectLabel as FloatingLabel } from "./Label";
import chevron from "/chevron-down-thick.svg";
import { ChangeEvent, useState } from "react";

const wrapper = () => ({
  position: "relative",
  marginBottom: "1rem",
});

const rule = () => ({
  display: "block",
  width: "100%",
  padding: "0.375rem 2.25rem 0.375rem 0.75rem",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.5,
  color: "#212529",
  appearance: "none",
  backgroundColor: "#fff",
  backgroundImage: `url(${chevron}), none`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.75rem center",
  backgroundSize: "16px 12px",
  border: "1px solid #dee2e6",
  borderRadius: "0.375rem",
  transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
  "@media (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
  ":focus": {
    borderColor: "#86b7fe",
    outline: 0,
    boxShadow: "0 0 0 0.25rem rgba(13, 110, 253, 0.25)",
  },
  ":disabled": {
    backgroundColor: "#e9ecef",
  },
  ":-moz-focusring": {
    color: "transparent",
    textShadow: "0 0 0 #212529",
  },
});

const floatingRule = () => ({
  height: "calc(3.5rem + 2px)",
  minHeight: "calc(3.5rem + 2px)",
  lineHeight: 1.25,
  paddingTop: "1.625rem",
  paddingBottom: "0.625rem",
});

export type FloatingSelectProps = Omit<SelectProps, "controlSize" | "size">;

export const FloatingSelect = ({
  disabled = false,
  className = "",
  id,
  placeholder,
  options,
  label,
  defaultValue,
  value: controlledValue,
  onChange,
  ...props
}: FloatingSelectProps) => {
  const { css } = useFela();
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? "",
  );

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (!isControlled) {
      setUncontrolledValue(e.target.value);
    }

    if (onChange) {
      onChange(e);
    }
  };

  const cx = `${css([rule, floatingRule])} floating-select ${className}`.trim();
  return (
    <div
      data-testid="form-floating-select"
      className={`${css(wrapper)} form-floating`}
    >
      <FloatingLabel htmlFor={id!}>{label}</FloatingLabel>
      <select
        data-testid="floating-select"
        disabled={disabled}
        multiple={false}
        id={id}
        value={value}
        onChange={handleChange}
        className={cx}
        aria-label={props["aria-label"]}
      >
        <option data-testid="floating-select-option-placeholder" value="">
          {placeholder}
        </option>
        {options.map((item, index) => (
          <option
            data-testid="floating-select-option"
            key={`option-${id}-${index}`}
            disabled={item.disabled}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};
