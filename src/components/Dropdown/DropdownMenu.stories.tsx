import { DropdownMenu } from "./DropdownMenu";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DropdownMenu> = {
  title: "components/Dropdown/DropdownMenu",
  component: DropdownMenu,
};

export default meta;
export type Story = StoryObj<typeof DropdownMenu>;

export const Basic = {
  args: {
    direction: "down",
    split: false,
    size: "medium",
    variant: "default",
    label: "Dropdown Button",
    items: [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: false,
      },
    ],
  },
};

export const Header = {
  args: {
    direction: "down",
    split: false,
    size: "medium",
    variant: "default",
    label: "Dropdown Button",
    items: [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
      },
    ],
  },
};

export const Centered = {
  args: {
    direction: "centered",
    split: false,
    size: "medium",
    variant: "default",
    label: "A Dropdown Button",
    items: [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ],
  },
};

export const Left = {
  args: {
    direction: "start",
    split: false,
    size: "medium",
    variant: "default",
    label: "A Dropdown Button",
    items: [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ],
  },
};

export const Right = {
  args: {
    direction: "end",
    split: false,
    size: "medium",
    variant: "default",
    label: "A Dropdown Button",
    items: [
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ],
  },
};

export const HeaderAndDivider = {
  args: {
    direction: "down",
    split: false,
    size: "medium",
    variant: "default",
    label: "Dropdown Button",
    items: [
      {
        type: "header",
        text: "A Dropdown Header",
        disabled: false,
        active: false,
      },
      {
        type: "divider",
      },
      {
        type: "item",
        text: "Item 1",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Item 2",
        disabled: true,
        active: false,
      },
    ],
  },
};

export const MultipleSections = {
  args: {
    direction: "down",
    split: false,
    size: "medium",
    variant: "default",
    label: "A Dropdown Button",
    items: [
      {
        type: "header",
        text: "Fruits",
        disabled: false,
        active: false,
      },
      {
        type: "divider",
      },
      {
        type: "item",
        text: "Apples",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Pears",
        disabled: true,
        active: false,
      },
      {
        type: "header",
        text: "Vegetables",
        disabled: false,
        active: false,
      },
      {
        type: "divider",
      },
      {
        type: "item",
        text: "Potatoes",
        disabled: false,
        active: true,
      },
      {
        type: "item",
        text: "Okra",
        disabled: true,
        active: false,
      },
    ],
  },
};
