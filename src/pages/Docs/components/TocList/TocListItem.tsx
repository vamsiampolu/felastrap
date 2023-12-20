import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const navListItemLinkRule = () => ({
  display: "block",
  padding: ".125rem 0 .125rem .75rem",
  color: "inherit",
  textDecoration: "none",
  borderLeft: ".125rem solid transparent",
});

export const TocListItem = ({
  children,
  href,
}: ComponentPropsWithoutRef<"a">) => {
  const { css } = useFela();
  return (
    <li>
      <a className={css(navListItemLinkRule)} href={href}>
        {children}
      </a>
    </li>
  );
};
