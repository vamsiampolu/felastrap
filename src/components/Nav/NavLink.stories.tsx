import { Meta, StoryObj } from "@storybook/react";
import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
  title: "components/Nav/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
};

export default meta;
export type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    children: "Click Me",
  },
};

export const Disabled: Story = {
  args: {
    children: "Cant Click Me",
    disabled: true,
  },
};
