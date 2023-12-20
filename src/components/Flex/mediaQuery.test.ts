import {
  Breakpoints,
  getMinWidth,
  getMaxWidth,
  sortBreakpoints,
  mediaQueryBetween,
  BreakpointRange,
} from "./mediaQuery";

describe("sortBreakpoints", () => {
  it("should sort breakpoints in the object by min width", () => {
    const obj = {
      sm: 8,
      md: 6,
      lg: 4,
    } as Record<Breakpoints, unknown>;

    expect(sortBreakpoints(obj)).toEqual(["sm", "md", "lg"]);
  });

  it("should sort non continous breakpoints", () => {
    const obj = {
      md: 8,
      xl: 4,
    } as Record<Breakpoints, unknown>;
    expect(sortBreakpoints(obj)).toEqual(["md", "xl"]);
  });

  it("should sort all breakpoints", () => {
    expect(sortBreakpoints({ sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 })).toEqual([
      "sm",
      "md",
      "lg",
      "xl",
      "xxl",
    ]);
  });
});

describe("getMinWidth", () => {
  it("should get min width media query segment", () => {
    expect(getMinWidth("576px")).toEqual("(min-width: 576px)");
  });
});

describe("getMaxWidth", () => {
  it("should get max width media query segment", () => {
    expect(getMaxWidth("768px")).toEqual("(max-width: 767.98px)");
  });
});

describe("mediaQueryBetween", () => {
  it("should return a media query from sm to md", () => {
    expect(mediaQueryBetween({ from: "sm", to: "md" })).toEqual(
      "@media (min-width: 576px) and (max-width: 767.98px)",
    );
  });

  it("should return a media query from md to sm", () => {
    expect(mediaQueryBetween({ from: "md", to: "sm" })).toEqual(
      "@media (min-width: 576px) and (max-width: 767.98px)",
    );
  });

  it("should throw an error when from and to are the same", () => {
    expect(() =>
      mediaQueryBetween({ from: "md", to: "md" } as unknown as BreakpointRange),
    ).toThrow(
      "The breakpoint for min-width: md and max-width: md cannot be the same",
    );
  });
});
