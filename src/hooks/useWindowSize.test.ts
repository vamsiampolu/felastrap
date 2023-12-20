import { act, fireEvent, renderHook } from "@testing-library/react";
import { useWindowSize } from "./useWindowSize";

describe("hooks/useWindowSize", () => {
  it("should return the width and height of the window", async () => {
    window.innerWidth = 500;
    window.innerHeight = 500;

    const { result } = renderHook(() => useWindowSize());

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });

  it("should return the width and height on resize", async () => {
    const { result } = renderHook(() => useWindowSize());
    act(() => {
      window.innerWidth = 500;
      window.innerHeight = 500;
    });

    fireEvent(window, new Event("resize"));

    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  });
});
