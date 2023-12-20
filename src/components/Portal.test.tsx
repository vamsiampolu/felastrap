import * as dom from "../dom";
import { render, screen } from "@testing-library/react";
import { Portal } from "./Portal";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

jest.spyOn(dom, "createElement");

describe("components/Portal", () => {
  it("renders a portal with existing wrapperId", async () => {
    const div = document.createElement("div");
    div.setAttribute("id", "foobar");
    document.body.appendChild(div);
    const utils = render(<Portal wrapperId="foobar">Hello</Portal>);

    const el = await screen.findByText("Hello");
    expect(el).toHaveAttribute("id", "foobar");
    expect(el?.tagName).toEqual("DIV");

    document.body.removeChild(div);
    utils.unmount();
  });

  it("creates a portal with wrapperId", async () => {
    const utils = render(<Portal wrapperId="barrier">Hello</Portal>);
    const el = await screen.findByText("Hello");

    expect(el).toHaveAttribute("id", "barrier");
    expect(el?.tagName).toEqual("DIV");

    expect(dom.createElement).toHaveBeenCalledWith("barrier");
    utils.unmount();
  });
});
