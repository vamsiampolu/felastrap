import { Meta, StoryObj } from "@storybook/react";
import { ToggleButtonGroup } from "./ToggleButtonGroup";

export type Story = StoryObj<typeof ToggleButtonGroup>;
const meta: Meta<typeof ToggleButtonGroup> = {
  title: "components/Button/ToggleButtonGroup",
  component: ToggleButtonGroup,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const RadioGroup: Story = {
  args: {
    name: "base",
    value: "two",
    buttons: [
      {
        type: "radio",
        id: "radio-1",
        children: "Radio One",
        value: "one",
      },
      {
        type: "radio",
        id: "radio-2",
        children: "Radio Two",
        value: "two",
      },
      {
        type: "radio",
        id: "radio-3",
        children: "Radio Two",
        disabled: true,
        value: "three",
      },
    ],
  },
};

export const CheckboxGroup: Story = {
  args: {
    name: "base",
    buttons: [
      {
        variant: "danger",
        outline: true,
        type: "checkbox",
        id: "radio-1",
        children: "Radio One",
        value: "one",
      },
      {
        variant: "danger",
        outline: true,
        type: "checkbox",
        id: "check-2",
        children: "Radio Two",
        value: "two",
      },
      {
        variant: "danger",
        outline: true,
        type: "checkbox",
        id: "check-3",
        children: "Radio Two",
        disabled: true,
        value: "three",
      },
    ],
  },
};
