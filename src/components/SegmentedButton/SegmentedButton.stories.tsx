import { StoryObj, Meta } from "@storybook/react";
import { SegmentedButton } from "./SegmentedButton";
import { GroupInput } from "../Form/InputGroup";

export type Story = StoryObj<typeof SegmentedButton>;

const meta: Meta<typeof SegmentedButton> = {
  title: "components/SegmentedButton",
  component: SegmentedButton,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Left: Story = {
  args: {
    action: "Action",
    children: (
      <GroupInput aria-label="Text input with segmented dropdown button" />
    ),
    items: [
      {
        type: "item",
        text: "Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Another Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Something else here",
        disabled: false,
      },
      {
        type: "divider",
        text: "",
        disabled: false,
      },
      {
        type: "item",
        text: "Seperated Link",
        disabled: false,
      },
    ],
  },
};

export const Right: Story = {
  args: {
    position: "right",
    action: "Action",
    children: (
      <GroupInput aria-label="Text input with segmented dropdown button" />
    ),
    items: [
      {
        type: "item",
        text: "Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Another Action",
        disabled: false,
      },
      {
        type: "item",
        text: "Something else here",
        disabled: false,
      },
      {
        type: "divider",
        text: "",
        disabled: false,
      },
      {
        type: "item",
        text: "Seperated Link",
        disabled: false,
      },
    ],
  },
};
