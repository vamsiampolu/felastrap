import { Dispatch, ForwardedRef, SetStateAction, createContext } from "react";
import { Size } from "../../../common";

export type FloatingTextContextValue = {
  autoFilled: boolean;
  disabled: boolean;
  focused: boolean;
  placeholderShown: boolean;
  plainText: boolean;
  readOnly: boolean;
  inputRef?: ForwardedRef<HTMLInputElement | HTMLTextAreaElement>;
  setAutofilled?: Dispatch<SetStateAction<boolean>>;
  setFocused?: Dispatch<SetStateAction<boolean>>;
  setPlaceholderShown?: Dispatch<SetStateAction<boolean>>;
  group: boolean;
  size: Size;
};

export const FloatingTextContext = createContext<FloatingTextContextValue>({
  autoFilled: false,
  disabled: false,
  focused: false,
  placeholderShown: false,
  plainText: false,
  readOnly: false,
  group: false,
  size: "medium",
});
