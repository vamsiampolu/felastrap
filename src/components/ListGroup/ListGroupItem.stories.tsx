import { StoryFn } from "@storybook/react";
import { Badge } from "../Badge/Badge";
import { ListGroup } from "./ListGroup";
import { ListGroupItem, type ListItemProps } from "./ListGroupItem";
import { ListGroupItemAction } from "./ListGroupItemAction";

export default {
  name: "components/ListGroup/ListGroupItem",
  component: ListGroupItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary", "info", "warning", "danger"],
    },
    className: { control: "text" },
    first: { control: "boolean" },
    last: { control: "boolean" },
    active: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export let Template: StoryFn<typeof ListGroupItem> = (args) => (
  <ListGroup>
    <ListGroupItem first {...args}>
      First Item
    </ListGroupItem>
    <ListGroupItem {...args}>Second Item</ListGroupItem>
    <ListGroupItem last {...args}>
      Last Item
    </ListGroupItem>
  </ListGroup>
);

export const Simple = Template.bind({});
Simple.args = {
  variant: "primary",
};

// eslint-disable-next-line react/display-name
Template = ({
  variant = "default",
  active = false,
  disabled = false,
}: ListItemProps) => {
  return (
    <ListGroup>
      <ListGroupItem first active={active} disabled={disabled}>
        <ListGroupItemAction href="https://google.com" variant={variant}>
          Click Me
        </ListGroupItemAction>
      </ListGroupItem>
      <ListGroupItem active={active} disabled={disabled}>
        <ListGroupItemAction as={"button"} variant={variant}>
          Click Me
        </ListGroupItemAction>
      </ListGroupItem>
      <ListGroupItem last active={active} disabled={disabled}>
        Just some plain text
      </ListGroupItem>
    </ListGroup>
  );
};
export const WithActions = Template.bind({});
WithActions.args = {
  variant: "default",
  first: true,
  last: true,
  active: false,
  disabled: false,
};

// eslint-disable-next-line react/display-name
Template = (args) => {
  return (
    <ListGroup>
      <ListGroupItem
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        {...args}
      >
        <div>Click Me</div>
        <Badge variant="primary" pill>
          5
        </Badge>
      </ListGroupItem>
    </ListGroup>
  );
};

export const WithBadge = Template.bind({
  first: true,
  last: true,
  variant: "default",
  active: false,
  disabled: false,
});
