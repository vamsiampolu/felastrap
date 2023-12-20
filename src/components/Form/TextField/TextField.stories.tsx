import { type Meta, type StoryFn } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { TextField } from "./TextField";

export type Story = Meta<typeof TextField>;

const meta: Meta<typeof TextField> = {
  title: "components/Form/TextField",
  component: TextField,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof TextField> = (args) => {
  const { value: initialValue = "", label, id, ...props } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return (
    <TextField
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

export const Disabled: Story = Template.bind({});
Disabled.args = {
  id: "text-field-basic",
  disabled: true,
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

export const Email: Story = Template.bind({});
Email.args = {
  type: "email",
  id: "text-field-email",
  label: "Email Address",
  placeholder: "example@example.com",
};

export const Password: Story = Template.bind({});
Password.args = {
  type: "password",
  id: "text-field-password",
  label: "Password",
  placeholder: "Password",
};

export const Search: Story = Template.bind({});
Search.args = {
  type: "search",
  id: "text-field-search",
  label: "Search",
};

export const Small: Story = Template.bind({});
Small.args = {
  size: "small",
  id: "text-field-basic",
  label: "First Name",
  placeholder: "First Name",
};

export const Large: Story = Template.bind({});
Large.args = {
  size: "large",
  id: "text-field-basic",
  label: "First Name",
  placeholder: "First Name",
};

export const Tel: Story = Template.bind({});
Tel.args = {
  id: "text-tel",
  label: "Phone No",
  type: "tel",
};
