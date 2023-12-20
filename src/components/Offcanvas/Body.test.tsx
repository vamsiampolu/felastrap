import { IRenderer } from "fela";
import { OffcanvasBody } from "./Body";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/Body", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an offcanvas-body", async () => {
    const component = <OffcanvasBody>Body</OffcanvasBody>;

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-body")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-body")).toHaveTextContent("Body");
    expect(screen.queryByTestId("offcanvas-body")).toHaveClass(
      "offcanvas-body",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an offcanvas-body with a className", async () => {
    const component = (
      <OffcanvasBody className="sidebar-content">Body</OffcanvasBody>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-body")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-body")).toHaveTextContent("Body");
    expect(screen.queryByTestId("offcanvas-body")).toHaveClass(
      "sidebar-content",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
