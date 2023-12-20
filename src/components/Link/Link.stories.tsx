import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "../Link/Link";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "components/Link",
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: "Google Homepage",
    href: "https://google.com",
  },
};
