import { IRenderer } from "fela";
import { Backdrop } from "./Backdrop";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/Backdrop", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a hidden Backdrop for the offcanvas", async () => {
    const component = <Backdrop style={{}} />;

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).not.toBeVisible();
    expect(screen.getByTestId("offcanvas-backdrop")).toHaveClass(
      "offcanvas-backdrop",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a visible Backdrop for the offcanvas", async () => {
    const component = <Backdrop isOpen style={{}} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();
    expect(screen.getByTestId("offcanvas-backdrop")).toHaveClass(
      "offcanvas-backdrop",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
