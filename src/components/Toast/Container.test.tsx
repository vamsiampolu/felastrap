import { IRenderer } from "fela";
import { ToastContainer, ToastPlacement } from "./Container";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Toast/Container", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a toast container with style and className", async () => {
    const component = (
      <ToastContainer
        style={{ fontSize: "0.75rem" }}
        className="not-sandwich-wrap"
      >
        <div>Toast Container</div>
      </ToastContainer>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("toast-container")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-container")).toHaveClass(
      "toast-container not-sandwich-wrap",
    );
    expect(screen.queryByTestId("toast-container")).toHaveStyle({
      fontSize: "0.75rem",
    });

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each([
    "top-left",
    "top-center",
    "top-right",
    "middle-left",
    "middle-center",
    "middle-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ])("should render a toast container with %s", async (placement) => {
    const component = (
      <ToastContainer
        style={{ fontSize: "0.75rem" }}
        placement={placement as ToastPlacement}
      >
        <div>Toast Container</div>
      </ToastContainer>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("toast-container")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-container")).toHaveClass(
      "toast-container",
    );
    expect(screen.queryByTestId("toast-container")).toHaveStyle({
      fontSize: "0.75rem",
    });

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
