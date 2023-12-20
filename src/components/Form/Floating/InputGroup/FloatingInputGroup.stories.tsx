import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";
import { DivProps, Size } from "../../../common";
import { InputGroup } from "../../InputGroup/InputGroup";
import { FloatingTextField } from "../TextField/FloatingTextField";
import { FloatingTextInput } from "../TextField/FloatingTextInput";
import { FloatingLabel } from "../TextField/Label";
import { FloatingGroupButton } from "./GroupButton";
import { FloatingGroupText } from "./GroupText";

export type Story = StoryObj<typeof InputGroup>;

const meta: Meta<typeof InputGroup> = {
  title: "components/Form/Floating/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export type Children = DivProps["children"];

export type TemplateArgs = typeof InputGroup & {
  left: Children;
  size?: Size;
  right: Children;
  value?: string;
  id?: string;
  readOnly?: boolean;
  disabled?: boolean;
  plainText?: boolean;
  label?: string;
  placeholder?: string;
};

export const Template: StoryFn<typeof InputGroup> = (args) => {
  const {
    size = "medium",
    id = "template-group-floating",
    left = null,
    right = null,
    readOnly = false,
    disabled = false,
    plainText = false,
    label = "Label",
    placeholder = "Placeholder",
  } = args as unknown as TemplateArgs;
  const [value, setValue] = useState((args as unknown as TemplateArgs).value);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputGroup size={size}>
      {left}
      <FloatingTextField
        id={id}
        readOnly={readOnly}
        disabled={disabled}
        plainText={plainText}
      >
        <FloatingTextInput
          id={`${id}-input`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <FloatingLabel htmlFor={`${id}-input`} label={label}></FloatingLabel>
      </FloatingTextField>
      {right}
    </InputGroup>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  left: <FloatingGroupText>@</FloatingGroupText>,
  label: "Username",
  placeholder: "Username",
} as unknown as TemplateArgs;

export const Currency: Story = Template.bind({});
Currency.args = {
  left: <FloatingGroupText>$</FloatingGroupText>,
  right: <FloatingGroupText>.00</FloatingGroupText>,
  label: "Amount",
  placeholder: "Amount",
} as unknown as TemplateArgs;

export const SearchButton: Story = Template.bind({});
SearchButton.args = {
  label: "Search",
  placeholder: "Search",
  id: "search-group",
  right: (
    <FloatingGroupButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="#000"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatingGroupButton>
  ),
} as unknown as TemplateArgs;

export const SmallCurrencyExample: Story = Template.bind({});
SmallCurrencyExample.args = {
  size: "small",
  left: <FloatingGroupText>$</FloatingGroupText>,
  right: <FloatingGroupText>.00</FloatingGroupText>,
  label: "Amount",
  placeholder: "Amount",
} as unknown as TemplateArgs;

export const LargeCurrencyExample: Story = Template.bind({});
LargeCurrencyExample.args = {
  size: "large",
  left: <FloatingGroupText>$</FloatingGroupText>,
  right: <FloatingGroupText>.00</FloatingGroupText>,
  label: "Amount",
  placeholder: "Amount",
} as unknown as TemplateArgs;

export const DisabledCurrency: Story = Template.bind({});
DisabledCurrency.args = {
  left: <FloatingGroupText>$</FloatingGroupText>,
  right: <FloatingGroupText>.00</FloatingGroupText>,
  label: "Amount",
  placeholder: "Amount",
  disabled: true,
} as unknown as TemplateArgs;

export const PlainTextCurrency: Story = Template.bind({});
PlainTextCurrency.args = {
  left: <FloatingGroupText>$</FloatingGroupText>,
  right: <FloatingGroupText>.00</FloatingGroupText>,
  label: "Amount",
  placeholder: "Amount",
  readOnly: true,
  plainText: true,
} as unknown as TemplateArgs;
