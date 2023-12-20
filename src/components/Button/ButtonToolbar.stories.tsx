import type { Meta, StoryObj } from "@storybook/react";
import { ButtonToolbar } from "./ButtonToolbar";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

export type Story = StoryObj<typeof ButtonToolbar>;
const meta: Meta<typeof ButtonToolbar> = {
  title: "components/ButtonToolbar",
  component: ButtonToolbar,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export const Basic: Story = {
  args: {
    children: (
      <>
        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="primary">
            Left
          </Button>
          <Button group variant="primary">
            Middle
          </Button>
          <Button group last isGtEqThree variant="primary">
            Right
          </Button>
        </ButtonGroup>

        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="secondary">
            Left
          </Button>
          <Button group variant="secondary">
            Middle
          </Button>
          <Button group last isGtEqThree variant="secondary">
            Right
          </Button>
        </ButtonGroup>

        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="info">
            Info
          </Button>
        </ButtonGroup>
      </>
    ),
  },
};
