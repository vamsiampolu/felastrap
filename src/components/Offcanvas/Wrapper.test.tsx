import { IRenderer } from "fela";
import { Wrapper as OffcanvasWrapper } from "./Wrapper";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/Wrapper", () => {
  let renderer: IRenderer;
  const placements = ["end", "start", "top", "bottom"];

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each(placements)(
    "should render the Offcanvas Wrapper at position %s",
    async (placement) => {
      const component = (
        <OffcanvasWrapper placement={placement}>Wrapper</OffcanvasWrapper>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
      expect(screen.queryByTestId("offcanvas-wrapper")).toHaveAttribute(
        "tabindex",
        "-1",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(placements)(
    "should render an open Offcanvas Wrapper at position %s",
    async (placement) => {
      const component = (
        <OffcanvasWrapper isOpen width="400px" placement={placement}>
          Wrapper
        </OffcanvasWrapper>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.queryByTestId("offcanvas-wrapper")).toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render the Offcanvas Wrapper with the title as a label", async () => {
    const component = (
      <OffcanvasWrapper isOpen width="400px" titleId="sidebar-title">
        Wrapper
      </OffcanvasWrapper>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-wrapper")).toHaveAttribute(
      "aria-labelledby",
      "sidebar-title",
    );
  });

  it("should render the Offcanvas Wrapper as a nav", async () => {
    const component = (
      <OffcanvasWrapper as="nav" isOpen width="400px" titleId="sidebar-title">
        Wrapper
      </OffcanvasWrapper>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-wrapper")?.tagName).toEqual("NAV");
  });
});
