import { useState } from "react";
import { StyleKey } from "../components/common";
import * as dom from "../dom";
import { isEmptyObj } from "../utils";

import useLayoutEffect from "./useIsomorphicLayoutEffect";

export const useWrapperElement = (
  wrapperId: string,
  style?: Partial<CSSStyleDeclaration>,
) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useLayoutEffect(() => {
    const systemCreated = !dom.hasElement(wrapperId);
    const element = dom.hasElement(wrapperId)
      ? dom.getElement(wrapperId)
      : dom.createElement(wrapperId);

    if (systemCreated) {
      dom.appendElement(element as HTMLElement);
    }

    if (style && !isEmptyObj(style) && element?.style) {
      const styleProperties = Object.keys(style);
      for (const property of styleProperties) {
        element.style[property as StyleKey] = style[property];
      }
    }

    setWrapperElement(element);
    const cleanup = () => {
      if (systemCreated) {
        dom.removeElement(element as HTMLElement);
      }

      return undefined;
    };

    return cleanup;
  }, [wrapperId, style]);

  return wrapperElement;
};
