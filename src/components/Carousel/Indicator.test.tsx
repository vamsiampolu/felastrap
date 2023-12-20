import { IRenderer } from "fela";
import { Indicator } from "./Indicator";
import {
  createRenderer,
  cssReboot,
  createSnapshot,
  Wrapper,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Carousel/Indicator", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an Indicator", async () => {
    const component = <Indicator label="Slide 1" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active Indicator", async () => {
    const component = <Indicator active label="Slide 1" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should set aria-current when Indicator is active", async () => {
    const component = <Indicator active label="Slide 1" />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.queryByTestId("carousel-indicator")).toHaveAttribute(
      "aria-current",
      "true",
    );
    expect(screen.queryByTestId("carousel-indicator")).toHaveClass(
      "carousel-indicator",
    );
    expect(screen.queryByTestId("carousel-indicator")).toHaveAttribute(
      "aria-label",
      "Slide 1",
    );
  });
});
