import { CSSProperties, MutableRefObject, useRef } from "react";
import { Backdrop } from "./Backdrop";
import {
  OffcanvasContent,
  type OffcanvasContentProps,
} from "./OffcanvasContent";
import { useClickOutside, useEscapeKey } from "../../hooks";

export type OffcanvasWithBackdropProps = OffcanvasContentProps & {
  blocking?: boolean;
  width?: CSSProperties["width"];
};

export const OffcanvasWithBackdrop = ({
  blocking = false,
  style = {},
  onClose = () => undefined,
  isOpen = false,
  placement = "start",
  showCloseButton = true,
  width = undefined,
  ...props
}: OffcanvasWithBackdropProps) => {
  const ref = useRef(null);
  useEscapeKey({
    onEscapePressed: onClose,
    disabled: blocking,
  });

  useClickOutside(ref as unknown as MutableRefObject<HTMLElement>, {
    callback: onClose,
    disabled: blocking,
  });

  return (
    <>
      <OffcanvasContent
        showCloseButton={showCloseButton}
        placement={placement}
        isOpen={isOpen}
        onClose={onClose}
        ref={ref}
        width={width}
        style={style}
        {...props}
      />
      <Backdrop isOpen={isOpen} style={style} />
    </>
  );
};
