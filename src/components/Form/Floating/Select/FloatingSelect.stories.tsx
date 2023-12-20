import { Meta, StoryObj, StoryFn } from "@storybook/react";
import { FloatingSelect } from "./Select";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof FloatingSelect>;
const meta: Meta<typeof FloatingSelect> = {
  title: "components/Form/FloatingSelect",
  component: FloatingSelect,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof FloatingSelect> = (args) => {
  const {
    id = "select-template",
    placeholder = "Select",
    multiple = false,
    value: initialValue,
    label = "Select Label",
    options = [],
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <FloatingSelect
      label={label}
      id={id}
      placeholder={placeholder}
      multiple={multiple}
      options={options}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "select-basic",
  label: "Select Menu",
  placeholder: "Open this select menu",
  "aria-label": "Default select example",
  options: [
    {
      disabled: false,
      label: "One",
      value: 1,
    },
    {
      disabled: false,
      label: "Two",
      value: 2,
    },
    {
      disabled: false,
      label: "Three",
      value: 3,
    },
  ],
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  label: "Select Menu",
  disabled: true,
  id: "select-basic",
  placeholder: "Open this select menu",
  "aria-label": "Default select example",
  options: [
    {
      disabled: false,
      label: "One",
      value: 1,
    },
    {
      disabled: false,
      label: "Two",
      value: 2,
    },
    {
      disabled: false,
      label: "Three",
      value: 3,
    },
  ],
};
