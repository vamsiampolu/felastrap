import { type Meta, type StoryFn } from "@storybook/react";
import { TextareaField } from "./TextareaField";
import { ChangeEvent, useState } from "react";

export type Story = Meta<typeof TextareaField>;

const meta: Meta<typeof TextareaField> = {
  title: "components/Form/TextareaField",
  component: TextareaField,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof TextareaField> = (args) => {
  const { value: initialValue = "", label, id, ...props } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setValue(e.target.value);
  return (
    <TextareaField
      id={id}
      value={value}
      onChange={onChange}
      label={label}
      {...props}
    />
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  id: "text-field-basic",
  label: "First Name",
  placeholder: "First Name",
};

export const Floating: Story = Template.bind({});
Floating.args = {
  id: "text-field-basic",
  label: "First Name",
  placeholder: "First Name",
  floating: true,
};

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "text-field-basic",
  disabled: true,
  label: "First Name",
  placeholder: "First Name",
};

export const Readonly: Story = Template.bind({});
Readonly.args = {
  id: "text-field-basic",
  value: "First",
  readOnly: true,
  label: "First Name",
  placeholder: "First Name",
};

export const PlainText: Story = Template.bind({});
PlainText.args = {
  id: "text-field-basic",
  value: "First",
  plainText: true,
  readOnly: true,
  label: "First Name",
  placeholder: "First Name",
};
