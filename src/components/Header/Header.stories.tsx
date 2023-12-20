import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta = {
  title: "components/Header",
  component: Header,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const H1: StoryObj = {
  args: {
    as: "h1",
    children: "Hello, World",
  },
};

export const H1Display: StoryObj = {
  args: {
    as: "h1",
    display: true,
    children: "Hello, World",
  },
};

export const H2: StoryObj = {
  args: {
    as: "h2",
    children: "Hello, World",
  },
};

export const H2Display: StoryObj = {
  args: {
    as: "h2",
    display: true,
    children: "Hello, World",
  },
};

export const H3: StoryObj = {
  args: {
    as: "h3",
    children: "Hello, World",
  },
};

export const H3Display: StoryObj = {
  args: {
    as: "h3",
    display: true,
    children: "Hello, World",
  },
};

export const H4: StoryObj = {
  args: {
    as: "h4",
    children: "Hello, World",
  },
};

export const H4Display: StoryObj = {
  args: {
    as: "h4",
    display: true,
    children: "Hello, World",
  },
};

export const H5: StoryObj = {
  args: {
    as: "h5",
    children: "Hello, World",
  },
};

export const H5Display: StoryObj = {
  args: {
    as: "h5",
    display: true,
    children: "Hello, World",
  },
};

export const H6: StoryObj = {
  args: {
    as: "h6",
    children: "Hello, World",
  },
};

export const H6Display: StoryObj = {
  args: {
    as: "h6",
    display: true,
    children: "Hello, World",
  },
};
