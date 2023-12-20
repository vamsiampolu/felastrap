import * as tinycolor from "tinycolor2";
import type { ColorInput, Instance } from "tinycolor2";
import { type Breakpoints as Breakpoint } from "./components/Flex/mediaQuery";

export type ColorOutput = {
  isDark: boolean;
  alpha: number;
};

const parseColor = (color: ColorInput): Instance => {
  return typeof tinycolor !== "function"
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (tinycolor as any)["default"](color)
    : tinycolor(color);
};

const color = (color: ColorInput): ColorOutput => {
  const tc = parseColor(color);

  return {
    isDark: tc.isDark(),
    alpha: tc.getAlpha(),
  };
};

export type BlackOrWhite = "#000" | "#fff";

/**
 * @description Given the background color, returns a contrasting
 * color for the foreground icon: either `#000` or `#fff` based on
 * the alpha and darkness of the background color.
 *
 * @param {ColorInput} bgColor Background Color of an item
 * @returns {BlackOrWhite} The foreground icon color, either `#000` or `#fff`
 */
const getForegroundColor = (bgColor: ColorInput): BlackOrWhite => {
  let parsed = color(bgColor);

  if (parsed.alpha === 0) {
    parsed = color("#ffffff");
  }

  return parsed.isDark ? "#fff" : "#000";
};

/**
 * @description Checks if value is a valid number.
 * @param {number} num A value
 * @returns {boolean} Is true when a number is provided. Returns false when NaN is provided.
 */
const isNumber = (num: unknown): num is number =>
  typeof num === "number" && !Number.isNaN(num);
/**
 * @description Checks that a number is within an inclusive range.
 * Note: Inclusive range: a range of all numbers between min and max including both min and max.
 * @param {number} min Inclusive start of a range
 * @param {number} max Inclusive end of the range.
 * @param {number} num a number
 * @returns {boolean} Is true if the number is within the inclusive range of [min...max]
 */
const between = (min: number, max: number, num: number) =>
  isNumber(num) && num >= min && num <= max;

/**
 * @description Creates a new object from the given object and removes the keys specified.
 * @param {Record<string, unknown>} obj An object
 * @param {string[]} keys keys to be omitted when creating a new object
 * @returns {Record<string, unknown>} A new object created from `obj` without the specified keys.
 */
const omit = (
  obj: Record<string, unknown>,
  keys: string[],
): Record<string, unknown> => {
  if (!keys.length || isEmptyObj(obj)) {
    return obj;
  }

  const result: Record<string, unknown> = {};
  const entries = Object.entries(obj);

  for (const [key, value] of entries) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }

  return result;
};

/**
 * @description Is the given value one of an array of values.
 *
 * @template {T}
 * @param {T[]} acceptedValues  A list of accepted values
 * @param {T} value A value
 * @returns {boolean} Is `true` if the value is shallow equal to
 * one of the values in the list of accepted values.
 */
const oneOf = <T = object>(acceptedValues: T[], value: T) =>
  acceptedValues.includes(value);
const isObject = (obj: unknown): obj is object =>
  typeof obj === "object" && !Array.isArray(obj) && obj !== null;

function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray(value);
}

/**
 * @description Checks if the value provided is `{}`.
 * @param {unknown} obj a value
 * @returns {boolean} true if obj has the value `{}`
 */
const isEmptyObj = (obj: unknown): obj is object =>
  isObject(obj) && Object.keys(obj).length === 0 && obj.constructor === Object;

const isString = (x: unknown): x is string => typeof x === "string";

const getBackgroundColor = (button: HTMLElement) => {
  const { backgroundColor: bgColor } = getComputedStyle(button!);
  return bgColor;
};

/**
 * @description Checks NODE_ENV to see if the value is `test`,
 * useful to determine if the code is being tested by a test runner
 * such as `jest` which sets NODE_ENV to test.
 * @returns {boolean}
 */
const isTest = () => process.env.NODE_ENV === "test";

/**
 * @description Checks if the DOM is availble. Allows us to
 * distinguish if the code is running on the server or a browser.
 * @returns {boolean}
 */
const canUseDom = () => typeof document !== "undefined";

/**
 * @description Remove any keys with the value: `null` or `undefined` and return an object
 * without the keys. Similar to `compact` from lodash.
 * @param {Record<string, unknown> obj An object
 * @returns {Record<string, unknown>} An object without all of the empty keys.
 */
const compactObject = (obj: Record<string, unknown>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ([_, value]: [string, unknown]) => value !== null && value !== undefined,
    ),
  );
};

/**
 * @description Checks if an object has no properties.
 * @param {Record<string, unknown>} obj An object
 * @returns {boolean} `true` when object is {}.
 */
const isEmpty = (obj: Record<string, unknown>) =>
  Object.values(obj).every((x) => x === null || x === undefined);

/**
 * @description Checks if an object has a single property with a value that is not null or undefined/.
 * @param {Record<string, unknown>} obj An object
 * @returns {boolean} `true` if the object has a single property with a non empty value.
 */
const isSingleKeyValuePair = (obj: Record<string, unknown>) => {
  return (
    Object.values(obj).filter((x) => x !== null && x !== undefined).length === 1
  );
};
/**
 * @description Checks if an object has more than one property with value that is
 * not `null` or `undefined`.
 * @param {Record<string, unknown>} obj An object
 * @returns {boolean} An object that has more than one non empty properties.
 */
export const hasMultipleKeyValuePairs = (
  obj: Record<string, unknown>,
): boolean => {
  return (
    Object.values(obj).filter((x) => x !== null && x !== undefined).length > 1
  );
};

/**
 * @template K
 * @param {Record<K, unknown>} input An object
 * @param {Record<K, string | number} mapping A mapping
 * @returns
 */
const sortUsingMapping = <K extends string | number | symbol>(
  input: Record<K, unknown>,
  mapping: Record<K, number | string>,
) => {
  const scores = {} as Record<K, number>;

  for (const key in mapping) {
    const value = mapping[key];
    const score = parseInt(`${value}`);
    scores[key] = score;
  }

  const cleanedInput = compactObject(input);
  const keys = Object.keys(cleanedInput) as K[];

  const comparator = (a: K, b: K) => scores[a] - scores[b];
  return keys.toSorted(comparator);
};

/**
 * @description Given an array of values, take items at consecutive indices in the array and
 * return them as an array of pairs.
 * @template T
 * @param {T[]} arr An array of values
 * @returns {[T, T][]} Pairs of consecutive items from the array.
 */
const toPairs = <T = unknown>(arr: T[]): [[T]] | [T, T][] => {
  const pairs: [[T]] | [T, T][] = [];
  if (arr.length === 1) {
    const item: T = arr[0];
    return [[item]];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    pairs.push([arr[i], arr[i + 1]]);
  }

  return pairs;
};

const breakpointAndUp = {
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)",
  xxl: "(min-width: 1320px)",
};

const breakpointAndDown = {
  sm: "(max-width: 575.98px)",
  md: "(max-width: 767.98px)",
  lg: "(max-width: 991.98px)",
  xl: "(max-width: 1199.98px)",
  xxl: "(max-width: 1399.98)",
};

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

const getMediaQuery = ({
  breakpoint,
  isMinWidth,
}: UseMediaQueryOptions): string | undefined => {
  if (breakpoint) {
    return isMinWidth
      ? breakpointAndUp[breakpoint]
      : breakpointAndDown[breakpoint];
  }

  return undefined;
};

const getMatches = (query: string | undefined) => {
  if (!query) {
    return true;
  }

  if (typeof window !== "undefined") {
    return window.matchMedia(query).matches;
  }

  return false;
};

const getMediaQueryList = (mediaQuery: string) => window.matchMedia(mediaQuery);

export {
  between,
  canUseDom,
  color,
  compactObject,
  getBackgroundColor,
  getForegroundColor,
  isArray,
  isEmpty,
  isEmptyObj,
  isNumber,
  isObject,
  isSingleKeyValuePair,
  sortUsingMapping,
  isString,
  isTest,
  omit,
  oneOf,
  toPairs,
  getMatches,
  getMediaQuery,
  getMediaQueryList,
  breakpointAndDown,
  breakpointAndUp,
};
