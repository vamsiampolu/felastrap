import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Alert, type AlertProps } from "./Alert";
import { Button } from "../Button";
import { Container, Row, Column } from "../Flex";

const meta: Meta<typeof Alert> = {
  title: "components/Alert/Alert",
  component: Alert,
};

export default meta;
export type Story = StoryObj<typeof Alert>;

const noop = () => undefined;

export const Primary: Story = {
  args: {
    children: "I am an alert.",
    isOpen: true,
    dismissable: false,
    onDismiss: noop,
    variant: "primary",
  },
};

export const Template: StoryFn<AlertProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeAlert = () => setIsOpen(false);
  const toggleAlert = () => setIsOpen((current) => !current);
  return (
    <Container>
      <Row>
        <Column span={2}>
          <Button variant={args.variant} onClick={toggleAlert}>
            {isOpen ? "Close Alert" : "Open Alert"}
          </Button>
        </Column>
        <Column offset={2} span={8}>
          <Alert dismissable isOpen={isOpen} onDismiss={closeAlert} {...args} />
        </Column>
      </Row>
    </Container>
  );
};

export const Dismissable = Template.bind({});
Dismissable.args = {
  children: "I am an alert.",
  variant: "warning",
};
