import { RefObject, useEffect, useState } from "react";
import type { Timer } from "../components/common";
import { getBackgroundColor, getForegroundColor } from "../utils";

export type BlackOrWhite = "#000" | "#fff";

export type UseFillColorOptions = {
  duration?: number;
  buttonRef: RefObject<HTMLElement>;
};
export const useFillColor = ({
  duration = 200,
  buttonRef,
}: UseFillColorOptions) => {
  const [fill, setFill] = useState("#000");

  useEffect(() => {
    const button = buttonRef.current;
    let timer: Timer;
    if (button) {
      const bgColor = getBackgroundColor(button!);
      const fillColor = getForegroundColor(bgColor);

      setFill(fillColor);
      timer = setTimeout(() => {
        const { backgroundColor: bgColor } = getComputedStyle(button!);
        const fillColor = getForegroundColor(bgColor);
        setFill(fillColor);
      }, duration);
    }

    return () => clearTimeout(timer);
  }, [duration, buttonRef, setFill]);

  return fill;
};
