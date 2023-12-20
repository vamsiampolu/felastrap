import { useFela } from "react-fela";
import { Dropdown } from "./Dropdown";
import { DropdownItem } from "./DropdownItem";
import { DropdownHeader } from "./DropdownHeader";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownText } from "./DropdownText";
import {
  NavVariant,
  Size,
  StyleProps,
  Theme,
  Variant,
  DropdownDirection,
} from "../common";
import { transformByDirection } from "./mappings";

export type DropDownItem = {
  id?: string;
  tabIndex?: string | number;
  disabled: boolean;
  text: string;
  type: "divider" | "header" | "item" | "text";
};

export type DropdownMenuProps = Partial<{
  className: string;
  direction: DropdownDirection;
  label: string;
  size: Size;
  split: boolean;
  nav: boolean;
  navVariant: NavVariant;
  variant: Variant;
  items: DropDownItem[];
}>;

export type CssProps = {
  nav: boolean;
  direction: DropdownDirection;
};

const base = () => {
  return {
    backgroundClip: "padding-box",
    backgroundColor: "#fff",
    border: "1px solid rgba(0, 0, 0, 0.175)",
    borderRadius: "0.375rem",
    color: "#212529",
    display: "block",
    fontSize: "1rem",
    left: 0,
    listStyle: "none",
    margin: 0,
    width: "100%",
    marginTop: "0.125rem",
    minWidth: "10rem",
    padding: "0.5rem 0.125rem",
    position: "absolute",
    textAlign: "left",
    top: "-2.5rem",
    zIndex: 1000,
  };
};

const navRule = ({ nav = false }: StyleProps<CssProps>) => {
  if (!nav) {
    return {};
  }

  return {
    marginTop: `calc(-1 * 1px)`,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  };
};

const positioning = ({ direction = "down" }: StyleProps<CssProps>) => {
  return {
    position: "absolute",
    inset: "0px auto auto 0px",
    margin: "0px",
    transform: transformByDirection[direction as DropdownDirection],
  };
};

export const DropdownMenu = ({
  split = false,
  className = "",
  direction = "down",
  size = "medium",
  variant = "default",
  label = "Select",
  nav = false,
  navVariant = "default",
  items = [],
}: DropdownMenuProps) => {
  const { css } = useFela<Theme, CssProps>({ direction, nav });
  const cx = `${css([base, positioning, navRule])} ${className || ""}`;
  return (
    <Dropdown
      className={cx}
      nav={nav}
      navVariant={navVariant}
      direction={direction}
      label={label}
      variant={variant}
      split={split}
      size={size}
    >
      {items.map(({ type = "item", text, disabled = false }, index) => {
        const firstItem = index === 0;
        const cz = css({
          marginTop: firstItem ? "-0.2rem" : "0.2rem",
          paddingTop: firstItem ? 0 : "-0.5rem",
        });

        const key = `dropdown-menu-${type}-${index}`;
        switch (type) {
          case "divider":
            return <DropdownDivider key={key} />;
          case "header":
            return (
              <DropdownHeader className={cz} key={key}>
                {text}
              </DropdownHeader>
            );
          case "text":
            return <DropdownText key={key}>{text}</DropdownText>;
          default:
            return <DropdownItem label={text} key={key} disabled={disabled} />;
        }
      })}
    </Dropdown>
  );
};
