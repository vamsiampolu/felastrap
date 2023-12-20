import { NavContainer } from "./NavContainer";
import { DataNavItem, DataNavItemProps } from "./DataNavItem";
import { NavVariant } from "../common";
import { useState, type MouseEvent, ElementType } from "react";

export type NavProps<T extends ElementType> = Partial<{
  id: string;
  role: string;
  card: boolean;
  className: string;
  variant: NavVariant;
  items: Omit<DataNavItemProps<T>, "variant">[];
}>;

export const Nav = <T extends ElementType = "a">({
  id,
  role,
  className = "",
  variant = "default",
  card = false,
  items = [],
}: NavProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <NavContainer role={role} id={id} variant={variant} className={className}>
      <>
        {items.map((item, index) => {
          const onItemClick = (e: MouseEvent<HTMLElement>) => {
            e.preventDefault();
            setActiveIndex(index);
          };

          const { as, className, ...itemProps } = item;

          return (
            <DataNavItem
              as={as || ("a" as ElementType)}
              className={className}
              key={`nav-item-${index}`}
              card={card}
              onClick={onItemClick}
              variant={variant}
              {...itemProps}
              active={index === activeIndex}
            />
          );
        })}
      </>
    </NavContainer>
  );
};
