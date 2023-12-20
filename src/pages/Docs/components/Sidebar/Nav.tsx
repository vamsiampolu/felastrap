import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type NavProps = ComponentPropsWithoutRef<"nav">;

export const Nav = ({
  id = "bd-docs-nav",
  children,
  className = "",
}: NavProps) => {
  const { css } = useFela();
  const cx = `${css({
    width: "100% !important",
  })} bd-links ${className}`.trim();
  return (
    <nav className={cx} id={id} aria-label="Docs navigation">
      {children}
    </nav>
  );
};
