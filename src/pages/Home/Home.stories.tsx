import { Home } from "./components/Home";
import type { StoryObj, Meta } from "@storybook/react";

export type Story = StoryObj<typeof Home>;

const meta: Meta<typeof Home> = {
  title: "pages/Home",
  component: Home,
};

export default meta;

export const Basic: Story = {
  args: {},
};
