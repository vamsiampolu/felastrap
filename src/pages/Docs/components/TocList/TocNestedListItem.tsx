import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFela } from "react-fela";

const nestedTocListRule = () => ({
  paddingLeft: "1rem",
  marginBottom: "0",
  listStyle: "none",
});

const navListItemLinkRule = () => ({
  display: "block",
  padding: ".125rem 0 .125rem .75rem",
  color: "inherit",
  textDecoration: "none",
  borderLeft: ".125rem solid transparent",
});

export const TocNestedListItem = ({
  children,
  href,
  label,
}: ComponentPropsWithoutRef<"a"> & { label: ReactNode }) => {
  const { css } = useFela();
  return (
    <li>
      <a className={css(navListItemLinkRule)} href={href}>
        {label}
      </a>
      <ul className={css(nestedTocListRule)}>{children}</ul>
    </li>
  );
};
