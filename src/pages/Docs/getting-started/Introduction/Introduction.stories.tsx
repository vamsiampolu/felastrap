import Introduction from ".";
import type { StoryObj, Meta } from "@storybook/react";

export type Story = StoryObj<typeof Introduction>;
const meta: Meta<typeof Introduction> = {
  title: "pages/Introduction",
  component: Introduction,
};

export default meta;

export const Basic: Story = {
  args: {},
};
