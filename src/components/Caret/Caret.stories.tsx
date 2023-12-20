import { Caret } from "./Caret";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Caret> = {
  component: Caret,
  title: "components/Caret",
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export type Story = StoryObj<typeof Caret>;

export const Down = {
  args: {
    width: "0.3em",
    direction: "down",
  },
};

export const Up = {
  args: {
    width: "0.3em",
    direction: "up",
  },
};

export const End = {
  args: {
    width: "0.3rem",
    direction: "end",
  },
};

export const Start = {
  args: {
    width: "0.3rem",
    direction: "start",
  },
};
