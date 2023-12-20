import { MutableRefObject, useEffect } from "react";

/**
 * @description Perform an action when user clicks outside the element provided. The hook takes
 * a ref to the concerned element and the options `callback` and `disabled`
 *
 * @param {MutableRefObject<HTMLElement>} ref A ref to a html element.
 * @param options
 * @property {boolean} disabled Disables the hook, callback is not invoked when disabled is `true`.
 * @property {Function} callback A callback to be run when the user clicks outside.
 * @returns {void}
 */
export function useClickOutside(
  ref: MutableRefObject<HTMLElement>,
  {
    callback,
    disabled = false,
  }: { callback: (e?: Event) => void; disabled?: boolean },
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of ref
     */
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };
    if (!disabled) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [ref, callback, disabled]);
}
