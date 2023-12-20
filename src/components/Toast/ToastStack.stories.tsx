import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { ToastStack } from "./Stack";
import { useState } from "react";

export type Story = StoryObj<typeof ToastStack>;
const meta: Meta<typeof ToastStack> = {
  title: "components/Toast/ToastStack",
  component: ToastStack,
};

export default meta;

export const Template: StoryFn<typeof ToastStack> = (args) => {
  const { toasts = [], placement } = args;
  const initialStates = toasts.map(({ isOpen = false }) => ({ isOpen }));
  const setOpenToasts = useState(initialStates)[1];

  const closeToast = (toastIndex: number) =>
    setOpenToasts((states) =>
      states.map((state, index) =>
        index === toastIndex ? { isOpen: false } : state,
      ),
    );

  const stackToasts = toasts.map((item, index) => ({
    ...item,
    close: () => closeToast(index),
  }));

  return (
    <ToastStack
      className="toast-stack"
      toasts={stackToasts}
      placement={placement}
    />
  );
};

export const Example: Story = Template.bind({});
Example.args = {
  placement: "bottom-right",
  toasts: [
    {
      close: () => undefined,
      isOpen: true,
      body: "Heads, up! Toasts will stack automatically.",
      header: {
        title: "Bootstrap",
        right: "2 seconds ago",
      },
    },
    {
      close: () => undefined,
      isOpen: true,
      body: "See? Just like this.",
      header: {
        title: "Bootstrap",
        right: "now",
      },
    },
  ],
};
