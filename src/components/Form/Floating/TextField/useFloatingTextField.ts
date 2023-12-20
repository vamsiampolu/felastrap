import { useState, useRef, useEffect, useMemo, useContext } from "react";
import { InputGroupContext } from "../../InputGroup/InputGroupContext";

export const useFloatingTextField = ({
  disabled = false,
  readOnly = false,
  plainText = false,
}) => {
  const [focused, setFocused] = useState(false);
  const [placeholderShown, setPlaceholderShown] = useState(false);
  const [autoFilled, setAutoFilled] = useState(false);

  const ctx = useContext(InputGroupContext);

  const group = ctx ? ctx.group ?? false : true;
  const size = ctx ? ctx.size || "medium" : "medium";

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isFocusedInput = () => {
    if (inputRef.current && !readOnly && !disabled && !plainText) {
      const isFocused = inputRef.current === document.activeElement;
      setFocused(isFocused);
    }

    setFocused(false);
  };

  const hasBeenAutofilled = () => {
    if (inputRef.current) {
      try {
        const input = inputRef.current;
        const result = input?.matches(":-webkit-autofill") ?? false;
        setAutoFilled(result);
      } catch (e) {
        console.warn(e);
        setAutoFilled(false);
      }
    }
  };

  const isShowingPlaceholder = () => {
    if (inputRef.current) {
      const input = inputRef.current;

      const placeholder = input?.getAttribute("placeholder");
      const value = input?.value;

      const result = Boolean(input && placeholder && !value);
      setPlaceholderShown(result);
    }
  };

  useEffect(isFocusedInput, [
    inputRef,
    setFocused,
    readOnly,
    disabled,
    plainText,
  ]);

  useEffect(isShowingPlaceholder, [inputRef, setPlaceholderShown]);
  useEffect(hasBeenAutofilled, [inputRef, setAutoFilled]);

  return useMemo(
    () => ({
      autoFilled,
      disabled,
      focused,
      group,
      inputRef,
      placeholderShown,
      plainText,
      readOnly,
      setAutoFilled,
      setFocused,
      setPlaceholderShown,
      size,
    }),
    [
      focused,
      setFocused,
      placeholderShown,
      setPlaceholderShown,
      autoFilled,
      setAutoFilled,
      group,
      disabled,
      readOnly,
      plainText,
      inputRef,
      size,
    ],
  );
};
