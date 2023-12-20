import { renderHook } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useWrapperElement } from "./useWrapperElement";
import * as dom from "../dom";

jest.mock("../dom");
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("hooks/useWrapperElement", () => {
  let mockDom: jest.Mocked<typeof dom> | null;
  beforeEach(() => {
    mockDom = mocked(dom, { shallow: false });
  });

  afterEach(() => {
    mockDom = null;
  });

  it("should use an existing element with the wrapperId if it exists in the dom", () => {
    const wrapperId = "foobar";
    const element = document.createElement("div");

    mockDom?.hasElement.mockReturnValue(true);
    mockDom?.createElement.mockReturnValue(element);

    renderHook(() => useWrapperElement(wrapperId));

    expect(mockDom?.hasElement).toHaveBeenCalled();
    expect(mockDom?.createElement).not.toHaveBeenCalled();
    expect(mockDom?.getElement).toHaveBeenCalledWith(wrapperId);
  });

  it("should set the style on an existing element with the wrapper id", () => {
    const element = document.createElement("div");
    mockDom?.getElement.mockReturnValue(element);
    mockDom?.hasElement.mockReturnValue(true);

    const wrapperId = "foobar";
    const style: Partial<CSSStyleDeclaration> = {
      display: "block",
      fontSize: "1.25rem",
      lineHeight: "1.25",
    };
    renderHook(() => useWrapperElement(wrapperId, style));

    expect(mockDom?.getElement).toHaveBeenCalledWith(wrapperId);
    expect(element).toHaveStyle(
      "display: block; fontSize: 1.25rem; lineHeight: 1.25",
    );
  });

  it("should create an element and append it to the document body", () => {
    const wrapperId = "foobar";
    const element = document.createElement("div");

    mockDom?.hasElement.mockReturnValue(false);
    mockDom?.createElement.mockReturnValue(element);

    renderHook(() => useWrapperElement(wrapperId));
    expect(dom.createElement).toHaveBeenCalledWith(wrapperId);
    expect(dom.appendElement).toHaveBeenCalledWith(element);
  });

  it("should create an element, set the given style and append it to the document body", () => {
    const wrapperId = "foobar";
    const style: Partial<CSSStyleDeclaration> = {
      display: "block",
      fontSize: "1.25rem",
      lineHeight: "1.25",
    };
    const element = document.createElement("div");

    mockDom?.hasElement.mockReturnValue(false);
    mockDom?.createElement.mockReturnValue(element);

    renderHook(() => useWrapperElement(wrapperId, style));
    expect(dom.createElement).toHaveBeenCalledWith(wrapperId);
    expect(dom.appendElement).toHaveBeenCalledWith(element);
    expect(element).toHaveStyle(
      "display: block; fontSize: 1.25rem; lineHeight: 1.25",
    );
  });
});
