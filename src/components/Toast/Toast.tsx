import { CSSProperties, ReactNode } from "react";
import { useFela } from "react-fela";
import { Portal } from "../Portal";
import { ToastBody } from "./Body";
import { ToastHeader, ToastHeaderProps } from "./Header";
import { ToastContainer, ToastPlacement } from "./Container";
import { Transition, TransitionStatus } from "react-transition-group";

export type ToastProps = {
  className?: string;
  body?: ReactNode;
  header?: Omit<ToastHeaderProps, "close">;
  placement?: ToastPlacement;
  isOpen?: boolean;
  close: () => void;
};

// transition: opacity, display .15s linear display: 'none', opacity: 0
//

const rule = () => ({
  width: "350px",
  maxWidth: "100%",
  fontSize: "0.875rem",
  pointerEvents: "auto",
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backgroundClip: "padding-box",
  border: "1px solid rgba(0, 0, 0, 0.175)",
  boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
  borderRadius: "0.375rem",
});

const duration = 150;

const transitionStyles: Record<TransitionStatus, CSSProperties> = {
  entering: { opacity: 1, display: "block" },
  entered: { opacity: 1, display: "block" },
  exiting: { opacity: 0.3, display: "none" },
  exited: { opacity: 0, display: "none" },
  unmounted: { opacity: 0, display: "none" },
};

export const Toast = ({
  className = "",
  body,
  header,
  placement,
  close,
  isOpen,
}: ToastProps) => {
  const { css } = useFela();
  const cx = `${css(rule)} toast ${className}`.trim();
  if (placement) {
    return (
      <Portal wrapperId="toasts">
        <Transition in={isOpen} timeout={duration}>
          {(state) => (
            <ToastContainer
              placement={placement}
              style={transitionStyles[state]}
            >
              <div
                data-testid="toast"
                style={transitionStyles[state]}
                className={cx}
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                {header && (
                  <ToastHeader
                    close={close}
                    icon={header.icon}
                    title={header.title}
                    right={header.right}
                  />
                )}
                <ToastBody>{body}</ToastBody>
              </div>
            </ToastContainer>
          )}
        </Transition>
      </Portal>
    );
  }

  return (
    <Portal wrapperId="toasts">
      <Transition in={isOpen} timeout={duration}>
        {(state) => (
          <div
            data-testid="toast"
            style={transitionStyles[state]}
            className={cx}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            {header && (
              <ToastHeader
                style={transitionStyles[state]}
                close={close}
                icon={header.icon}
                title={header.title}
                right={header.right}
              />
            )}
            <ToastBody style={transitionStyles[state]}>{body}</ToastBody>
          </div>
        )}
      </Transition>
    </Portal>
  );
};
