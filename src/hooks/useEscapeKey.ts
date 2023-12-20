import { useEffect } from "react";

const eventName = "keydown";
export const isEscapeKey = ({ key }: KeyboardEvent) => key === "Escape";

/**
 * @description Perform an action in response an escape key press. Useful when dismissing
 * a modal when escape is pressed.
 * @param {EventListener} onEscapePressed Event handler that runs when escape is pressed.
 * @param {boolean} disabled Disables the hook: the event handler is not run when set to true.
 */
export const useEscapeKey = ({
  onEscapePressed,
  disabled = false,
}: {
  onEscapePressed: EventListener;
  disabled?: boolean;
}) => {
  const effect = () => {
    const onEscape = (e: KeyboardEvent) =>
      isEscapeKey(e) ? onEscapePressed(e) : null;

    if (!disabled) {
      document.body.addEventListener(eventName, onEscape);

      const cleanup = () => {
        document.body.removeEventListener(eventName, onEscape);
      };

      return cleanup;
    }
  };

  return useEffect(effect, [onEscapePressed, disabled]);
};
