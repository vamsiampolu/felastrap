import type { Meta, StoryObj } from "@storybook/react";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "components/Nav/Nav",
  component: Nav,
};

export default meta;
export type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    items: [
      {
        active: true,
        label: "Tab 1",
        itemType: "link",
      },
      {
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    items: [
      {
        active: true,
        label: "Tab 1",
        itemType: "link",
      },
      {
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Tabs: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "tabs",
    items: [
      {
        active: true,
        label: "First Tab",
        itemType: "link",
      },
      {
        active: false,
        label: "Second Tab",
        itemType: "link",
      },
      {
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Pills: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "pills",
    items: [
      {
        active: true,
        label: "First Tab",
        itemType: "link",
      },
      {
        active: false,
        label: "Second Tab",
        itemType: "link",
      },
      {
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Underline: Story = {
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "underline",
    items: [
      {
        active: true,
        label: "First Tab",
        itemType: "link",
      },
      {
        active: false,
        label: "Second Tab",
        itemType: "link",
      },
      {
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Fill: Story = {
  args: {
    variant: "underline",
    items: [
      {
        fill: true,
        active: true,
        label: "First Tab",
        itemType: "link",
      },
      {
        fill: true,
        active: false,
        label: "Second Tab",
        itemType: "link",
      },
      {
        fill: true,
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};

export const Justify: Story = {
  args: {
    variant: "underline",
    items: [
      {
        justified: true,
        active: true,
        label: "First Tab",
        itemType: "link",
      },
      {
        justified: true,
        active: false,
        label: "Second Tab",
        itemType: "link",
      },
      {
        justified: true,
        label: "Dropdown 1",
        itemType: "dropdown",
        options: [
          {
            text: "Header",
            type: "header",
          },
          {
            text: "Item 1",
            type: "item",
            active: true,
          },
          {
            type: "divider",
          },
          {
            text: "Disabled Item",
            type: "item",
            disabled: true,
          },
        ],
      },
    ],
  },
};
