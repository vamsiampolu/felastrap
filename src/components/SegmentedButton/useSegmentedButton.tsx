import {
  autoUpdate,
  useFloating,
  flip,
  useListNavigation,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";
import { useCallback, useMemo, useRef, useState } from "react";
import { Elements, Labels } from "../Dropdown/Dropdown";

export const useSegmentedMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-end",
    open: isOpen,
    onOpenChange: setIsOpen,
    whileElementsMounted: autoUpdate,
    middleware: [flip()],
  });

  const elementsRef = useRef<Elements>([]);
  const labelsRef = useRef<Labels>([]);

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    [listNav, click, dismiss, role],
  );

  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);
  const callback = (index: number | null) => {
    setSelectedIndex(index);
    setIsOpen(false);

    if (index !== null) {
      setSelectedLabel(labelsRef.current[index]);
    }
  };

  const handleSelect = useCallback(callback, []);
  return useMemo(
    () => ({
      context,
      activeIndex,
      selectedIndex,
      getItemProps,
      handleSelect,
      selectedLabel,
      elementsRef,
      labelsRef,
      getReferenceProps,
      getFloatingProps,
      refs,
      floatingStyles,
      isOpen,
      setIsOpen,
    }),
    [
      context,
      activeIndex,
      selectedIndex,
      getItemProps,
      elementsRef,
      labelsRef,
      handleSelect,
      selectedLabel,
      getReferenceProps,
      getFloatingProps,
      refs,
      floatingStyles,
      isOpen,
      setIsOpen,
    ],
  );
};
