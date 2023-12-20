import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";

export type Story = StoryObj<typeof Switch>;

const meta: Meta<typeof Switch> = {
  title: "components/Form/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Template: StoryFn<typeof Switch> = (args) => {
  const {
    id = "template-switch",
    label = "Switch",
    checked: initialChecked = false,
    ...props
  } = args;
  const [checked, setChecked] = useState(initialChecked);
  const onChange = () => {
    setChecked((currentChecked) => !currentChecked);
  };

  return (
    <Switch
      id={id}
      label={label}
      checked={checked}
      onChange={onChange}
      {...props}
    />
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  label: "Switch Control",
  id: "basic-switch",
  checked: false,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  label: "Disabled",
  id: "disabled-switch",
  checked: true,
  disabled: true,
};

export const Reverse: Story = Template.bind({});
Reverse.args = {
  label: "Reverse",
  id: "disabled-switch",
  checked: true,
  reverse: true,
};
