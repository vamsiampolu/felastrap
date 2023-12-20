import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";

export type Story = StoryObj<typeof Pagination>;
const meta: Meta<typeof Pagination> = {
  title: "components/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Simple: Story = {
  args: {
    previous: {
      disabled: false,
      label: "Previous",
      show: true,
    },
    next: {
      label: "Next",
      disabled: false,
      show: true,
    },
    page: 1,
    start: 1,
    end: 5,
  },
};

export const Icons: Story = {
  args: {
    previous: {
      disabled: false,
      show: true,
    },
    next: {
      disabled: false,
      show: true,
    },
    page: 1,
    start: 1,
    end: 5,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    previous: {
      disabled: false,
      show: true,
    },
    next: {
      disabled: false,
      show: true,
    },
    page: 1,
    start: 1,
    end: 5,
    disabledPages: [3],
  },
};

export const Large: Story = {
  args: {
    size: "large",
    previous: {
      disabled: false,
      show: true,
    },
    next: {
      disabled: false,
      show: true,
    },
    page: 1,
    start: 1,
    end: 5,
  },
};
