import {
  autoUpdate,
  useFloating,
  offset,
  flip,
  shift,
  arrow,
  useTransitionStyles,
  useFocus,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";
import { useRef, useState, useMemo } from "react";
import { TooltipPlacement } from "../common";

export type UseTooltipOptions = {
  placement: TooltipPlacement;
  initialOpen: boolean;
};

const initialTransition = {
  transform: "scale(0)",
  opacity: 0,
};

const getTransformOrigin = ({ x = 0, y = 0 }) => {
  const transformX = x + ARROW_WIDTH / 2;
  const transformY = y + ARROW_HEIGHT;

  return {
    top: `${transformX}px calc(100% + ${ARROW_HEIGHT}px)`,
    bottom: `${transformX}px ${-ARROW_HEIGHT}px`,
    left: `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px`,
    right: `${-ARROW_HEIGHT}px ${transformY}px`,
  };
};

const ARROW_WIDTH = 15;
const ARROW_HEIGHT = 7.5;

export const useTooltip = ({
  placement = "top",
  initialOpen = false,
}: UseTooltipOptions) => {
  const [open, setOpen] = useState(initialOpen);
  const arrowRef = useRef(null);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(ARROW_HEIGHT),
      flip({ padding: 5 }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  const { middlewareData, context } = data;

  const transformOriginMapping = getTransformOrigin(middlewareData.arrow ?? {});

  const hover = useHover(context, { move: false });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: initialTransition,
    common: ({ side }) => ({ transformOrigin: transformOriginMapping[side] }),
  });

  return useMemo(
    () => ({
      ...data,
      ...interactions,
      arrowRef,
      isMounted,
      styles,
      open,
      arrowWidth: ARROW_WIDTH,
      arrowHeight: ARROW_HEIGHT,
    }),
    [data, interactions, arrowRef, isMounted, styles, open],
  );
};
