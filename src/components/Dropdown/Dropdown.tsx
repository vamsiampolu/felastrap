import { ComponentPropsWithoutRef } from "react";
import type { DropdownDirection, NavVariant, Size, Variant } from "../common";
import { DropdownList } from "./DropdownList";
import { DropdownToggle } from "./DropdownToggle";
import { useDropdownMenu } from "./useDropdownMenu";

export type Element = HTMLElement | null;
export type Elements = Element[];
export type Label = string | null;

export type Labels = Label[];

export type DropdownProps = ComponentPropsWithoutRef<"div"> &
  Partial<{
    direction: DropdownDirection;
    label: string;
    nav: boolean;
    navVariant: NavVariant;
    size: Size;
    split: boolean;
    variant: Variant;
  }>;

export const Dropdown = ({
  direction = "down",
  label,
  nav = false,
  navVariant = "default",
  size = "medium",
  split = false,
  variant = "default",
  children,
}: DropdownProps) => {
  const selectedContext = useDropdownMenu(direction);

  const {
    getFloatingProps,
    getReferenceProps,
    context,
    refs,
    selectedLabel,
    elementsRef,
    isOpen,
    labelsRef,
    floatingStyles,
  } = selectedContext;

  return (
    <>
      <DropdownToggle
        direction={direction}
        size={size}
        split={split}
        navVariant={navVariant}
        nav={nav}
        ref={refs.setReference}
        getReferenceProps={getReferenceProps}
        label={selectedLabel || label || "Select"}
        variant={variant}
      />
      <DropdownList
        context={context}
        direction={direction}
        elementsRef={elementsRef}
        getFloatingProps={getFloatingProps}
        isOpen={isOpen}
        labelsRef={labelsRef}
        nav={nav}
        ref={refs.setFloating}
        style={floatingStyles}
        selectedContext={selectedContext}
      >
        {children}
      </DropdownList>
    </>
  );
};
