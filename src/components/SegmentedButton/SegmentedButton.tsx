import { PropsWithChildren, ReactNode } from "react";
import { DropdownList } from "../Dropdown/DropdownList";
import { DropDownItem } from "../Dropdown/DropdownMenu";
import { Action, ActionProps } from "./Action";
import { Item } from "./Item";
import { Segment } from "./Segment";
import { Wrapper } from "./Wrapper";
import { useSegmentedMenu } from "./useSegmentedButton";

export type SegmentedButtonProps = Omit<ActionProps, "children"> &
  PropsWithChildren<{
    action: ReactNode;
    items: DropDownItem[];
    position: "left" | "right";
  }>;

export const SegmentedButton = ({
  action,
  children,
  items = [],
  position = "left",
  ...props
}: SegmentedButtonProps) => {
  const {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
    isOpen,
    floatingStyles,
    context,
    refs,
    getReferenceProps,
    getFloatingProps,
    elementsRef,
    labelsRef,
  } = useSegmentedMenu();

  const selectedContext = {
    activeIndex,
    selectedIndex,
    getItemProps,
    handleSelect,
  };

  if (position === "left") {
    return (
      <Wrapper>
        <Action tabIndex={0} {...props}>
          {action}
        </Action>
        <Segment
          tabIndex={1}
          ref={refs.setReference}
          {...getReferenceProps()}
        ></Segment>
        <DropdownList
          context={context}
          nav={false}
          direction="down"
          elementsRef={elementsRef}
          getFloatingProps={getFloatingProps}
          isOpen={isOpen}
          labelsRef={labelsRef}
          ref={refs.setFloating}
          style={floatingStyles}
          selectedContext={selectedContext}
        >
          {items.map(
            (
              { type = "item", text, disabled = false }: DropDownItem,
              index,
            ) => (
              <Item
                key={`segmented-btn-item-${index}`}
                index={index}
                disabled={disabled}
                text={text}
                type={type}
              />
            ),
          )}
        </DropdownList>
        {children}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {children}
      <Action tabIndex={0} {...props}>
        {action}
      </Action>
      <Segment
        tabIndex={1}
        ref={refs.setReference}
        {...getReferenceProps()}
      ></Segment>
      <DropdownList
        context={context}
        nav={false}
        direction="down"
        elementsRef={elementsRef}
        getFloatingProps={getFloatingProps}
        isOpen={isOpen}
        labelsRef={labelsRef}
        ref={refs.setFloating}
        style={floatingStyles}
        selectedContext={selectedContext}
      >
        {items.map(
          ({ type = "item", text, disabled = false }: DropDownItem, index) => (
            <Item
              key={`segmented-btn-item-${index}`}
              index={index}
              disabled={disabled}
              text={text}
              type={type}
            />
          ),
        )}
      </DropdownList>
    </Wrapper>
  );
};
