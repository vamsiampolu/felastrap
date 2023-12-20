import { createContext } from "react";
import { Size } from "../../common";

export type InputGroupContextValue = {
  size: Size;
  group: boolean;
};

export const InputGroupContext = createContext<InputGroupContextValue>({
  size: "medium",
  group: false,
});
