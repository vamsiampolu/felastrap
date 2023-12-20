import { useMediaQuery } from "./useMediaQuery";
import * as utils from "../utils";
import { renderHook } from "@testing-library/react";

describe("hooks/useMediaQuery", () => {
  let getMatchesSpy: jest.SpyInstance<
    boolean,
    [query: string | undefined],
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    any
  >;
  let getMediaQueryListSpy: jest.SpyInstance<
    MediaQueryList,
    [mediaQuery: string],
    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    any
  >;
  const originalMatchMedia = window.matchMedia;

  beforeEach(() => {
    window.matchMedia = jest.fn();
    getMatchesSpy = jest.spyOn(utils, "getMatches");
    getMediaQueryListSpy = jest.spyOn(utils, "getMediaQueryList");
  });

  afterEach(() => {
    window.matchMedia = originalMatchMedia;
    getMatchesSpy.mockRestore();
    getMediaQueryListSpy.mockRestore();
  });

  it("should return true when no breakpoint exists", () => {
    const { result } = renderHook(() =>
      useMediaQuery({ breakpoint: undefined, isMinWidth: true }),
    );
    expect(result.current).toEqual(true);
  });

  it("should return true when breakpoint matches", () => {
    const addEventListener = jest.fn();
    const mediaQueryList = {
      matches: true,
      addEventListener,
      removeEventListener: () => undefined,
    } as unknown as MediaQueryList;
    (window.matchMedia as jest.Mock).mockReturnValue(mediaQueryList);

    getMediaQueryListSpy.mockReturnValue(mediaQueryList);
    getMatchesSpy.mockReturnValueOnce(true);

    const { result } = renderHook(() =>
      useMediaQuery({ breakpoint: "md", isMinWidth: true }),
    );
    expect(getMatchesSpy).toHaveBeenCalledWith("(min-width: 768px)");
    expect(getMediaQueryListSpy).toHaveBeenCalledWith("(min-width: 768px)");

    expect(addEventListener).toHaveBeenCalled();
    expect(result.current).toEqual(true);
  });

  it("should return false when breakpoint does not match", () => {
    const addEventListener = jest.fn();
    const mediaQueryList = {
      matches: false,
      addEventListener,
      removeEventListener: () => undefined,
    } as unknown as MediaQueryList;

    (window.matchMedia as jest.Mock).mockReturnValue(mediaQueryList);

    getMediaQueryListSpy.mockReturnValue(mediaQueryList);
    getMatchesSpy.mockReturnValueOnce(false);

    const { result } = renderHook(() =>
      useMediaQuery({ breakpoint: "md", isMinWidth: true }),
    );

    expect(getMatchesSpy).toHaveBeenCalledWith("(min-width: 768px)");
    expect(getMediaQueryListSpy).toHaveBeenCalledWith("(min-width: 768px)");

    expect(addEventListener).toHaveBeenCalled();
    expect(result.current).toEqual(false);
  });
});
