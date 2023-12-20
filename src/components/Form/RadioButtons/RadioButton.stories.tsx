import type { StoryObj, Meta, StoryFn } from "@storybook/react";
import { RadioButton } from "./RadioButton";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof RadioButton>;
const meta: Meta<typeof RadioButton> = {
  title: "components/Form/RadioButton",
  component: RadioButton,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof RadioButton> = (args) => {
  const {
    label = "Label",
    value: initialValue,
    id = "template-radio",
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <RadioButton
        id={id}
        label={label}
        value={value}
        onChange={onChange}
        {...props}
      />
      <RadioButton
        id={`${id}-one`}
        label={`${label} One`}
        value={`${value} One`}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "basic-radio",
  name: "radioName",
  label: "Default Radio",
  value: "Default Value",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "basic-radio",
  disabled: true,
  name: "radioName",
  label: "Default Radio",
  value: "Default Value",
};

export const Inline: Story = Template.bind({});
Inline.args = {
  inline: true,
  id: "basic-radio",
  name: "radioName",
  label: "Default Radio",
  value: "Default Value",
};
