import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { DataListGroup, DataListGroupProps } from "./DataListGroup";
import { Card } from "../Card";

const meta: Meta<typeof DataListGroup> = {
  title: "components/ListGroup/DataListGroup",
  component: DataListGroup,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const NoItems: StoryObj<typeof DataListGroup> = {
  args: {
    items: [],
  },
};

export const NoItemsCustomText: StoryObj<typeof DataListGroup> = {
  args: {
    items: [],
    noItemsText: "Sorry, Dave. No items here, not even a HAL 9000!",
  },
};

export const WithItems: StoryObj<typeof DataListGroup> = {
  args: {
    items: [
      {
        label: "Captain Elara Vance",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Pilot Jackson Reid",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Navigator Anika Patel",
        active: false,
        disabled: false,
        variant: "default",
      },
    ],
  },
};

export const Template: StoryFn<typeof DataListGroup> = (
  args: DataListGroupProps,
) => {
  const { ...props } = args;
  return (
    <Card>
      <DataListGroup {...props} />
    </Card>
  );
};

export const FlushStyle: StoryObj<typeof DataListGroup> = {
  args: {
    flush: true,
    items: [
      {
        label: "Captain Elara Vance",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Pilot Jackson Reid",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Navigator Anika Patel",
        active: false,
        disabled: false,
        variant: "default",
      },
    ],
  },
};

export const CardStyle: StoryObj<typeof DataListGroup> = Template.bind({});
export const CardFlushStyle: StoryObj<typeof DataListGroup> = Template.bind({});

CardStyle.args = {
  card: true,
  items: [
    {
      label: "Captain Elara Vance",
      active: false,
      disabled: false,
      variant: "default",
    },
    {
      label: "Pilot Jackson Reid",
      active: true,
      disabled: false,
      variant: "default",
    },
    {
      label: "Navigator Anika Patel",
      active: false,
      disabled: false,
      variant: "default",
    },
  ],
};

CardFlushStyle.args = {
  card: true,
  flush: true,
  items: [
    {
      label: "Captain Elara Vance",
      active: false,
      disabled: false,
      variant: "default",
    },
    {
      label: "Pilot Jackson Reid",
      active: true,
      disabled: false,
      variant: "default",
    },
    {
      label: "Navigator Anika Patel",
      active: false,
      disabled: false,
      variant: "default",
    },
  ],
};

export const Numbered: StoryObj<typeof DataListGroup> = {
  args: {
    numbered: true,
    items: [
      {
        label: "Captain Elara Vance",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Pilot Jackson Reid",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Navigator Anika Patel",
        active: false,
        disabled: false,
        variant: "default",
      },
    ],
  },
};

export const Horizontal: StoryObj<typeof DataListGroup> = {
  args: {
    horizontal: true,
    items: [
      {
        label: "Captain",
        active: false,
        disabled: false,
        variant: "default",
      },
      {
        label: "Pilot",
        active: true,
        disabled: false,
        variant: "default",
      },
      {
        label: "Navigator",
        active: false,
        disabled: false,
        variant: "default",
      },
    ],
  },
};
