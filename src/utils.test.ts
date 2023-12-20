import {
  oneOf,
  isEmptyObj,
  isString,
  between,
  isArray,
  isNumber,
  omit,
  compactObject,
  color,
  getForegroundColor,
  getBackgroundColor,
  isEmpty,
  isSingleKeyValuePair,
  hasMultipleKeyValuePairs,
  toPairs,
  sortUsingMapping,
  getMatches,
  getMediaQuery,
  getMediaQueryList,
} from "./utils";

describe("utils.between", () => {
  it("should return true if a number is within a range", () => {
    expect(between(1, 10, 4)).toBe(true);
  });

  it("should return false if a number is not within a range", () => {
    expect(between(1, 4, 10)).toBe(false);
  });

  it("should return true if a number is equal to the start of the range", () => {
    expect(between(1, 12, 1)).toBe(true);
  });

  it("should return true if a number is equal to the end of the range", () => {
    expect(between(1, 12, 12)).toBe(true);
  });
});

describe("utils.oneOf", () => {
  it("should return true if value is one of the accepted values", () => {
    expect(oneOf(["a", "b", "c"], "a")).toBe(true);
  });

  it("should return false if value is not one of the accepted values", () => {
    expect(oneOf(["a", "b", "c"], "d")).toBe(false);
  });

  it("should not return true if two reference types are deep equal", () => {
    expect(oneOf([{ foo: "bar" }, { foo: "baz" }], { foo: "baz" })).toBe(false);
  });
});

describe("utils.isEmptyObj", () => {
  it("should return true if object is {}", () => {
    expect(isEmptyObj({})).toBe(true);
  });

  it("should return false if object is null, undefined or NaN", () => {
    expect(isEmptyObj(null)).toBe(false);
    expect(isEmptyObj(undefined)).toBe(false);
    expect(isEmptyObj(NaN)).toBe(false);
  });

  it("should return false if object is a primitive", () => {
    expect(isEmptyObj(false)).toBe(false);
    expect(isEmptyObj("")).toBe(false);
    expect(isEmptyObj(1)).toBe(false);
  });

  it("should return false if object is []", () => {
    expect(isEmptyObj([])).toBe(false);
  });

  it("should return false if object has properties", () => {
    expect(isEmptyObj({ a: undefined })).toBe(false);
  });

  it("should return false if object is an instance", () => {
    expect(isEmptyObj(new URL("https://google.com.au"))).toBe(false);
  });
});

describe("utils.isNumber", () => {
  it("should return true if value is a number", () => {
    expect(isNumber(23)).toBe(true);
  });

  it("should return false if object is null, undefined or NaN", () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  it("should return false if value is a string or boolean", () => {
    expect(isNumber(false)).toBe(false);
    expect(isNumber("")).toBe(false);
  });
});

describe("utils.omit", () => {
  it("should return the current object when no keys are to be omitted", () => {
    const a: Record<string, unknown> = { a: 1, b: 2 };
    expect(omit(a, [])).toBe(a);
  });

  it("should return the same object if an empty object is provided", () => {
    const a = {};
    expect(omit(a, ["a"])).toBe(a);
  });

  it("should create a new object without the keys", () => {
    const a: Record<string, unknown> = { a: 1, b: 2 };
    expect(omit(a, ["a"])).toEqual({ b: 2 });
  });
});

describe("utils.isArray", () => {
  it("should return true if value is an array", () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
  });

  it("should return false if value is null, undefined or NaN", () => {
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(NaN)).toBe(false);
  });

  it("should return false if value is a primitive", () => {
    expect(isArray(true)).toBe(false);
    expect(isArray("")).toBe(false);
    expect(isArray(9)).toBe(false);
  });
});

describe("utils.isString", () => {
  it("should return true if value is a string", () => {
    expect(isString("")).toBe(true);
    expect(isString("foobar")).toBe(true);
  });

  it("should return false if value is boolean or number", () => {
    expect(isString(true)).toBe(false);
    expect(isString(0)).toBe(false);
  });

  it("should return false if value is null, undefined or Nan", () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(NaN)).toBe(false);
  });

  it("should return false if value is an object or array", () => {
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
  });
});

describe("utils.color", () => {
  it("should return alpha to 0 and isDark to true for color: rgba(34,12,64, 0)", () => {
    const { alpha, isDark } = color("rgba(34,12,64, 0)");
    expect(alpha).toBe(0);
    expect(isDark).toBe(true);
  });

  it("should return alpha to 0 and isDark to true for color: transparent", () => {
    const { alpha, isDark } = color("transparent");
    expect(alpha).toBe(0);
    expect(isDark).toBe(true);
  });

  it("should return alpha and isDark for color: #ffffff", () => {
    const { alpha, isDark } = color("#ffffff");
    expect(alpha).toBe(1);
    expect(isDark).toBe(false);
  });

  it("should return isDark and alpha for named color: rebeccapurple", () => {
    const { isDark, alpha } = color("rebeccapurple");
    expect(isDark).toBe(true);
    expect(alpha).toBe(1);
  });
});

describe("utils.getBackgroundColor", () => {
  const spy = jest.spyOn(global, "getComputedStyle");
  afterEach(() => {
    spy.mockClear();
  });

  it("should get background color from element", () => {
    const button = document.createElement("button");

    spy.mockReturnValue({ backgroundColor: "#87cefa" } as CSSStyleDeclaration);
    expect(getBackgroundColor(button)).toBe("#87cefa");
  });
});

describe("utils.getForgroundColor", () => {
  it.each(["rgba(34,12,64, 0)", "transparent", "#ffffff", "#87cefa"])(
    "should get foreground color for %s",
    (bgColor) => {
      const fill = getForegroundColor(bgColor);
      expect(fill).toBe("#000");
    },
  );

  it.each(["rebeccapurple", "#ff1493", "#ff4500", "black"])(
    "should set foreground color to %s",
    (bgColor) => {
      expect(getForegroundColor(bgColor)).toBe("#fff");
    },
  );
});

describe("utils.compactObject", () => {
  it("should remove any keys with null or undefined as values", () => {
    const obj = {
      a: null,
      b: undefined,
    };

    expect(compactObject(obj)).toEqual({});
  });

  it("should not remove any falsy keys not null or undefined", async () => {
    const obj = {
      a: "foobar",
      b: "",
      c: 12,
      d: 0,
      e: [],
      f: {},
      g: null,
      h: undefined,
      i: NaN,
      j: true,
      k: false,
    };

    expect(compactObject(obj)).toEqual({
      a: "foobar",
      b: "",
      c: 12,
      d: 0,
      e: [],
      f: {},
      i: NaN,
      j: true,
      k: false,
    });
  });
});

describe("utils.isEmpty", () => {
  it("should return true for {}", () => {
    expect(isEmpty({})).toBe(true);
  });

  it('should return false for {a: "foo"}', () => {
    expect(isEmpty({ a: "foo" })).toBe(false);
  });

  it("should return true for {a: null, b: undefined }", () => {
    expect(isEmpty({ a: null, b: undefined })).toBe(true);
  });
});

describe("utils.isSingleKeyValuePair", () => {
  it("should return false for {}", () => {
    expect(isSingleKeyValuePair({})).toBe(false);
  });

  it("should return false for {a: 1, b: 2}", () => {
    expect(isSingleKeyValuePair({ a: 1, b: 2 })).toBe(false);
  });

  it("should return true for {a: 1, b: undefined, c: null}", () => {
    expect(isSingleKeyValuePair({ a: 1, b: undefined, c: null })).toBe(true);
  });

  it("should return true for {a: 1}", () => {
    expect(isSingleKeyValuePair({ a: 1 })).toBe(true);
  });
});

describe("utils.hasMultipleKeyValuePairs", () => {
  it("should return false for {}", () => {
    expect(hasMultipleKeyValuePairs({})).toBe(false);
  });

  it("should return false for {a: 1}", () => {
    expect(hasMultipleKeyValuePairs({ a: 1 })).toBe(false);
  });

  it("should return true for {a: 1, b: 2}", () => {
    expect(hasMultipleKeyValuePairs({ a: 1, b: 2 })).toBe(true);
  });
});

describe("utils.toPairs", () => {
  it("should return an array with a single item", () => {
    const values = ["sm"];
    expect(toPairs(values)).toEqual([values]);
  });

  it("should return an array with a single pair", () => {
    const values = ["sm", "md"];
    expect(toPairs(values)).toEqual([values]);
  });

  it("should return an array with a single pair", () => {
    const values = ["sm", "md", "lg"];
    expect(toPairs(values)).toEqual([
      ["sm", "md"],
      ["md", "lg"],
    ]);
  });
});

describe("utils.sortUsingMapping", () => {
  const mapping = {
    espresso: "4oz",
    cappucino: "6oz",
    latte: "8oz",
    chai: "12oz",
    icedAmericano: "14oz",
  };

  it("should sort keys using mapping", () => {
    const obj = {
      espresso: 2,
      icedAmericano: 1,
      chai: 3,
    } as Record<
      "espresso" | "icedAmericano" | "chai" | "cappucino" | "latte",
      unknown
    >;

    expect(sortUsingMapping(obj, mapping)).toEqual([
      "espresso",
      "chai",
      "icedAmericano",
    ]);
  });
});

describe("utils.getMediaQuery", () => {
  it("should generate a media query from options", () => {
    const mediaQuery = getMediaQuery({ breakpoint: "md", isMinWidth: true });
    expect(mediaQuery).toEqual("(min-width: 768px)");
  });

  it("should generate a media query for max width from options", () => {
    const mediaQuery = getMediaQuery({ breakpoint: "md", isMinWidth: false });
    expect(mediaQuery).toEqual("(max-width: 767.98px)");
  });

  it("should return null when no breakpoint is provided", () => {
    expect(
      getMediaQuery({ breakpoint: undefined, isMinWidth: false }),
    ).toBeUndefined();
    expect(
      getMediaQuery({ breakpoint: undefined, isMinWidth: true }),
    ).toBeUndefined();
    expect(
      getMediaQuery({ breakpoint: undefined, isMinWidth: null }),
    ).toBeUndefined();
  });
});

describe("utils.getMatches", () => {
  const orginalMatchMedia = window.matchMedia;
  beforeEach(() => {
    window.matchMedia = jest.fn();
  });

  afterEach(() => {
    window.matchMedia = orginalMatchMedia;
  });

  it("should return true when no media query is provided", () => {
    expect(getMatches(undefined)).toBe(true);
  });

  it("should return the matches for a mediaquery", () => {
    (window.matchMedia as jest.Mock).mockReturnValue({ matches: true });
    expect(getMatches("(min-width: 768px)")).toBe(true);
  });
});

describe("utils.getMediaQueryList", () => {
  const orginalMatchMedia = window.matchMedia;
  beforeEach(() => {
    window.matchMedia = jest.fn();
  });

  afterEach(() => {
    window.matchMedia = orginalMatchMedia;
  });

  it("should get media query list", () => {
    const value = jest.mocked<MediaQueryList>(
      { matches: true } as unknown as MediaQueryList,
      { shallow: false },
    );
    (window.matchMedia as jest.Mock).mockReturnValue(value);

    const mediaQueryList = getMediaQueryList("(min-width: 768px)");
    expect(mediaQueryList).toBeDefined();
  });
});
