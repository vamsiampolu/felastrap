import { ElementType } from "react";
import { useFela } from "react-fela";
import { PolymorphicComponentPropsWithoutRef } from "../../polymorphicComponentProps";
import type { StyleProps } from "../common";

export type CardSubtitleProps<T extends ElementType> =
  PolymorphicComponentPropsWithoutRef<
    T,
    {
      color?: string;
    }
  >;

const subtitle = ({
  color = "#000",
}: StyleProps<CardSubtitleProps<"div">>) => ({
  color,
  marginTop: "calc(-0.5 * 0.5rem)",
  marginBottom: 0,
});

export const CardSubtitle = <T extends ElementType>({
  color = "#000",
  className,
  as,
  children,
  ...other
}: CardSubtitleProps<T>) => {
  const Component = as || "div";
  const { css } = useFela({ color });
  const cx = `${css(subtitle)} ${className || ""}`.trim();
  return (
    <Component data-testid="card-subtitle" className={cx} {...other}>
      {children}
    </Component>
  );
};
