import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

export type ItemProps = ComponentPropsWithoutRef<"a">;

const rule = () => ({
  borderRadius: "0.375rem",
  color: "#212529",
  display: "inline-block",
  marginLeft: "1.125rem",
  marginTop: "0.125rem",
  padding: "0.1875rem 0.5rem",
  textDecoration: "none",
});

export const Item = ({ className = "", href, children }: ItemProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} bd-links-link ${className}`.trim();
  return (
    <li>
      <a href={href} className={cx}>
        {children}
      </a>
    </li>
  );
};
