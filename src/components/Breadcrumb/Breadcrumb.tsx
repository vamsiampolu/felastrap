import { Wrapper } from "./Wrapper";
import { Item } from "./Item";

export type LinkItem = Readonly<{ href: string; label: string }>;
export type ActiveItem = Readonly<{ label: string; href?: string }>;
export type ItemObject = [] | readonly [...LinkItem[], ActiveItem];

export type BreadcrumbProps = {
  backgroundColor?: string | null;
  borderRadius?: string | null;
  divider?: string;
  items: ItemObject;
};

export const Breadcrumb = ({
  backgroundColor = null,
  borderRadius = null,
  divider = "/",
  items = [],
}: BreadcrumbProps) => {
  return (
    <Wrapper backgroundColor={backgroundColor} borderRadius={borderRadius}>
      {items.map(({ href, label }, index, arr) => (
        <Item
          divider={divider}
          key={`breadcrumb-item-${index}`}
          first={index === 0}
          active={index === arr.length - 1}
          label={label}
          href={href}
        />
      ))}
    </Wrapper>
  );
};
