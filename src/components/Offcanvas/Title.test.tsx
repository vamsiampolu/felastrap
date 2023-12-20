import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { OffcanvasTitle } from "./Title";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/Title", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an off-canvas title", async () => {
    const component = <OffcanvasTitle>Offcanvas Title</OffcanvasTitle>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-title")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-title")).toHaveClass(
      "offcanvas-title",
    );
    expect(screen.queryByTestId("offcanvas-title")).toHaveTextContent(
      "Offcanvas Title",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an off-canvas title with a className", async () => {
    const component = (
      <OffcanvasTitle className="sidebar-title">Offcanvas Title</OffcanvasTitle>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-title")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-title")).toHaveClass(
      "sidebar-title",
    );
    expect(screen.queryByTestId("offcanvas-title")).toHaveTextContent(
      "Offcanvas Title",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
