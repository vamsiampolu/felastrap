import { CSSProperties } from "fela";
import {
  EventHandler,
  MutableRefObject,
  ReactNode,
  SyntheticEvent,
  useRef,
} from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useEscapeKey } from "../../hooks/useEscapeKey";
import { Portal } from "../Portal";
import { Size } from "../common";
import { Backdrop } from "./Backdrop";
import { ModalBody } from "./Body";
import { CloseButton } from "./CloseButton";
import { Dialog } from "./Dialog";
import { ModalFooter } from "./Footer";
import { ModalHeader } from "./Header";
import { Overlay } from "./Overlay";
import { ModalTitle } from "./Title";

const duration = 300;

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1, display: "block" },
  entered: { opacity: 1, display: "block" },
  exiting: { opacity: 0.3, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" },
};

const backdropTransitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 0.5, display: "block" },
  entered: { opacity: 0.5, display: "block" },
  exiting: { opacity: 0, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" },
};

const defaultStyle: CSSProperties = {
  transition: `opacity display ${duration}ms ease-in-out`,
  opacity: 0,
};

export type ModalProps = {
  isOpen?: boolean;
  centered?: boolean;
  title?: string;
  handleClose: EventHandler<SyntheticEvent>;
  saveChanges: EventHandler<SyntheticEvent>;
  children: ReactNode;
  header?: ReactNode;
  size: Size;
  footer?: ReactNode;
  blocking?: boolean;
  scrollable?: boolean;
};

export const Modal = ({
  isOpen = false,
  title = "Modal Title",
  children,
  centered = false,
  blocking = false,
  scrollable = false,
  size = "medium",
  footer,
  handleClose,
}: ModalProps) => {
  const transitionRef = useRef(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEscapeKey({
    onEscapePressed: handleClose as unknown as EventListener,
    disabled: blocking,
  });

  useClickOutside(dialogRef as MutableRefObject<HTMLElement>, {
    callback: handleClose as () => void,
    disabled: blocking,
  });

  return (
    <Portal
      style={{ width: "100%" } as CSSStyleDeclaration | null}
      wrapperId="bootstrap-modal-dialog-container"
    >
      <Transition nodeRef={transitionRef} in={isOpen} timeout={duration}>
        {(state) => (
          <>
            <Backdrop
              style={{ ...defaultStyle, ...backdropTransitionStyles[state] }}
            />
            <Overlay
              title={title}
              style={{ ...defaultStyle, ...transitionStyles[state] }}
              className="bootstrap-modal-overlay"
            >
              <Dialog
                size={size}
                scrollable={scrollable}
                ref={dialogRef}
                centered={centered}
                className="bootstrap-modal-dialog"
                isOpen={isOpen}
                style={{ ...defaultStyle, ...transitionStyles[state] }}
              >
                <ModalHeader>
                  <ModalTitle title={title} />
                  <CloseButton onClick={handleClose} />
                </ModalHeader>
                <ModalBody scrollable={scrollable}>{children}</ModalBody>
                {footer && <ModalFooter>{footer}</ModalFooter>}
              </Dialog>
            </Overlay>
          </>
        )}
      </Transition>
    </Portal>
  );
};
