import type { CSSProperties, IStyle } from "fela";
import type { ElementType } from "react";
import { forwardRef } from "react";
import { useFela } from "react-fela";
import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef,
} from "../../polymorphicComponentProps";
import {
  BorderRadius,
  ColorMapping,
  FontSize,
  PaddingBySize,
  Size,
  StyleFunction,
  StyleProps,
  Theme,
  Variant,
} from "../common";

export type CustomProps = Partial<{
  active: boolean;
  first: boolean;
  last: boolean;
  disabled: boolean;
  group: boolean;
  outline: boolean;
  positionedBadge: boolean;
  size: Size;
  variant: Variant;
  isGtEqThree: boolean;
  groupSize: Size;
  groupVertical: boolean;
}>;

export type ButtonProps<C extends ElementType> =
  PolymorphicComponentPropsWithRef<C, CustomProps>;

const colorByVariant: ColorMapping = {
  danger: "#fff",
  default: "#333",
  info: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  warning: "#000",
};

const backgroundColorByVariant: ColorMapping = {
  default: "#fff",
  danger: "#dc3545",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const borderColorByVariant: ColorMapping = {
  danger: "#dc3545",
  default: "#ccc",
  info: "#0dcaf0",
  primary: "#2e6da4",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const paddingBySize: PaddingBySize = {
  small: {
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  medium: {
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  large: {
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
};

const fontSizeMapping: Record<Size, FontSize> = {
  small: "0.875rem",
  medium: "14px",
  large: "1.25rem",
};

const activeColor: ColorMapping = {
  default: "#333",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  info: "#000",
  warning: "#000",
  danger: "#fff",
};

const activeBorderColor: ColorMapping = {
  danger: "#a52834",
  default: "#adadad",
  info: "#25cff2",
  primary: "#0a53be",
  secondary: "#51585e",
  success: "#13653f",
  warning: "#ffc720",
};

const activeBackgroundColor: ColorMapping = {
  danger: "#b02a37",
  default: "#e6e6e6",
  info: "#3dd5f3",
  primary: "#0a58ca",
  secondary: "#565e64",
  success: "#146c43",
  warning: "#ffcd39",
};

const hoverBorderColor: ColorMapping = {
  danger: "#b02a37",
  default: "#adadad",
  info: "#25cff2",
  primary: "#0a58ca",
  secondary: "#565e64",
  success: "#146c43",
  warning: "#ffc720",
};

const hoverColor: ColorMapping = {
  danger: "#fff",
  default: "#333",
  info: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  warning: "#000",
};

const hoverBackgroundColor: ColorMapping = {
  danger: "#bb2d3b",
  default: "#e6e6e6",
  info: "#31d2f2",
  primary: "#0b5ed7",
  secondary: "#5c636a",
  success: "#157347",
  warning: "#ffca2c",
};

const disabledColor: ColorMapping = {
  danger: "#fff",
  default: "#333",
  info: "#000",
  primary: "#fff",
  secondary: "#fff",
  success: "#fff",
  warning: "#000",
};

const disabledBackgroundColor: ColorMapping = {
  danger: "#dc3545",
  default: "#fff",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const disabledBorderColor: ColorMapping = {
  danger: "#dc3545",
  default: "#ccc",
  info: "#0dcaf0",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#198754",
  warning: "#ffc107",
};

const focusBoxShadow: ColorMapping = {
  danger: "rgba(225, 83, 97, .5)",
  default: "rgba(0, 0, 0, 0.125)",
  info: "rgba(11, 172, 204, .5)",
  primary: "rgba(49, 132, 253, .5)",
  secondary: "rgba(130, 138, 145, .5)",
  success: "rgba(60, 153, 110, .5)",
  warning: "rgba(217, 164, 6, .5)",
};

const borderRadiusBySize: Record<Size, BorderRadius> = {
  small: {
    borderTopLeftRadius: "0.25rem",
    borderTopRightRadius: "0.25rem",
    borderBottomRightRadius: "0.25rem",
    borderBottomLeftRadius: "0.25rem",
  },
  medium: {
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottomRightRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
  large: {
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0.5rem",
    borderBottomRightRadius: "0.5rem",
    borderBottomLeftRadius: "0.5rem",
  },
};

const btnStyle: StyleFunction<CustomProps> = (
  props: StyleProps<CustomProps>,
) => {
  const style: IStyle = {
    ...borderRadiusBySize[props.size!],
    ...paddingBySize[props.size!],
    backgroundColor: backgroundColorByVariant[props.variant!],
    backgroundImage: "none",
    borderColor: borderColorByVariant[props.variant!],
    borderStyle: "solid",
    borderWidth: "1px",
    color: colorByVariant[props.variant!],
    cursor: "pointer",
    display: "inline-block",
    fontSize: fontSizeMapping[props.size!],
    fontWeight: 400,
    lineHeight: 1.42857143,
    marginBottom: 0,
    textAlign: "center",
    touchAction: "manipulation",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    userSelect: "none",
    ":active": {
      color: activeColor[props.variant!],
      borderColor: activeBorderColor[props.variant!],
      backgroundColor: activeBackgroundColor[props.variant!],
      outline: 0,
      backgroundImage: "none",
      boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
    },
    ":disabled": {
      backgroundColor: disabledBackgroundColor[props.variant!],
      borderColor: disabledBorderColor[props.variant!],
      color: disabledColor[props.variant!],
      boxShadow: "none",
      cursor: "not-allowed",
      filter: "alpha(opacity=65)",
      opacity: 0.65,
      pointerEvents: "none",
    },
    ":focus-visible": {
      color: hoverColor[props.variant!],
      backgroundColor: hoverBackgroundColor[props.variant!],
      borderColor: hoverBorderColor[props.variant!],
      boxShadow: `0 0 0 0.25rem ${focusBoxShadow[props.variant!]}`,
      outline: 0,
    },
    ":hover": {
      backgroundColor: hoverBackgroundColor[props.variant!],
      borderColor: hoverBorderColor[props.variant!],
      color: hoverColor[props.variant!],
    },
  };

  if (props.positionedBadge) {
    style.position = "relative";
  }

  return style;
};

const btnOutline: StyleFunction<CustomProps> = ({
  variant = "default",
  outline = false,
  positionedBadge = false,
}: StyleProps<CustomProps>) => {
  if (!outline) {
    return {} as IStyle;
  }

  const colorByVariant: ColorMapping = {
    danger: "#dc3545",
    default: "#333",
    info: "#0dcaf0",
    primary: "#0d6efd",
    secondary: "#6c757d",
    success: "#198754",
    warning: "#ffc107",
  };

  const activeColorByVariant: ColorMapping = {
    danger: "#fff",
    default: "#000",
    primary: "#fff",
    secondary: "#fff",
    success: "#fff",
    info: "#000",
    warning: "#000",
  };

  const boxShadowColor: ColorMapping = {
    danger: "rgba(220, 53, 69, 0.5)",
    default: "rgba(248, 249, 250, 0.5)",
    info: "rgba(13, 202, 240, 0.5)",
    primary: "rgba(13, 110, 253, 0.5)",
    secondary: "rgba(108, 117, 125, 0.5)",
    success: "rgba(25, 135, 84, 0.5)",
    warning: "rgba(255, 193, 7, 0.5)",
  };

  const activeColor = activeColorByVariant[variant];
  const color = colorByVariant[variant];

  const style: IStyle = {
    backgroundColor: "rgba(0,0,0,0)",
    borderColor: color,
    color: color,
    gradient: "none",
    ":active": {
      backgroundColor: color,
      borderColor: color,
      boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
      color: activeColor,
    },
    ":disabled": {
      backgroundColor: "transparent",
      borderColor: color,
      color,
    },
    ":focus": {
      boxShadow: `0 0 0 0.25rem ${boxShadowColor[variant]}`,
    },
    ":hover": {
      backgroundColor: color,
      borderColor: color,
      color: activeColor,
    },
  };

  if (positionedBadge) {
    style.position = "relative";
  }

  return style;
};

const groupRule: StyleFunction<CustomProps> = ({
  group = false,
  active = false,
  last = false,
  isGtEqThree = false,
  first = false,
  groupSize = "medium",
  groupVertical = false,
}) => {
  let style: IStyle = {};
  if (group) {
    style = {
      position: "relative",
      flex: "1 1 auto",
      ":active": {
        zIndex: 1,
      },
      ":focus": {
        zIndex: 1,
      },
      ":hover": {
        zIndex: 1,
      },
    };
  }

  if (active) {
    (style as CSSProperties).zIndex = 1;
  }

  if (isGtEqThree || !last) {
    (style as CSSProperties).borderTopRightRadius = 0;
    (style as CSSProperties).borderBottomRightRadius = 0;
  }

  if (groupSize === "small") {
    (style as CSSProperties).padding = "0.25rem 0.5rem";
    (style as CSSProperties).fontSize = "0.5rem";
    (style as CSSProperties).borderRadius = "0.25rem";
  }

  if (groupSize === "large") {
    (style as CSSProperties).padding = "0.5rem 1rem";
    (style as CSSProperties).fontSize = "1.25rem";
    (style as CSSProperties).borderRadius = "0.5rem";
  }

  if (groupVertical) {
    (style as CSSProperties).width = "100%";
  }

  if (groupVertical && !first) {
    (style as CSSProperties).marginTop = "calc(1px * -1)";
    (style as CSSProperties).borderTopLeftRadius = 0;
    (style as CSSProperties).borderTopRightRadius = 0;
  }

  return style;
};

export const Button = forwardRef(
  <C extends ElementType = "button">(
    {
      children,
      as,
      first = false,
      active = false,
      group = false,
      className,
      variant = "default",
      size = "medium",
      outline = false,
      disabled = false,
      positionedBadge = false,
      last = false,
      isGtEqThree = false,
      groupSize = "medium",
      groupVertical = false,
      ...other
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { css } = useFela<Theme, CustomProps>({
      active,
      first,
      variant,
      size,
      groupVertical,
      outline,
      positionedBadge,
      disabled,
      group,
      last,
      isGtEqThree,
      groupSize,
    });
    const cx = `${css([btnStyle, btnOutline, groupRule])} ${
      className || ""
    }`.trim();
    const Component = as || "button";

    return (
      <Component
        data-testid="button"
        ref={ref}
        active={active ? "active" : null}
        className={cx}
        disabled={disabled}
        {...other}
      >
        {children}
      </Component>
    );
  },
);

Button.displayName = "Button";
