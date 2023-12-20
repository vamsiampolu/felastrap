import { CSSProperties } from "fela";
import { ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Breakpoints } from "../Flex/mediaQuery";
import { Portal } from "../Portal";
import { DivProps, DynamicElement } from "../common";
import { OffcanvasContent } from "./OffcanvasContent";
import { OffcanvasWithBackdrop } from "./OffcanvasWithBackdrop";
import { OffcanvasPlacement } from "./Wrapper";
import { getOffcanvasStyle } from "./getOffcanvasStyle";

export type OffcanvasProps = Omit<DivProps, "id" | "children" | "style"> & {
  id: string;
  isOpen?: boolean;
  title: ReactNode;
  titleId: string;
  body?: ReactNode;
  placement?: OffcanvasPlacement;
  onClose: () => void;
  showBackdrop?: boolean;
  blocking?: boolean;
  noPortal?: boolean;
  minBreakpoint: Breakpoints | undefined;
  as?: DynamicElement;
  showCloseButton?: boolean;
  width?: CSSProperties["width"];
  duration?: number;
};

export const Offcanvas = ({
  id,
  isOpen = false,
  onClose,
  titleId,
  title,
  noPortal = false,
  body,
  placement = "start",
  showBackdrop = false,
  minBreakpoint = undefined,
  showCloseButton = true,
  width = undefined,
  duration = 300,
  ...props
}: OffcanvasProps) => {
  const nodeRef = useRef(null);
  const matchesBreakpoint = useMediaQuery({
    breakpoint: minBreakpoint,
    isMinWidth: true,
  });

  const inner = (
    <Transition ref={nodeRef} in={isOpen} timeout={duration}>
      {(state) => {
        const style = getOffcanvasStyle({
          placement,
          state,
          matchesBreakpoint,
          showBackdrop,
          width,
        });

        const Component = showBackdrop
          ? OffcanvasWithBackdrop
          : OffcanvasContent;
        return (
          <Component
            width={width}
            showCloseButton={showCloseButton}
            placement={placement}
            onClose={onClose}
            id={id}
            isOpen={isOpen}
            style={style}
            title={title}
            titleId={titleId}
            body={body}
            {...props}
          />
        );
      }}
    </Transition>
  );

  const wrapperId = showBackdrop
    ? `${id}-wrapper-with-backdrop`
    : `${id}-wrapper`;

  return noPortal ? inner : <Portal wrapperId={wrapperId}>{inner}</Portal>;
};
