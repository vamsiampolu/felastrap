import { useContext } from "react";
import { useFela } from "react-fela";
import { Header, type HeaderProps } from "../Header/Header";
import { AccordionPanelContext } from "./AccordionPanelContext";
import { ToggleButton } from "./ToggleButton";
import { ToggleIcon } from "./ToggleIcon";
import { OnClick } from "../common";

export const AccordionPanelHeader = ({
  className = "",
  children,
}: Omit<HeaderProps, "as">) => {
  const { css } = useFela();
  const { first, last, toggle, isOpen } = useContext(AccordionPanelContext)!;
  const cx = `${css({
    marginBottom: 0,
    marginTop: 0,
  })} accordion-header ${className}`;

  return (
    <Header
      data-testid="accordion-panel-header"
      as="h2"
      className={cx}
      onClick={toggle as OnClick<"h2">}
    >
      <ToggleButton first={first} last={last} isOpen={isOpen}>
        {children}
        <ToggleIcon isOpen={isOpen} />
      </ToggleButton>
    </Header>
  );
};
