import { Figure } from "./";
import { Meta, StoryObj } from "@storybook/react";

export type Story = StoryObj<typeof Figure>;
export type Metadata = Meta<typeof Figure>;

const meta: Metadata = {
  title: "components/Figure",
  component: Figure,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Example: Story = {
  args: {
    caption: "A caption for the above image",
    fluid: true,
    rounded: true,
    src: "https://placehold.co/400x300",
  },
};
