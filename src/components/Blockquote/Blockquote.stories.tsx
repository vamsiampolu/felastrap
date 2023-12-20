import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "../Blockquote/Blockquote";

export type Story = StoryObj<typeof Blockquote>;
export type Metadata = Meta<typeof Blockquote>;

const meta: Metadata = {
  title: "components/Blockquote",
  component: Blockquote,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Simple: Story = {
  args: {
    text: "Time cools, time clarifies; no mood can be maintained quite unaltered through the course of hours.",
  },
};

export const WithAttribution: Story = {
  args: {
    text: "Time cools, time clarifies; no mood can be maintained quite unaltered through the course of hours.",
    attribution: "Mark Twain",
  },
};

export const WithAttributionAndSource: Story = {
  args: {
    text: "It is better to be hated for what you are than to be loved for what you are not.",
    attribution: "Andre Gide",
    source: "Autumn Leaves",
  },
};

export const CenterAlign: Story = {
  args: {
    align: "center",
    text: "It is better to be hated for what you are than to be loved for what you are not.",
    attribution: "Andre Gide",
    source: "Autumn Leaves",
  },
};

export const RightAlign: Story = {
  args: {
    align: "right",
    text: "It is better to be hated for what you are than to be loved for what you are not.",
    attribution: "Andre Gide",
    source: "Autumn Leaves",
  },
};
