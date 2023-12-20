import Download from ".";
import type { StoryObj, Meta } from "@storybook/react";

export type Story = StoryObj<typeof Download>;
const meta: Meta<typeof Download> = {
  title: "pages/Download",
  component: Download,
};

export default meta;

export const Basic: Story = {
  args: {},
};
