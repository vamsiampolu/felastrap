import { useFela } from "react-fela";
import type { CSSProperties } from "fela";
import type { ComponentPropsWithoutRef } from "react";
import type { Theme, StyleProps } from "../common";

export type WrapperProps = ComponentPropsWithoutRef<"ol"> & {
  backgroundColor: string | null;
  borderRadius: string | number | null;
};

const rule = ({
  backgroundColor = null,
  borderRadius = null,
}: StyleProps<WrapperProps>) => {
  const padding = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
  };

  const style: CSSProperties = {
    ...padding,
    display: "flex",
    flexWrap: "wrap",
    marginBottom: "1rem",
    fontSize: "1rem",
    listStyle: "none",
  };

  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  if (borderRadius) {
    style.borderRadius = borderRadius;
  }

  return style;
};

export const Wrapper = ({
  borderRadius = null,
  backgroundColor = null,
  children,
  ...other
}: WrapperProps) => {
  const { css } = useFela<Theme, WrapperProps>({
    borderRadius,
    backgroundColor,
  });

  const className = css(rule);
  return (
    <nav data-testid="breadcrumb" aria-label="Breadcrumb">
      <ol className={className} {...other}>
        {children}
      </ol>
    </nav>
  );
};
