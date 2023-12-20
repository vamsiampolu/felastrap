import { ElementType } from "react";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import { DropDownItem, DropdownMenu } from "../Dropdown/DropdownMenu";
import type { NavVariant } from "../common";
import { NavItem, NavItemProps } from "./NavItem";
import { NavLink, NavLinkProps } from "./NavLink";

export type ItemType = "dropdown" | "link";
export type CustomDataNavItemProps = Partial<{
  className: string;
  id: string;
  variant: NavVariant;
  itemType: ItemType;
  active: boolean;
  disabled: boolean;
  label: string;
  fill: boolean;
  justified: boolean;
  href: string;
  options: DropDownItem[];
  card: boolean;
  onClick: NavLinkProps["onClick"];
}>;

export type DataNavItemProps<T extends ElementType> =
  PolymorphicComponentPropsWithoutRef<T, CustomDataNavItemProps>;

export const DataNavItem = <T extends ElementType>(
  props: DataNavItemProps<T>,
) => {
  const {
    card = false,
    as = "a",
    variant = "default",
    itemType = "link",
    active = false,
    disabled = false,
    label,
    fill = false,
    justified = false,
    href,
    className = "",
    options = [],
    onClick,
  } = props;

  return (
    <NavItem
      className={className}
      active={active}
      card={card}
      fill={fill}
      justified={justified}
      onClick={onClick as unknown as NavItemProps["onClick"]}
    >
      {itemType === "dropdown" ? (
        <DropdownMenu
          nav
          navVariant={variant}
          direction="down"
          label={label}
          items={options}
        />
      ) : (
        <NavLink
          as={as}
          card={card}
          href={href}
          active={active}
          disabled={disabled}
          fill={fill}
          justified={justified}
          variant={variant}
        >
          {label}
        </NavLink>
      )}
    </NavItem>
  );
};
