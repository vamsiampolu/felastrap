import { act, renderHook } from "@testing-library/react";
import { useRef } from "react";
import { useFillColor } from "./useFillColor";

describe("hooks/useFillColor", () => {
  let getComputedStyleSpy: jest.Spied<typeof global.getComputedStyle>;
  beforeEach(() => {
    jest.useFakeTimers();

    getComputedStyleSpy = jest.spyOn(global, "getComputedStyle");
  });

  afterEach(() => {
    jest.useRealTimers();
    getComputedStyleSpy.mockReset();
  });

  it.each(["rebeccapurple", "#ff4500", "black"])(
    "should set fill color to #fff for %s",
    (bgColor) => {
      getComputedStyleSpy.mockReturnValue({
        backgroundColor: bgColor,
      } as CSSStyleDeclaration);

      const { result } = renderHook(() => {
        const buttonRef = useRef(document.createElement("button"));
        return useFillColor({ buttonRef });
      });

      act(() => {
        jest.runAllTimers();
      });
      expect(result.current).toBe("#fff");
    },
  );

  it.each(["transparent", "#ffffff", "#87cefa"])(
    "should set fill color to #000 for %s",
    (bgColor) => {
      getComputedStyleSpy.mockReturnValue({
        backgroundColor: bgColor,
      } as CSSStyleDeclaration);

      const { result } = renderHook(() => {
        const buttonRef = useRef(document.createElement("button"));
        const result = useFillColor({ duration: 200, buttonRef });
        return result;
      });
      act(() => {
        jest.runAllTimers();
      });
      expect(result.current).toBe("#000");
    },
  );
});
