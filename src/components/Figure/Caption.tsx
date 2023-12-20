import { ComponentPropsWithoutRef } from "react";
import { useFela } from "react-fela";

const rule = () => ({
  fontSize: "0.875em",
  color: "rgba(33, 37, 41, 0.75)",
});

export type CaptionProps = ComponentPropsWithoutRef<"figcaption">;

export const Caption = ({
  className = "",
  children,
  ...props
}: CaptionProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} figure-caption ${className}`.trim();
  return (
    <figcaption data-testid="figure-caption" className={cx} {...props}>
      {children}
    </figcaption>
  );
};
