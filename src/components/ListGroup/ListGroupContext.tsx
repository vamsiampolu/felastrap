import { createContext } from "react";

export type ListGroupContextValue = {
  card: boolean;
  flush: boolean;
  horizontal: boolean;
  numbered: boolean;
};

const ListGroupContext = createContext({
  flush: false,
  horizontal: false,
  numbered: false,
} as ListGroupContextValue);

export { ListGroupContext };
