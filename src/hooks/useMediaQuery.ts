import { useCallback, useEffect, useState } from "react";
import { type Breakpoints as Breakpoint } from "../components/Flex/mediaQuery";
import { getMatches, getMediaQuery, getMediaQueryList } from "../utils";

/**
 * @property {Breakpoint} breakpoint A Breakpoint to be detected.
 * @property {boolean} isMinWidth Breakpoint and up.
 * Example: (a breakpoint of md matches md, lg, xl and above).
 * @property {boolean} isMaxWidth Breakpoint and down.
 * Example (A breakpoint of md matches sm)
 */
export type UseMediaQueryOptions = {
  breakpoint: Breakpoint | undefined;
  isMinWidth: boolean | null;
};

export const useMediaQuery = ({
  breakpoint,
  isMinWidth,
}: UseMediaQueryOptions) => {
  const mediaQuery = getMediaQuery({ breakpoint, isMinWidth });
  const [matches, setMatches] = useState(getMatches(mediaQuery));

  const handleChange = useCallback(() => {
    setMatches(mediaQuery ? getMatches(mediaQuery) : true);
  }, [mediaQuery, setMatches]);

  // two ways breakpoint and up. breakpoint and down.
  useEffect(() => {
    if (mediaQuery) {
      const mediaQueryList = getMediaQueryList(mediaQuery);
      handleChange();

      mediaQueryList.addEventListener("change", handleChange);
      return () => mediaQueryList.removeEventListener("change", handleChange);
    }
  }, [setMatches, matches, handleChange, mediaQuery]);

  return matches;
};
