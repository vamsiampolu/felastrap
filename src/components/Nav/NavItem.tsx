import { useFela } from "react-fela";
import { ComponentPropsWithoutRef } from "react";
import { DynamicElement, StyleProps } from "../common";

export type CustomProps = Partial<{
  card: boolean;
  fill: boolean;
  justified: boolean;
  active: boolean;
  as: DynamicElement;
  className: string;
}>;
export type NavItemProps = ComponentPropsWithoutRef<"li"> & CustomProps;

const fillRule = ({ fill = false }: StyleProps<CustomProps>) =>
  fill
    ? {
        flex: "1 1 auto",
        textAlign: "center",
      }
    : {};

const justifiedRule = ({ justified = false }: StyleProps<CustomProps>) =>
  justified
    ? {
        flexBasis: 0,
        flexGrow: 1,
        textAlign: "center",
      }
    : {};
const cardRule = ({ card = false }: StyleProps<CustomProps>) => {
  if (!card) {
    return {};
  }

  return {
    marginLeft: "1rem",
  };
};

export const NavItem = ({
  children,
  card = false,
  className = "",
  fill = false,
  justified = false,
  active = false,
  ...other
}: NavItemProps) => {
  const { css } = useFela({ card, fill, justified, active });
  const cx = css([fillRule, justifiedRule, cardRule]);

  return (
    <li
      data-testid="nav-item"
      className={`nav-item ${cx} ${className || ""}`.trim()}
      {...other}
    >
      {children}
    </li>
  );
};
