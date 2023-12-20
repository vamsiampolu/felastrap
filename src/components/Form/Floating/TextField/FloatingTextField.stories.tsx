import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { FloatingTextField, FloatingTextFieldProps } from "./FloatingTextField";
import { ChangeEvent, useState } from "react";
import { FloatingTextInput } from "./FloatingTextInput";
import { FloatingLabel } from "./Label";

export type Story = StoryObj<typeof FloatingTextField>;
const meta: Meta<typeof FloatingTextField> = {
  title: "components/Form/Floating/TextField",
  component: FloatingTextField,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof FloatingTextField> = (args) => {
  const {
    id = "floating-template-text",
    value: initialValue = "",
    disabled = false,
    readOnly = false,
    plainText = false,
    ...props
  } = args as FloatingTextFieldProps;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <FloatingTextField
      id={id}
      disabled={disabled}
      readOnly={readOnly}
      plainText={plainText}
      {...props}
    >
      <FloatingTextInput
        id={id}
        value={value}
        placeholder="First Name"
        onChange={onChange}
      />
      <FloatingLabel htmlFor={id} label="First Name"></FloatingLabel>
    </FloatingTextField>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "basic-floating-text",
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "disabled-floating-text",
  disabled: true,
};

export const ReadonlyPlainText = Template.bind({});
ReadonlyPlainText.args = {
  id: "disabled-readonly-plaintext",
  readOnly: true,
  plainText: true,
  value: "Disabled",
};
