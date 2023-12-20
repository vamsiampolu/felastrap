import { StoryObj, Meta, StoryFn } from "@storybook/react";
import { Select } from "./Select";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof Select>;

const meta: Meta<typeof Select> = {
  title: "components/Form/Select",
  component: Select,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof Select> = (args) => {
  const {
    id = "select-template",
    placeholder = "Select",
    multiple = false,
    value: initialValue,
    options = [],
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };
  return (
    <Select
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

export const Floating: Story = Template.bind({});
Floating.args = {
  id: "select-floating",
  floating: true,
  label: "Select",
  multiple: false,
  placeholder: "Select one option",
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

export const WithLabel: Story = Template.bind({});
WithLabel.args = {
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

export const Small: Story = Template.bind({});
Small.args = {
  id: "select-basic",
  controlSize: "small",
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

export const Large: Story = Template.bind({});
Large.args = {
  id: "select-basic",
  controlSize: "large",
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

export const Multiple: Story = Template.bind({});
Multiple.args = {
  id: "select-basic",
  multiple: true,
  size: 4,
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
