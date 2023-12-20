import { ComponentPropsWithoutRef, ReactNode } from "react";
import chevron from "/chevron-down-thick.svg";
import { Size, StyleProps } from "../../common";
import { useFela } from "react-fela";
import { Label } from "../Controls/Label";
import { FloatingSelect } from "../Floating";

export type OptionProps = ComponentPropsWithoutRef<"option">;
export type SelectProps = ComponentPropsWithoutRef<"select"> & {
  controlSize?: Size;
  options: OptionProps[];
  floating?: boolean;
  placeholder: string;
  label?: ReactNode;
};

type RuleProps = StyleProps<{ size: Size; multiple: boolean; rows: number }>;

const smallRule = ({ size }: RuleProps) =>
  size === "small"
    ? {
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        paddingLeft: "0.5rem",
        fontSize: "0.875rem",
        borderRadius: "0.25rem",
      }
    : {};

const largeRule = ({ size }: RuleProps) =>
  size === "large"
    ? {
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        fontSize: "1.25rem",
        borderRadius: "0.5rem",
      }
    : {};

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

const multipleRule = ({ multiple }: RuleProps) =>
  multiple
    ? {
        paddingRight: "0.75rem",
        backgroundImage: "none",
      }
    : {};

const moreThanARow = ({ rows }: RuleProps) =>
  (rows ?? 0) > 1
    ? {
        paddingRight: "0.75rem",
        backgroundImage: "none",
      }
    : {};

const Option = ({
  id,
  index,
  disabled,
  className,
  value,
  label,
}: OptionProps & { index: number }) => {
  return (
    <option
      id={id}
      className={className}
      data-testid="select-option"
      key={`option-${id}-${index}`}
      disabled={disabled}
      value={value}
    >
      {label}
    </option>
  );
};

export const Select = ({
  id,
  className = "",
  multiple = false,
  controlSize: size = "medium",
  size: rows = 0,
  options = [],
  placeholder,
  disabled = false,
  label,
  floating = false,
  value,
  ...props
}: SelectProps) => {
  const { css } = useFela({ size, rows, multiple });
  const isControlled = value !== undefined;

  const cx = `${css([
    rule,
    smallRule,
    largeRule,
    multipleRule,
    moreThanARow,
  ])} form-select ${className}`.trim();
  if (floating && !multiple) {
    return (
      <FloatingSelect
        id={id}
        className={className}
        disabled={disabled}
        label={label}
        options={options}
        placeholder={placeholder}
        {...props}
      />
    );
  }

  return (
    <div
      data-testid="form-control-select"
      className={css({ marginBottom: "1rem" })}
    >
      {label && <Label htmlFor={id!}>{label}</Label>}
      <select
        data-testid="select-control"
        disabled={disabled}
        multiple={multiple}
        size={rows}
        defaultValue={isControlled ? undefined : multiple ? [] : ""}
        value={isControlled ? value : undefined}
        id={id}
        className={cx}
        aria-label={props["aria-label"]}
        {...props}
      >
        <option data-testid="select-option-placeholder" value="">
          {placeholder}
        </option>
        {options.map((item, index) => (
          <Option
            key={`option-${id}-${index}`}
            id={item.id}
            index={index}
            disabled={item.disabled}
            value={item.value}
            label={item.label}
          />
        ))}
      </select>
    </div>
  );
};
