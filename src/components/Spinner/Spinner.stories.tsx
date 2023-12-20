import { Spinner } from "./Spinner";
import type { StoryObj, Meta } from "@storybook/react";

export type Story = StoryObj<typeof Spinner>;
const meta: Meta<typeof Spinner> = {
  title: "components/Spinner",
  tags: ["autodocs"],
  component: Spinner,
};

export default meta;

export const Border: Story = {
  args: {},
};

export const BorderSmall: Story = {
  args: {
    small: true,
  },
};

export const Grow: Story = {
  args: {
    type: "grow",
  },
};

export const GrowSmall: Story = {
  args: {
    type: "grow",
    small: true,
  },
};

export const PrimaryBorder: Story = {
  args: {
    variant: "primary",
  },
};

export const PrimaryGrow: Story = {
  args: {
    type: "grow",
    variant: "primary",
  },
};

export const SecondaryBorder: Story = {
  args: {
    variant: "secondary",
  },
};

export const SecondaryGrow: Story = {
  args: {
    type: "grow",
    variant: "secondary",
  },
};

export const InfoBorder: Story = {
  args: {
    variant: "info",
  },
};

export const InfoGrow: Story = {
  args: {
    type: "grow",
    variant: "info",
  },
};

export const SuccessBorder: Story = {
  args: {
    variant: "success",
  },
};

export const SuccessGrow: Story = {
  args: {
    type: "grow",
    variant: "success",
  },
};

export const WarningBorder: Story = {
  args: {
    variant: "warning",
  },
};

export const WarningGrow: Story = {
  args: {
    type: "grow",
    variant: "warning",
  },
};

export const DangerBorder: Story = {
  args: {
    variant: "danger",
  },
};

export const DangerGrow: Story = {
  args: {
    type: "grow",
    variant: "danger",
  },
};
