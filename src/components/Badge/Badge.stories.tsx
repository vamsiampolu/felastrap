import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { Badge } from "../Badge/Badge";
import { Button } from "../Button/Button";
import { Header } from "../Header/Header";

export type Story = StoryObj<typeof Badge>;
const meta: Meta<typeof Badge> = {
  title: "components/Badge",
  tags: ["autodocs"],
  component: Badge,
  parameters: {
    layout: ["centered"],
  },
};

export default meta;

export let Template: StoryFn<typeof Badge> = (args) => {
  const { children, ...props } = args;
  return (
    <Header as="h3">
      Hello, there{"!"}
      <Badge {...props}>{children}</Badge>
    </Header>
  );
};

export const Basic: Story = {
  args: {
    children: "12",
  },
};

export const Primary: Story = {
  args: {
    children: "12",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "12",
    variant: "secondary",
  },
};

export const Info: Story = {
  args: {
    children: "12",
    variant: "info",
  },
};

export const Danger: Story = {
  args: {
    children: "12",
    variant: "danger",
  },
};

export const Success: Story = {
  args: {
    children: "12",
    variant: "success",
  },
};

export const HeaderBadge: Story = Template.bind({});
HeaderBadge.args = {
  children: "12",
  heading: true,
};

export const Pill: Story = {
  args: {
    children: 12,
    pill: true,
  },
};

export const PillHeader: Story = Template.bind({});
PillHeader.args = {
  children: 12,
  heading: true,
  pill: true,
};

// eslint-disable-next-line react/display-name
Template = (args) => {
  const { children, ...props } = args;
  return (
    <Button positionedBadge>
      Hello, there{"!"}
      <Badge {...props}>{children}</Badge>
    </Button>
  );
};

export const ButtonBadge = Template.bind({});
ButtonBadge.args = {
  button: true,
  children: "12",
};

export const ButtonPositioned = Template.bind({});
ButtonPositioned.args = {
  positioned: true,
  children: "23",
};

export const ButtonPositionedPill = Template.bind({});
ButtonPositionedPill.args = {
  pill: true,
  positioned: true,
  children: "23",
};
