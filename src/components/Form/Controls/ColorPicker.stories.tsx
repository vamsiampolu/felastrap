import { StoryObj, Meta, StoryFn } from "@storybook/react";
import { ColorPicker } from "./ColorPicker";
import { Label } from "./Label";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof ColorPicker>;
const meta: Meta<typeof ColorPicker> = {
  title: "components/Form/ColorPicker",
  component: ColorPicker,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof ColorPicker> = (args) => {
  const {
    id = "template-color-picker",
    value: initialValue = "#000",
    ...props
  } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Label htmlFor={id}>Pick Color</Label>
      <ColorPicker
        value={value}
        onChange={onChange}
        id={id}
        title="Choose your color"
        {...props}
      />
    </>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  value: "#563d7c",
  id: "basic-color-picker",
};
