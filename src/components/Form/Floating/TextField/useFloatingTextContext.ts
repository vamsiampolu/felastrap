import { useContext } from "react";
import {
  FloatingTextContext,
  FloatingTextContextValue,
} from "./FloatingTextContext";

export const useFloatingTextContext = () =>
  useContext<FloatingTextContextValue>(FloatingTextContext);
