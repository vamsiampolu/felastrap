import { useFela } from "react-fela";
import { CloseButton, CloseButtonProps } from "../CloseButton";
import type {
  DivProps,
  Variant,
  Theme,
  ColorMapping,
  BorderRadius,
  StyleProps,
} from "../common";

export type OnDismiss = CloseButtonProps["onClick"];

export type CustomProps = {
  isOpen: boolean;
  dismissable: boolean;
  onDismiss: OnDismiss;
  variant: Variant;
};

export type AlertProps = DivProps & Partial<CustomProps>;

const backgroundColorByVariant: ColorMapping = {
  danger: "#f8d7da",
  default: "transparent",
  primary: "#cfe2ff",
  secondary: "#e2e3e5",
  success: "#d1e7dd",
  info: "#cff4fc",
  warning: "#fff3cd",
};

const borderColorByVariant: ColorMapping = {
  default: "transparent",
  danger: "#f1aeb5",
  info: "#9eeaf9",
  primary: "#9ec5fe",
  secondary: "#c4c8cb",
  success: "#a3cfbb",
  warning: "#ffe69c",
};

const colorByVariant: ColorMapping = {
  danger: "#58151c",
  default: "inherit",
  primary: "#052c65",
  secondary: "#2b2f32",
  success: "#0a3622",
  info: "#055160",
  warning: "#664d03",
};

const borderRadius: BorderRadius = {
  borderTopLeftRadius: "0.375rem",
  borderTopRightRadius: "0.375rem",
  borderBottomRightRadius: "0.375rem",
  borderBottomLeftRadius: "0.375rem",
};

const alert = ({ variant }: StyleProps<{ variant: Variant }>) => {
  return {
    ...borderRadius,
    backgroundColor: backgroundColorByVariant[variant as Variant],
    borderColor: borderColorByVariant[variant as Variant],
    borderStyle: "solid",
    borderWidth: "1px",
    color: colorByVariant[variant as Variant],
    position: "relative",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginRight: "2rem",
    width: "100%",
    minWidth: "100%",
    zIndex: 10,
  };
};

export const Alert = ({
  children,
  className = "",
  isOpen = false,
  dismissable = false,
  onDismiss,
  variant = "default",
  ...other
}: AlertProps) => {
  if (!isOpen) {
    return null;
  }

  const noop = () => undefined;
  const onClick = onDismiss ?? noop;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { css } = useFela<Theme, AlertProps>({ variant });
  const cx = `${css(alert)} ${className || ""}`.trim();

  return (
    <div data-testid="alert" className={cx} {...other}>
      {dismissable ? (
        <CloseButton data-testid="alert-close-btn" alert onClick={onClick} />
      ) : null}
      {children}
    </div>
  );
};
