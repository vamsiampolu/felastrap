import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

export type Story = StoryObj<typeof Breadcrumb>;
const meta: Meta<typeof Breadcrumb> = {
  title: "components/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Simple: Story = {
  args: {
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data", href: "#" },
    ],
  },
};

export const Dividers: Story = {
  args: {
    divider: ">",
    items: [
      { label: "Home", href: "#" },
      { label: "Library", href: "#" },
      { label: "Data", href: "#" },
    ],
  },
};
