import type { Meta, StoryObj } from "@storybook/react";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

export type Story = StoryObj<typeof ButtonGroup>;
const meta: Meta<typeof ButtonGroup> = {
  title: "components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Basic = {
  args: {
    vertical: false,
    children: (
      <>
        <Button group variant="primary">
          Left
        </Button>
        <Button group variant="primary">
          Middle
        </Button>
        <Button group last isGtEqThree variant="primary">
          Right
        </Button>
      </>
    ),
  },
};

export const Mixed = {
  args: {
    vertical: false,
    children: (
      <>
        <Button group variant="danger">
          Left
        </Button>
        <Button group variant="warning">
          Middle
        </Button>
        <Button group last isGtEqThree variant="success">
          Right
        </Button>
      </>
    ),
  },
};

export const Outlined = {
  args: {
    vertical: false,
    children: (
      <>
        <Button group outline variant="primary">
          Left
        </Button>
        <Button group outline variant="primary">
          Middle
        </Button>
        <Button outline group last isGtEqThree variant="primary">
          Right
        </Button>
      </>
    ),
  },
};

export const Small = {
  args: {
    vertical: false,
    children: (
      <>
        <Button group groupSize="small" variant="primary">
          Left
        </Button>
        <Button group groupSize="small" variant="primary">
          Middle
        </Button>
        <Button group groupSize="small" last isGtEqThree variant="primary">
          Right
        </Button>
      </>
    ),
  },
};

export const Large = {
  args: {
    vertical: false,
    children: (
      <>
        <Button group groupSize="large" variant="primary">
          Left
        </Button>
        <Button group groupSize="large" variant="primary">
          Middle
        </Button>
        <Button group groupSize="large" last isGtEqThree variant="primary">
          Right
        </Button>
      </>
    ),
  },
};

export const Vertical = {
  args: {
    vertical: true,
    children: (
      <>
        <Button first group groupVertical variant="primary">
          Left
        </Button>
        <Button group groupVertical variant="primary">
          Middle
        </Button>
        <Button group last groupVertical isGtEqThree variant="primary">
          Right
        </Button>
      </>
    ),
  },
};
