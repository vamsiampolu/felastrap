import "@testing-library/jest-dom";
import "jest-location-mock";
import { config } from "react-transition-group";
import * as toSorted from "array.prototype.tosorted";
import * as assert from "assert";

type Comparator<T = unknown> = (a: T, b: T) => number;
type ToSortedFn<T = unknown> = (
  arr: T[],
  comparator: Comparator<T> | undefined,
) => T[];

interface ToSorted extends ToSortedFn {
  shim: () => ToSortedFn;
  getPolyfill: () => ToSortedFn;
  implementation: ToSorted;
}

const shimmed = (toSorted as ToSorted).shim();
assert.equal(shimmed, (toSorted as ToSorted).getPolyfill());
assert.equal(Array.prototype.toSorted, shimmed);

config.disabled = true;
