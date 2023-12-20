import type { Meta, StoryObj } from "@storybook/react";
import { Placeholder } from "../Placeholder/Placeholder";

export type Story = StoryObj<typeof Placeholder>;
const meta: Meta<typeof Placeholder> = {
  title: "components/Placeholder",
  tags: ["autodocs"],
  component: Placeholder,
};

export default meta;

export const Default: Story = {
  args: {},
};

export const XSmall: Story = {
  args: {
    size: "xsmall",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Button: Story = {
  args: {
    width: "33.333%",
    type: "button",
  },
};

export const Glow: Story = {
  args: {
    width: "66.667%",
    size: "large",
    animation: "glow",
  },
};

export const Wave: Story = {
  args: {
    width: "66.667%",
    size: "large",
    animation: "wave",
  },
};
