import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ToastHeader } from "./Header";
import { BracesAsteriskIcon } from "../Icons/BracesAsteriskIcon";

describe("components/Toast/Header", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a ToastHeader", async () => {
    const component = <ToastHeader close={() => undefined} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-header")).toHaveClass("toast-header");
    expect(screen.getByTestId("toast-close-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an icon by default in a ToastHeader", async () => {
    const component = <ToastHeader close={() => undefined} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-header")).toHaveClass("toast-header");

    expect(screen.getByTestId("toast-close-button")).toBeInTheDocument();
    expect(screen.getByTestId("toast-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toast header with a className", async () => {
    const component = (
      <ToastHeader className="warm-popup-header" close={() => undefined} />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.getByTestId("toast-header")).toHaveClass("warm-popup-header");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toast header with a title", async () => {
    const component = (
      <ToastHeader
        title="Chat with us"
        className="warm-popup-header"
        close={() => undefined}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.getByTestId("toast-header")).toHaveClass("warm-popup-header");

    expect(screen.getByTestId("toast-title")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-title")).toHaveTextContent(
      "Chat with us",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toast header with a title and right text", async () => {
    const component = (
      <ToastHeader
        right="💬"
        title="Chat with us"
        className="warm-popup-header"
        close={() => undefined}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.getByTestId("toast-header")).toHaveClass("warm-popup-header");

    expect(screen.getByTestId("toast-title")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-title")).toHaveTextContent(
      "Chat with us",
    );

    expect(screen.getByTestId("toast-header-right")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-header-right")).toHaveTextContent("💬");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toast header with custom icon", async () => {
    const component = (
      <ToastHeader
        icon={<BracesAsteriskIcon />}
        title="Chat with us"
        className="warm-popup-header"
        close={() => undefined}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.getByTestId("toast-header")).toHaveClass("warm-popup-header");

    expect(screen.getByTestId("toast-title")).toBeInTheDocument();
    expect(screen.queryByTestId("toast-title")).toHaveTextContent(
      "Chat with us",
    );

    expect(screen.queryByTestId("toast-icon")).not.toBeInTheDocument();
    expect(screen.getByTestId("braces-asterisk-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
