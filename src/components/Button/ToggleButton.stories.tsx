import { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "components/Button/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;
export type Story = StoryObj<typeof ToggleButton>;

export const Basic: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
  },
};

export const BasicRadio: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    type: "radio",
  },
};

export const Checked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    checked: true,
    onChange: () => undefined,
  },
};

export const CheckedRadio: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    type: "radio",
    checked: true,
    onChange: () => undefined,
  },
};

export const Disabled: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "primary",
  },
};

export const OutlinePrimary: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    outline: true,
    variant: "primary",
  },
};

export const PrimaryChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "primary",
    checked: true,
    onChange: () => undefined,
  },
};

export const OutlinePrimaryChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    outline: true,
    checked: true,
    onChange: () => undefined,
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "secondary",
  },
};

export const SecondaryChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "secondary",
    checked: true,
    onChange: () => undefined,
  },
};

export const OutlineSecondary: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "secondary",
    outline: true,
  },
};

export const OutlineSecondaryChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "secondary",
    checked: true,
    outline: true,
    onChange: () => undefined,
  },
};

export const Success: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "success",
  },
};

export const OutlineSuccess: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "success",
    outline: true,
  },
};

export const SuccessChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "success",
    checked: true,
    onChange: () => undefined,
  },
};

export const OutlineSuccessChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "success",
    outline: true,
    checked: true,
    onChange: () => undefined,
  },
};

export const Danger: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "danger",
  },
};

export const OutlineDanger: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "danger",
    outline: true,
  },
};

export const DangerChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "danger",
    checked: true,
    onChange: () => undefined,
  },
};

export const OutlineDangertChecked: Story = {
  args: {
    children: "Single Toggle",
    id: "basic-toggle-btn",
    variant: "danger",
    outline: true,
    checked: true,
    onChange: () => undefined,
  },
};
