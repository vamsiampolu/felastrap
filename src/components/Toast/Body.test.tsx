import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ToastBody } from "./Body";
import { render, screen } from "@testing-library/react";

describe("components/Toast/Body", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a ToastBody", async () => {
    const component = <ToastBody>Toast Body</ToastBody>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("toast-body")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-body")).toHaveTextContent("Toast Body");
    expect(screen.queryByTestId("toast-body")).toHaveClass("toast-body");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a ToastBody with a className", async () => {
    const component = (
      <ToastBody className="chatbox-notification">Toast Body</ToastBody>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("toast-body")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-body")).toHaveTextContent("Toast Body");
    expect(screen.queryByTestId("toast-body")).toHaveClass(
      "toast-body chatbox-notification",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
