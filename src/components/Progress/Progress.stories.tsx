import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./Progress";

export type Story = StoryObj<typeof Progress>;
const meta: Meta<typeof Progress> = {
  title: "components/Progress/Progress",
  component: Progress,
};

export default meta;

export const Zero: Story = {
  args: {
    value: 0,
  },
};

export const TwentyFive: Story = {
  args: {
    value: 25,
  },
};

export const Fifty: Story = {
  args: {
    value: 50,
  },
};

export const SeventyFive: Story = {
  args: {
    value: 75,
  },
};

export const Hundred: Story = {
  args: { value: 100 },
};

export const Label: Story = {
  args: {
    value: 25,
    showLabel: true,
  },
};

export const Info: Story = {
  args: {
    value: 50,
    variant: "info",
  },
};

export const Success: Story = {
  args: {
    value: 50,
    variant: "success",
  },
};

export const Warning: Story = {
  args: {
    value: 50,
    variant: "warning",
  },
};

export const Danger: Story = {
  args: {
    value: 50,
    variant: "danger",
  },
};

export const Striped: Story = {
  args: {
    value: 50,
    striped: true,
  },
};

export const StripedInfo: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "info",
  },
};

export const StripedSuccess: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "success",
  },
};

export const StripedWarning: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "warning",
  },
};

export const StripedDanger: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "danger",
  },
};

export const StripedAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    animated: true,
  },
};

export const StripedInfoAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "info",
    animated: true,
  },
};

export const StripedSuccessAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "success",
    animated: true,
  },
};

export const StripedWarningAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "warning",
    animated: true,
  },
};

export const StripedDangerAnimated: Story = {
  args: {
    value: 50,
    striped: true,
    variant: "danger",
    animated: true,
  },
};
