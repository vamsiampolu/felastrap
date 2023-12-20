import { forwardRef, type ForwardedRef } from "react";
import { useFela } from "react-fela";
import { ComponentPropsWithRef } from "react";

export type LinkProps = ComponentPropsWithRef<"a">;

export const LinkComponent = (
  {
    children,
    className = "",
    href,
    rel = "",
    target = "",
    ...other
  }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const { css } = useFela();
  const link = css({
    fontWeight: 500,
    color: "#646cff",
    textDecoration: "inherit",
    ":hover": {
      color: "#535bf2",
    },
  });

  const cx = `${link} ${className || ""}`.trim();
  return (
    <a
      data-testid="link"
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      className={cx}
      {...other}
    >
      {children}
    </a>
  );
};
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(LinkComponent);
