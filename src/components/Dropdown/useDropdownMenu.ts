import {
  autoUpdate,
  useFloating,
  flip,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useListNavigation,
  useTypeahead,
} from "@floating-ui/react";
import { useCallback, useMemo, useRef, useState } from "react";
import { Elements, Labels } from "../Dropdown/Dropdown";
import { DropdownDirection } from "../common";
import { placementByDirection } from "./mappings";

export const useDropdownMenu = (direction: DropdownDirection) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const placement = placementByDirection[direction];

  const { refs, floatingStyles, context } = useFloating({
    placement: placement || "bottom-start",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const elementsRef = useRef<Elements>([]);
  const labelsRef = useRef<Labels>([]);

  const callback = (index: number | null) => {
    setSelectedIndex(index);
    setIsOpen(false);

    if (index !== null) {
      setSelectedLabel(labelsRef.current[index]);
    }
  };

  const handleSelect = useCallback(callback, []);
  const handleTypeaheadMatch = (index: number | null) => {
    if (isOpen) {
      setActiveIndex(index);
    } else {
      handleSelect(index);
    }
  };

  const typeahead = useTypeahead(context, {
    listRef: labelsRef,
    activeIndex,
    selectedIndex,
    onMatch: handleTypeaheadMatch,
  });

  const listNav = useListNavigation(context, {
    listRef: elementsRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions(
    [listNav, typeahead, click, dismiss, role],
  );

  return useMemo(
    () => ({
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      activeIndex,
      selectedIndex,
      handleSelect,
      refs,
      floatingStyles,
      selectedLabel,
      setSelectedLabel,
      context,
      elementsRef,
      isOpen,
      setIsOpen,
      labelsRef,
    }),
    [
      activeIndex,
      selectedIndex,
      handleSelect,
      getReferenceProps,
      getFloatingProps,
      getItemProps,
      refs,
      floatingStyles,
      context,
      selectedLabel,
      setSelectedLabel,
      elementsRef,
      isOpen,
      setIsOpen,
      labelsRef,
    ],
  );
};
