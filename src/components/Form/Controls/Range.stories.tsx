import { StoryObj, Meta, StoryFn } from "@storybook/react";
import { Range } from "./Range";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof Range>;

const meta: Meta<typeof Range> = {
  title: "components/Form/Range",
  component: Range,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

const Template: StoryFn<typeof Range> = (args) => {
  const {
    id = "range-template",
    label = "Label",
    value: initialValue = 0,
    min = 1,
    max = 20,
    list,
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (list) {
    return (
      <>
        <Range
          label={label}
          list={list}
          id={id}
          value={value}
          onChange={onChange}
          {...props}
        />
        <datalist id={list}>
          <option value="0" label="0"></option>
          <option value="2" label="2"></option>
          <option value="4" label="4"></option>
          <option value="6" label="6"></option>
          <option value="8" label="8"></option>
          <option value="10" label="10"></option>
        </datalist>
      </>
    );
  }

  return (
    <Range
      label={label}
      id={id}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "range-basic",
  label: "Example Range",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "range-disabled",
  label: "Disabled Range",
  disabled: true,
  value: 7,
};

export const Step: Story = Template.bind({});
Step.args = {
  id: "range-step",
  label: "Step Range",
  min: 0,
  max: 5,
  step: 0.5,
};
