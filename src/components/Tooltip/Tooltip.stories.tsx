import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";

export type Story = StoryObj<typeof Tooltip>;

const meta: Meta<typeof Tooltip> = {
  title: "components/Tooltip/Tooltip",
  component: Tooltip,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Basic: Story = {
  args: {
    children: <Button variant="secondary">A tooltip</Button>,
    tooltipText: "This is the default tooltip",
  },
};

export const Top: Story = {
  args: {
    placement: "top",
    children: <Button variant="secondary">Top tooltip</Button>,
    tooltipText: "This is the top tooltip",
  },
};

export const Left: Story = {
  args: {
    placement: "left",
    children: <Button variant="secondary">Left tooltip</Button>,
    tooltipText: "This is the left tooltip",
  },
};

export const Right: Story = {
  args: {
    placement: "right",
    children: <Button variant="secondary">Right tooltip</Button>,
    tooltipText: "This is the right tooltip",
  },
};

export const Bottom: Story = {
  args: {
    placement: "bottom",
    children: <Button variant="secondary">Bottom tooltip</Button>,
    tooltipText: "This is the bottom tooltip",
  },
};

export const OpenByDefault: Story = {
  args: {
    placement: "top",
    initialOpen: true,
    children: <Button variant="secondary">Auto Open tooltip</Button>,
    tooltipText: "This tooltip is automatically opened on load.",
  },
};
