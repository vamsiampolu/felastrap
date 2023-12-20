import { omit } from "../../utils";
import { Link } from "../Link/Link";
import { Variant } from "../common";
import { ListGroup } from "./ListGroup";
import { ListGroupItem } from "./ListGroupItem";
import {
  ListGroupItemAction,
  ListGroupItemActionProps,
} from "./ListGroupItemAction";

export type Item = {
  active: boolean;
  disabled: boolean;
  variant: Variant;
  label: string;
  action?: ListGroupItemActionProps<typeof Link> | null;
};

export type DataListGroupProps = {
  card?: boolean;
  flush?: boolean;
  horizontal?: boolean;
  numbered?: boolean;
  noItemsText?: string;
  items?: Item[];
};

export const NoItems = ({
  noItemsText = "No Items",
}: {
  noItemsText?: string;
}) => {
  return (
    <ListGroupItem active={false} disabled={false} first last variant="default">
      {noItemsText}
    </ListGroupItem>
  );
};

export const GroupAction = ({
  action = null,
}: {
  action?: ListGroupItemActionProps<typeof Link> | null;
}) => {
  if (!action) {
    return null;
  }

  const actionProps = omit(action as Record<string, object>, ["variant", "as"]);

  return (
    <ListGroupItemAction
      variant={action.variant || "default"}
      as={action.as || "a"}
      {...(actionProps as Omit<
        ListGroupItemActionProps<typeof Link>,
        "variant" | "as"
      >)}
    />
  );
};

export const GroupItem = ({
  item,
  index,
  arr,
}: {
  item: Item;
  index: number;
  arr: Item[];
}) => {
  const first = index === 0;
  const last = index === arr.length - 1;
  const {
    active = false,
    disabled = false,
    variant = "default",
    label,
    action = null,
  } = item;

  return (
    <ListGroupItem
      first={first}
      last={last}
      active={active}
      disabled={disabled}
      variant={variant}
    >
      {label}
      <GroupAction action={action} />
    </ListGroupItem>
  );
};

export const DataListGroup = ({
  card = false,
  flush = false,
  horizontal = false,
  numbered = false,
  noItemsText = "No Items",
  items = [],
}: DataListGroupProps) => {
  return (
    <ListGroup
      card={card}
      flush={flush}
      horizontal={horizontal}
      numbered={numbered}
    >
      {items.length > 0 ? (
        items.map((item, index, arr) => (
          <GroupItem
            key={`group-item-${index}`}
            item={item}
            index={index}
            arr={arr}
          />
        ))
      ) : (
        <NoItems noItemsText={noItemsText} />
      )}
    </ListGroup>
  );
};
