import type { StoryObj, Meta } from "@storybook/react";
import { ProgressiveImage } from "../Image/ProgressiveImage";

export type Story = StoryObj<typeof ProgressiveImage>;

const meta: Meta<typeof ProgressiveImage> = {
  title: "components/ProgressiveImage",
  tags: ["autodocs"],
  component: ProgressiveImage,
};

export default meta;

export const Example: Story = {
  args: {
    width: "200px",
    height: "300px",
    src: "https://picsum.photos/seed/crayon/200/300",
  },
};
