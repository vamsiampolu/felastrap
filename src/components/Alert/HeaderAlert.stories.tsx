import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { HeaderAlert } from "./HeaderAlert";
import { useState } from "react";
import type { AlertProps } from "./Alert";
import { Container } from "../Flex";
import { Button } from "../Button";

const meta: Meta<typeof HeaderAlert> = {
  title: "components/Alert/HeaderAlert",
  tags: ["autodocs"],
  component: HeaderAlert,
};

export default meta;
export type Story = StoryObj<typeof HeaderAlert>;

export const Template: StoryFn<AlertProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeAlert = () => setIsOpen(false);
  const toggleAlert = () => setIsOpen((current) => !current);
  return (
    <Container>
      <HeaderAlert
        dismissable
        isOpen={isOpen}
        onDismiss={closeAlert}
        {...args}
      />
      <Button
        style={{ marginTop: "20%", marginLeft: "50%" }}
        variant={args.variant}
        onClick={toggleAlert}
      >
        {isOpen ? "Close Alert" : "Open Alert"}
      </Button>
    </Container>
  );
};

export const Basic: Story = Template.bind({});
Basic.args = {
  children: "I am a page alert",
  dismissable: true,
  variant: "warning",
};
