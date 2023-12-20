import { type Meta, type StoryObj, type StoryFn } from "@storybook/react";
import { SearchField } from "./SearchField";
import { ChangeEvent, useState } from "react";

export type Story = StoryObj<typeof SearchField>;

const meta: Meta<typeof SearchField> = {
  title: "components/Form/TextField/SearchField",
  component: SearchField,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Template: StoryFn<typeof SearchField> = (args) => {
  const { id = "search-field-template", value: initialValue, ...props } = args;
  const [value, setValue] = useState(initialValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  return <SearchField id={id} value={value} onChange={onChange} {...props} />;
};

export const Example: Story = {
  args: {
    id: "search-example",
  },
};

export const Large: Story = {
  args: {
    id: "search-example-large",
    size: "large",
  },
};
