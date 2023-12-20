import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";
import { useState } from "react";
import { Button } from "../Button";

export type Story = StoryObj<typeof Toast>;
const meta: Meta<typeof Toast> = {
  title: "components/Toast",
  component: Toast,
};

export default meta;

export const Template: StoryFn<typeof Toast> = (args) => {
  const { isOpen: initialOpen = false, placement, close, ...props } = args;
  const [isOpen, setIsOpen] = useState(initialOpen);
  const toggle = () => setIsOpen((value) => !value);
  const onClose = () => {
    setIsOpen(false);
    close();
  };
  return (
    <div className="container">
      <Button variant="primary" onClick={toggle}>
        {isOpen ? "Close Toast" : "Open Toast"}
      </Button>
      <Toast close={onClose} isOpen={isOpen} placement={placement} {...props} />
    </div>
  );
};

export const Example: Story = Template.bind({});
Example.args = {
  placement: undefined,
  isOpen: true,
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const BottomRight: Story = Template.bind({});
BottomRight.args = {
  isOpen: true,
  placement: "bottom-right",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const BottomCenter: Story = Template.bind({});
BottomCenter.args = {
  isOpen: true,
  placement: "bottom-center",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const BottomLeft: Story = Template.bind({});
BottomLeft.args = {
  isOpen: true,
  placement: "bottom-left",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const TopRight: Story = Template.bind({});
TopRight.args = {
  isOpen: true,
  placement: "top-right",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const TopCenter: Story = Template.bind({});
TopCenter.args = {
  isOpen: true,
  placement: "top-center",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const TopLeft: Story = Template.bind({});
TopLeft.args = {
  isOpen: true,
  placement: "top-left",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const MiddleLeft = Template.bind({});
MiddleLeft.args = {
  isOpen: true,
  placement: "middle-left",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const MiddleCenter = Template.bind({});
MiddleCenter.args = {
  isOpen: true,
  placement: "middle-center",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};

export const MiddleRight = Template.bind({});
MiddleRight.args = {
  isOpen: true,
  placement: "middle-right",
  body: "Hello, world! This is a toast message.",
  header: {
    title: "Bootstrap",
    right: "11 mins ago",
  },
};
