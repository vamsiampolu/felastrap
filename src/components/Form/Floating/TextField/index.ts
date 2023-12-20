import {
  FloatingTextField,
  type FloatingTextFieldProps,
} from "./FloatingTextField";
import {
  FloatingTextInput,
  type FloatingTextInputProps,
} from "./FloatingTextInput";
import { FloatingLabel, type FloatingLabelProps } from "./Label";

import { useFloatingTextField } from "./useFloatingTextField";
import { useFloatingTextContext } from "./useFloatingTextContext";
import { FloatingGroupButton } from "../InputGroup/GroupButton";
import { FloatingGroupText } from "../InputGroup/GroupText";
import {
  FloatingTextarea,
  type FloatingTextareaProps,
} from "./FloatingTextarea";

export {
  FloatingGroupButton,
  FloatingGroupText,
  FloatingTextField,
  FloatingTextInput,
  FloatingLabel,
  FloatingTextarea,
  useFloatingTextField,
  useFloatingTextContext,
};

export type {
  FloatingTextFieldProps,
  FloatingTextInputProps,
  FloatingLabelProps,
  FloatingTextareaProps,
};
