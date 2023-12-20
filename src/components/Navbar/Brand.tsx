import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFela } from "react-fela";
import { Link } from "../Link/Link";
import { StyleProps } from "../common";
export type ImageProps = ComponentPropsWithoutRef<"img">;

const rule = ({ name }: StyleProps<{ name: boolean }>) => ({
  paddingTop: "0.3125rem",
  paddingBottom: "0.3125rem",
  marginRight: "1rem",
  fontSize: "1.25rem",
  textDecoration: "none",
  whiteSpace: "nowrap",
  ":focus": {
    color: "color: rgba(0, 0, 0, 0.3)",
  },
  ":hover": {
    color: "color: rgba(0, 0, 0, 0.3)",
  },
  "> img": {
    display: "inline-block",
    verticalAlign: "text-top",
    marginTop: "-0.25rem",
    marginRight: name ? "0.75rem" : 0,
  },
});

export type BrandProps = {
  image?: ImageProps | null;
  className?: string;
  href?: string;
  children?: ReactNode;
};

export const Brand = ({
  className = "",
  children,
  image = null,
  href = "#",
}: BrandProps) => {
  const { src, ...imageProps } = image ?? {};
  const { css } = useFela({ name: typeof children === "string" });

  if (image && src) {
    return (
      <Link
        data-testid="navbar-brand"
        className={`${css(rule)} ${className} navbar-brand`.trim()}
        href={href}
      >
        {image && (
          <img data-testid="navbar-brand-image" src={src} {...imageProps} />
        )}
        {children}
      </Link>
    );
  }

  return (
    <Link
      data-testid="navbar-brand"
      className={`${css(rule)} ${className} navbar-brand`.trim()}
      href={href}
    >
      {children}
    </Link>
  );
};
