import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { OffcanvasHeader } from "./Header";

describe("components/Offcanvas/Header", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an Offcanvas Header", async () => {
    const component = (
      <OffcanvasHeader
        title="Title"
        titleId="sidebar-title"
        style={{}}
        onClose={() => undefined}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-header")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-title")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-title")).toHaveAttribute(
      "id",
      "sidebar-title",
    );
    expect(screen.queryByTestId("offcanvas-title")).toHaveTextContent("Title");
    expect(screen.getByTestId("offcanvas-close-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("render an Offcanvas Header with a className", () => {
    const wrappedComponent = (
      <Wrapper renderer={renderer}>
        <OffcanvasHeader
          className="offcanvas-header"
          title="Title"
          titleId="sidebar-title"
          style={{}}
          onClose={() => undefined}
        />
      </Wrapper>
    );

    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-header")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-header")).toHaveClass(
      "offcanvas-header",
    );
  });

  it("render an Offcanvas Header without a close button", async () => {
    const component = (
      <OffcanvasHeader
        title="Title"
        titleId="sidebar-title"
        style={{}}
        showCloseButton={false}
        onClose={() => undefined}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("offcanvas-header")).toBeInTheDocument();

    expect(screen.getByTestId("offcanvas-title")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-title")).toHaveAttribute(
      "id",
      "sidebar-title",
    );

    expect(screen.queryByTestId("offcanvas-title")).toHaveTextContent("Title");
    expect(
      screen.queryByTestId("offcanvas-close-button"),
    ).not.toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onClose when close button is clicked", async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    const component = (
      <OffcanvasHeader
        title="Title"
        titleId="sidebar-title"
        style={{}}
        onClose={onClose}
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    const closeBtn = screen.queryByTestId("offcanvas-close-button");
    await user.click(closeBtn!);

    expect(onClose).toHaveBeenCalled();
  });
});
