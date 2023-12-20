import {
  ComponentPropsWithoutRef,
  MouseEvent,
  PropsWithChildren,
  useContext,
} from "react";
import { useFela } from "react-fela";
import { CollapseContext } from "../Collapse/CollapseContext";
import { Header as TextHeader } from "../Header/Header";
import { ToggleButton } from "./ToggleButton";
import { ToggleIcon } from "./ToggleIcon";

export type ToggleEventHandler = (e?: MouseEvent<HTMLButtonElement>) => void;
export type HeaderProps = ComponentPropsWithoutRef<"h2"> & {
  first?: boolean;
  last?: boolean;
  isOpen?: boolean;
  toggle?: ToggleEventHandler;
};

export const Header = ({
  className = "",
  first = false,
  last = false,
  toggle = () => undefined,
  isOpen = false,
  children,
  ...other
}: HeaderProps) => {
  const { css } = useFela();
  const cx = `${css({
    marginBottom: 0,
    marginTop: 0,
  })} panel-group-header ${className}`.trim();
  return (
    <TextHeader
      data-testid="panel-group-text-header"
      as="h2"
      className={cx}
      {...other}
    >
      <ToggleButton first={first} last={last} onClick={toggle} isOpen={isOpen}>
        {children}
        <ToggleIcon isOpen={isOpen} />
      </ToggleButton>
    </TextHeader>
  );
};

export const ToggleHeaderContainer = ({
  first = false,
  last = false,
  children,
  setActive,
}: PropsWithChildren & {
  first?: boolean;
  last?: boolean;
  setActive: () => void;
}) => {
  const { isOpen, toggleCollapse } = useContext(CollapseContext);
  const toggle = () => {
    if (!isOpen) {
      setActive();
    }

    return toggleCollapse();
  };

  return (
    <Header
      first={first}
      last={last}
      isOpen={isOpen}
      toggle={toggle as ToggleEventHandler}
    >
      {children}
    </Header>
  );
};
