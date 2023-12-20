import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const base = () => ({
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  color: "rgba(0, 0, 0, 0.65)",
});

export type SpanProps = Omit<ComponentPropsWithoutRef<"span">, "children">;

export const NavbarText = ({
  className = "",
  text,
  ...props
}: { text: string } & SpanProps) => {
  const { css } = useFela();
  const cx = `${css(base)} navbar-text ${className}`.trim();
  return (
    <span data-testid="navbar-text" className={cx} {...props}>
      {text}
    </span>
  );
};
