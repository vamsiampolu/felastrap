import { Header } from "./Header";
import { Meta, StoryObj } from "@storybook/react";

export type Story = StoryObj<typeof Header>;
const meta: Meta<typeof Header> = {
  title: "components/PanelGroup/Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Closed = {
  args: {
    style: { width: "10rem" },
    isOpen: false,
    children: <span style={{ marginRight: "4px" }}>PanelGroup Item</span>,
  },
};

export const Open = {
  args: {
    style: { width: "10rem" },
    isOpen: true,
    children: <span style={{ marginRight: "4px" }}>PanelGroup Item</span>,
  },
};
