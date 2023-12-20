import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Icon as CarouselIcon } from "./Icon";
import { render, screen } from "@testing-library/react";

describe("components/Carousel/Icon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the next icon", async () => {
    const component = <CarouselIcon name="next" label="Foobar" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should set the className for next icon to carousel-control-next-icon", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <CarouselIcon name="next" label="Foobar" />
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("carousel-icon")).toHaveClass(
      "carousel-control-next-icon",
    );
  });

  it("should hide the icon from screen readers", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <CarouselIcon name="next" label="Foobar" />
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("carousel-icon")).toHaveAttribute(
      "aria-hidden",
      "true",
    );
    expect(screen.queryByText("Foobar")).toHaveStyle("visibility: hidden;");
  });

  it("should set the className for prev icon to carousel-control-prev-icon", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <CarouselIcon name="prev" label="Foobar" />
      </Wrapper>
    );

    render(component);
    expect(screen.queryByTestId("carousel-icon")).toHaveClass(
      "carousel-control-prev-icon",
    );
  });

  it("should render the prev icon", async () => {
    const component = <CarouselIcon name="prev" label="Foobar" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
