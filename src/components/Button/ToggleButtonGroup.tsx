import { ChangeEvent, useState } from "react";
import { ToggleButton, ToggleButtonProps } from "./ToggleButton";
import { CheckboxStates } from "../Form/Checkbox/CheckboxStates";

export type Value = HTMLInputElement["value"];
export type ToggleGroupButtonItem = Omit<
  ToggleButtonProps,
  "name" | "onChange" | "value"
> & { value: Value };

export type ToggleButtonGroupProps = {
  buttons: ToggleGroupButtonItem[];
  name: string;
  value?: Value;
};

export const ToggleButtonGroup = ({
  buttons = [],
  name,
  value: initialValue = "",
}: ToggleButtonGroupProps) => {
  const [currentValue, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (!buttons.length) {
    return null;
  }

  return (
    <>
      {buttons.map(({ value, ...button }, index) => (
        <ToggleButton
          key={`toggle-button-${index}`}
          name={name}
          checked={value === currentValue}
          value={value as unknown as CheckboxStates | undefined}
          onChange={onChange as ToggleButtonProps["onChange"]}
          {...button}
        />
      ))}
    </>
  );
};
