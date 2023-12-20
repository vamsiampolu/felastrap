import { GutterModifier, calcGutter, getWidth } from "./calc";

describe("calcGutter", () => {
  it.each([
    {
      gutter: 0,
      result: 0,
    },
    {
      gutter: 1,
      result: "0.25rem",
    },
    {
      gutter: 2,
      result: "0.5rem",
    },
    {
      gutter: 3,
      result: "1rem",
    },
    {
      gutter: 4,
      result: "1.5rem",
    },
    {
      gutter: 5,
      result: "3rem",
    },
    {
      gutter: undefined,
      result: 0,
    },
  ])(
    "should calculate a gutter with modifier $gutter",
    ({ gutter, result }) => {
      expect(calcGutter(gutter as GutterModifier)).toEqual(result);
    },
  );
});

describe("getWidth", () => {
  it("should return width of auto", () => {
    expect(getWidth("auto")).toEqual("auto");
  });

  it("should return width when null or undefined", () => {
    expect(getWidth(null)).toEqual(null);
    expect(getWidth(undefined)).toEqual(null);
  });

  it("should calculate width using span", () => {
    expect(getWidth(4)).toEqual("33.333333333333336% !important");
  });
});
