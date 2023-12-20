import { CSSProperties } from "react";
import { TransitionStatus } from "react-transition-group";
import { OffcanvasPlacement } from "./Wrapper";

const transformByPlacement: Record<OffcanvasPlacement, string> = {
  start: "translateX(-100%)",
  end: "translateX(100%)",
  top: "translateY(-100%)",
  bottom: "translateY(100%)",
};

const defaultStyle = (placement: OffcanvasPlacement): CSSProperties => ({
  transition: "transform, ease-in-out",
  transform: transformByPlacement[placement],
  visibility: "hidden",
});

const transitionStyles = (
  placement: OffcanvasPlacement,
): Record<TransitionStatus, CSSProperties> => ({
  entering: { transform: "none", visibility: "visible" },
  entered: { transform: "none", visibility: "visible" },
  exiting: { transform: transformByPlacement[placement], visibility: "hidden" },
  exited: { transform: transformByPlacement[placement], visibility: "hidden" },
  unmounted: {
    transform: transformByPlacement[placement],
    visibility: "hidden",
  },
});

export type OffcanvasStyleOptions = {
  placement: OffcanvasPlacement;
  state: TransitionStatus;
  matchesBreakpoint: boolean;
  showBackdrop: boolean;
  width?: CSSProperties["width"] | undefined;
};

export const getOffcanvasStyle = ({
  placement,
  state,
  matchesBreakpoint,
  showBackdrop,
  width,
}: OffcanvasStyleOptions): CSSProperties => {
  let display = "";

  if (showBackdrop) {
    display = matchesBreakpoint ? "block" : "none";
  } else {
    display = !matchesBreakpoint ? "none" : "";
  }

  const style = {
    ...defaultStyle(placement),
    ...transitionStyles(placement)[state],
    display,
  };

  if (width) {
    style.width = width;
  }

  return style;
};
