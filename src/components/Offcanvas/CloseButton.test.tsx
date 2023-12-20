import { IRenderer } from "fela";
import { CloseButton } from "./CloseButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/CloseButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a CloseButton", async () => {
    const component = <CloseButton />;

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-close-button")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-close-button")).toHaveAttribute(
      "aria-label",
      "Close",
    );
    expect(screen.queryByTestId("offcanvas-close-button")).toHaveClass(
      "offcanvas-btn-close",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a CloseButton with className", async () => {
    const component = <CloseButton className="sidebar-close" />;

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-close-button")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-close-button")).toHaveClass(
      "sidebar-close",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
