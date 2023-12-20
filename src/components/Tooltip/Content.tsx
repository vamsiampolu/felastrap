import { ForwardedRef, forwardRef } from "react";
import { DivProps } from "../common";
import { CSSProperties } from "fela";
import { useFela } from "react-fela";

export type ContentProps = DivProps & {
  open?: boolean;
  transitionStyles: CSSProperties;
  tooltip: string;
};

const rule = () => ({
  zIndex: 1080,
  display: "block",
  fontFamily:
    'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: 1.5,
  textAlign: "start",
  textDecoration: "none",
  textShadow: "none",
  textTransform: "none",
  letterSpacing: "normal",
  wordBreak: "normal",
  whiteSpace: "normal",
  wordSpacing: "normal",
  lineBreak: "auto",
  fontSize: "0.875rem",
  wordWrap: "break-word",
  opacity: 0.9,
});

const innerRule = () => ({
  maxWidth: "200px",
  padding: "0.25rem 0.5rem",
  color: "#fff",
  textAlign: "center",
  backgroundColor: "#000",
  borderRadius: "0.375rem",
});

export const ContentComponent = (
  {
    tooltip,
    children,
    style,
    className = "",
    transitionStyles,
    open = false,
    ...props
  }: ContentProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { css } = useFela();

  if (!open) {
    return null;
  }

  const cx = `${css(rule)} ${className}`;
  const floatingClassName = `${css(innerRule)} floating`;

  return (
    <div
      data-testid="tooltip-content"
      className={cx}
      ref={ref}
      style={style}
      {...props}
    >
      <div
        data-testid="tooltip-content-inner"
        style={transitionStyles}
        className={floatingClassName}
      >
        {tooltip}
      </div>
      {children}
    </div>
  );
};

export const Content = forwardRef(ContentComponent);
