import { Meta, StoryObj } from "@storybook/react";
import { ProgressStacked } from "./ProgressStacked";

export type Story = StoryObj<typeof ProgressStacked>;

const meta: Meta<typeof ProgressStacked> = {
  title: "components/Progress/ProgressStacked",
  component: ProgressStacked,
};

export default meta;

export const Example: Story = {
  args: {
    progressBars: [
      {
        value: 15,
        label: "Segment One",
        variant: "success",
      },
      {
        value: 30,
        label: "Segment Two",
        variant: "info",
      },
      {
        value: 20,
        label: "Segment Three",
        variant: "danger",
      },
    ],
  },
};
