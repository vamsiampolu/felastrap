import { Button } from "./Button";
import { Badge } from "../Badge/Badge";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "components/Button",
  tags: ["autodocs"],
  component: Button,
};

export default meta;
export type Story = StoryObj<typeof Button>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click Me",
    size: "medium",
    variant: "default",
  },
};

export const Outlined = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Click Me",
    outline: true,
    size: "medium",
    variant: "default",
  },
};

export const WithBadge = {
  parameters: {
    layout: "centered",
  },
  args: {
    children: (
      <>
        Click Me<Badge positioned>3</Badge>
      </>
    ),
    size: "medium",
    variant: "default",
    positionedBadge: true,
  },
};
