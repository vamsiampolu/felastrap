import type { CSSProperties } from "fela";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { useFela } from "react-fela";
import { DropdownMenu } from "../Dropdown";
import type { DropDownItem } from "../Dropdown/DropdownMenu";
import { mediaQueryByName } from "../Flex/mediaQuery";
import { NavItem } from "../Nav/NavItem";
import { NavLink, type NavLinkProps } from "../Nav/NavLink";
import { NavbarVariant } from "./Navbar";
import { NavbarSize, sizeBreakpointMapping } from "./utils";

const rule = ({ size = "medium", variant = "expand" }) => {
  const breakpoint = sizeBreakpointMapping[size as NavbarSize];
  const style = {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 0,
    marginBottom: 0,
    listStyle: "none",
    [mediaQueryByName[breakpoint]]:
      variant === "expand"
        ? {
            flexDirection: "row",
          }
        : {},
  };

  return style;
};

const scrollRule = ({ size = "medium", variant = "expand" }) => {
  const breakpoint = sizeBreakpointMapping[size as NavbarSize];
  return {
    maxHeight: "75vh",
    overflowY: "auto",
    [mediaQueryByName[breakpoint]]:
      variant === "expand"
        ? {
            overflow: "visible",
          }
        : {},
  };
};

const dropdownRule = ({ size = "medium", variant = "expand" }) => {
  const breakpoint = sizeBreakpointMapping[size as NavbarSize];
  if (!size) {
    return {
      position: "static",
    };
  }
  return {
    position: "static",
    [mediaQueryByName[breakpoint]]:
      variant === "expand"
        ? {
            position: "absolute",
          }
        : {},
  };
};

const linkRule = ({ size = "medium", active = false, variant = "expand" }) => {
  const breakpoint = sizeBreakpointMapping[size as NavbarSize];
  const style = {
    [mediaQueryByName[breakpoint]]:
      variant === "expand"
        ? {
            padding: "0.5rem 1rem",
            paddingRight: "0.5rem",
            paddingLeft: "0.5rem",
          }
        : {},
  };

  if (active) {
    (style as CSSProperties).color = "rgba(0, 0, 0, 1)";
  }

  return style;
};

export type DataNavLinkProps = Omit<NavLinkProps, "children"> & {
  type: "link";
  label: ReactNode;
  disabled?: boolean;
  active?: boolean;
};
export type DataNavDropdownMenuProps = {
  type: "dropdown";
  className: string;
  label: string;
  options: DropDownItem[];
};
export type DataItemProps = DataNavLinkProps | DataNavDropdownMenuProps;

export type NavProps = ComponentPropsWithoutRef<"ul"> & {
  size?: NavbarSize;
  variant?: NavbarVariant;
  scroll?: boolean;
  items: DataItemProps[];
};

export const Nav = ({
  size = "medium",
  variant = "expand",
  className = "",
  scroll = false,
  items = [],
}: NavProps) => {
  const { css } = useFela({ size, variant, scroll });
  const cx = `${css([rule, scrollRule])} navbar-nav ${className}`;

  return (
    <ul data-testid="navbar-nav" className={cx}>
      {items.map((item, index) => {
        const { type = "link", className: itemClassName = "", label } = item;
        const key = `navbar-nav-item-${type}-${index}`;
        if (type === "link") {
          const {
            active = false,
            disabled = false,
            ...itemProps
          } = item as DataNavLinkProps;
          const linkCx = `${css(linkRule)} navbar-link ${itemClassName}`;
          return (
            <NavItem
              className={linkCx}
              key={key}
              style={size ? { paddingBottom: "1.25em" } : {}}
            >
              <NavLink
                active={active}
                disabled={disabled}
                className={linkCx}
                {...itemProps}
              >
                {label}
              </NavLink>
            </NavItem>
          );
        }

        const { options = [] } = item as DataNavDropdownMenuProps;
        const dropdownCx = `${css(
          dropdownRule,
        )} navbar-dropdown-menu ${itemClassName}`.trim();
        return (
          <NavItem key={key}>
            <DropdownMenu
              nav
              className={dropdownCx}
              label={label as string}
              items={options}
            />
          </NavItem>
        );
      })}
    </ul>
  );
};
