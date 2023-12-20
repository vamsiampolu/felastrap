import { StoryFn } from "@storybook/react";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "./ListGroupItem";

export default {
  name: "components/ListGroup/ListGroup",
  component: ListGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    card: { control: "boolean" },
    className: { control: "text" },
    flush: { control: "boolean" },
    horizontal: { control: "boolean" },
    numbered: { control: "boolean" },
  },
};

let Template: StoryFn<typeof ListGroup> = (args) => (
  <ListGroup {...args}>
    <ListGroupItem first>First List Item</ListGroupItem>
    <ListGroupItem>Second List Item</ListGroupItem>
    <ListGroupItem last>Third List Item</ListGroupItem>
  </ListGroup>
);

export const Simple = Template.bind({});
Simple.args = {
  card: false,
  flush: false,
  horizontal: false,
  numbered: false,
};

export const Flush = Template.bind({});
Flush.args = {
  card: false,
  flush: true,
  horizontal: false,
  numbered: false,
};

export const Numbered = Template.bind({});
Numbered.args = {
  card: false,
  flush: false,
  horizontal: false,
  numbered: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  card: false,
  flush: false,
  horizontal: true,
  numbered: false,
};

// eslint-disable-next-line react/display-name
Template = (args) => {
  return (
    <ListGroup {...args}>
      <ListGroupItem first variant="primary">
        Primary List Item
      </ListGroupItem>
      <ListGroupItem variant="secondary">Secondary List Item</ListGroupItem>
      <ListGroupItem variant="success">Success List Item</ListGroupItem>
      <ListGroupItem variant="info">Info List Item</ListGroupItem>
      <ListGroupItem variant="warning">Warning List Item</ListGroupItem>
      <ListGroupItem last variant="danger">
        Danger List Item
      </ListGroupItem>
    </ListGroup>
  );
};

export const Variants = Template.bind({});
Variants.args = {
  card: false,
  flush: false,
  horizontal: false,
  numbered: false,
};
