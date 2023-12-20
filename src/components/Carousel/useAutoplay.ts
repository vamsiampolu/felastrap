import { type Dispatch, type SetStateAction, useEffect } from "react";
import { type Timer } from "../common";
import { type ItemProps } from "./Item";

export type AutoplayHookOptions = {
  autoplay: boolean;
  autoplayDuration: number;
  activeIndex: number;
  items: ItemProps[];
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

export const useAutoplay = ({
  autoplay = false,
  setActiveIndex,
  items = [],
  autoplayDuration = 2000,
  activeIndex = 0,
}: AutoplayHookOptions) => {
  useEffect(() => {
    let timer: Timer;

    if (autoplay) {
      timer = setTimeout(() => {
        setActiveIndex((idx) => (idx + 1) % items.length);
      }, autoplayDuration); // Change slide every 3 seconds
    }

    return () => clearTimeout(timer);
  }, [activeIndex, autoplay, autoplayDuration, items, setActiveIndex]);

  return undefined;
};
