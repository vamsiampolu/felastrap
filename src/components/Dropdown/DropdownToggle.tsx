import { ForwardedRef, forwardRef, type MutableRefObject } from "react";
import { useInteractions, type ExtendedRefs } from "@floating-ui/react";
import { useFela } from "react-fela";
import { NavLink } from "../Nav/NavLink";
import { Button } from "../Button";
import { Caret } from "../Caret/Caret";
import { caretDirectionByDropdown, paddingBySize } from "./mappings";
import {
  type StyleProps,
  type Size,
  type Theme,
  type Variant,
  type NavVariant,
  DropdownDirection,
  CaretDirection,
} from "../common";
import { CSSProperties } from "fela";
import { getBtnStyle, getCaretStyle } from "./getCaretStyle";

export type Label = string | null;
export type Labels = MutableRefObject<Label[]>;

export type UseInteractions = typeof useInteractions;
export type Refs = ExtendedRefs<Labels>;
export type GetReferenceProps =
  ReturnType<UseInteractions>["getReferenceProps"];

export type DropdownToggleProps = {
  direction?: DropdownDirection;
  label: string;
  nav?: boolean;
  navVariant?: NavVariant;
  size: Size;
  split: boolean;
  variant?: Variant;
  getReferenceProps: GetReferenceProps;
};

export type CssProps = {
  size: Size;
  split: boolean;
  caretDirection: CaretDirection;
};

const toggleRule = () => {
  return {
    whiteSpace: "nowrap",
    ":empty::after": {
      marginLeft: 0,
    },
    "::after": {
      borderBottom: 0,
      borderLeft: "0.3em solid transparent",
      borderRight: "0.3em solid transparent",
      borderTop: "0.3em solid",
      content: "",
      display: "inline-block",
      marginLeft: "0.255em",
      verticalAlign: "0.255em",
    },
  };
};

const splitBtn = ({
  split = false,
  size = "medium",
}: StyleProps<DropdownToggleProps>) => {
  if (!split) {
    return {};
  }

  const padding = paddingBySize[size];
  return {
    paddingRight: padding,
    paddingLeft: padding,
    "::after": {
      marginLeft: 0,
    },
  };
};

const DropdownToggleComponent = (
  {
    direction = "down",
    getReferenceProps,
    label,
    nav = false,
    navVariant = "default",
    size,
    split,
    variant = "default",
  }: DropdownToggleProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) => {
  const caretDirection = caretDirectionByDropdown[direction];
  const { css } = useFela<Theme, CssProps>({ size, split, caretDirection });

  const className = `${css([toggleRule, splitBtn])} dropdown-toggle`;
  const btnStyle: CSSProperties = getBtnStyle(direction);
  const caretStyle: CSSProperties = getCaretStyle(direction);

  if (nav) {
    return (
      <NavLink
        data-testid="dropdown-toggle"
        style={btnStyle}
        variant={navVariant}
        className={className}
        ref={ref}
        tabIndex={0}
        {...getReferenceProps()}
      >
        {label}
        <Caret
          data-testid="dropdown-toggle-caret"
          style={caretStyle}
          direction={caretDirection}
        />
      </NavLink>
    );
  }

  return (
    <Button
      data-testid="dropdown-toggle"
      style={btnStyle}
      variant={variant}
      className={className}
      size={size}
      ref={ref}
      tabIndex={0}
      {...getReferenceProps()}
    >
      {label}
      <Caret
        data-testid="dropdown-toggle-caret"
        style={caretStyle}
        direction={caretDirection}
      />
    </Button>
  );
};

export const DropdownToggle = forwardRef(DropdownToggleComponent);
