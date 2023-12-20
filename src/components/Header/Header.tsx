import type { ComponentPropsWithoutRef, ElementType } from "react";
import { useFela } from "react-fela";
import type { HeaderTypes, StyleProps, Theme } from "../common";
import {
  displayFontSizeByName,
  fontSizeByName,
  mediaQueryFontSize,
} from "./mappings";

export type As = ElementType;
export type CustomProps = {
  as: As;
  display?: boolean;
};

export type HeaderProps = ComponentPropsWithoutRef<"h3"> & CustomProps;

const rule = ({ as, display }: StyleProps<HeaderProps>) => {
  const fontSize = display
    ? displayFontSizeByName[as as HeaderTypes]
    : fontSizeByName[as as HeaderTypes];
  const fontWeight = display ? 300 : 500;

  return {
    color: "inherit",
    fontWeight,
    fontSize,
    lineHeight: 1.2,
    marginTop: 0,
    marginBottom: "0.5rem",
    "@media (min-width: 1200px)": {
      fontSize: display
        ? displayFontSizeByName[as as HeaderTypes]
        : mediaQueryFontSize[as as HeaderTypes],
    },
  };
};

export const Header = ({
  as,
  children,
  display = false,
  ...other
}: HeaderProps) => {
  const { css } = useFela<Theme, HeaderProps>({ as, display });
  const Component = as;
  return (
    <Component className={css(rule)} {...other}>
      {children}
    </Component>
  );
};
