import { createPortal } from "react-dom";
import { useWrapperElement } from "../hooks/useWrapperElement";
import type { PropsWithChildren } from "react";

export type PortalProps = PropsWithChildren<{
  wrapperId: string;
  style?: CSSStyleDeclaration | null;
}>;

export const Portal = ({ children, wrapperId, style = null }: PortalProps) => {
  const wrapperElement = useWrapperElement(wrapperId, style!);

  if (wrapperElement === null) {
    return null;
  }

  return createPortal(children, wrapperElement);
};
