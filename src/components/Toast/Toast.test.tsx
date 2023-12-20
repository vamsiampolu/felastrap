import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IRenderer } from "fela";
import { CSSProperties, useState } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Button } from "../Button";
import { Portal, PortalProps } from "../Portal";
import { Toast, ToastProps } from "./Toast";
import { ToastPlacement } from "./Container";

jest.mock("../Portal");

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div data-testid="portal" style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

const ToggleToastComponent = ({
  renderer,
  isOpen: initialOpen = false,
  placement,
  close,
  ...props
}: ToastProps & { renderer: IRenderer }) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const toggle = () => setIsOpen((value) => !value);

  const onClose = () => {
    setIsOpen(false);
    close();
  };

  const buttonText = isOpen ? "Close Toast" : "Open Toast";

  return (
    <Wrapper renderer={renderer}>
      <div className="container">
        <Button
          data-testid="toast-wrapper-btn"
          variant="primary"
          onClick={toggle}
        >
          {buttonText}
        </Button>
        <Toast
          close={onClose}
          isOpen={isOpen}
          placement={placement}
          {...props}
        />
      </div>
    </Wrapper>
  );
};

describe("components/Toast/Toast", () => {
  const placements = [
    "top-left",
    "top-center",
    "top-right",
    "middle-left",
    "middle-center",
    "middle-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  let renderer: IRenderer;

  beforeEach(() => {
    (Portal as jest.Mock).mockImplementation(MockPortal);

    renderer = createRenderer();
    cssReboot(renderer);

    jest.clearAllMocks();
  });

  afterEach(() => {
    (Portal as jest.Mock).mockReset();
    renderer.clear();
  });

  it("should render a Toast", async () => {
    const header = { title: "Bootstrap", right: "11 mins ago" };

    const component = (
      <ToggleToastComponent
        renderer={renderer}
        close={() => undefined}
        isOpen
        body="Hello, world! This is a toast message."
        header={header}
      />
    );

    render(component);
    expect(screen.getByTestId("toast")).toBeInTheDocument();

    expect(screen.getByTestId("toast-header")).toBeInTheDocument();
    expect(screen.getByTestId("toast-body")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-body")).toHaveTextContent(
      "Hello, world! This is a toast message.",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Toast without a header", async () => {
    const component = (
      <ToggleToastComponent
        renderer={renderer}
        close={() => undefined}
        isOpen
        body="Hello, world! This is a toast message."
      />
    );

    render(component);
    expect(screen.getByTestId("toast")).toBeInTheDocument();

    expect(screen.queryByTestId("toast-header")).not.toBeInTheDocument();
    expect(screen.getByTestId("toast-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(placements)(
    "should render a Toast with a placement %s",
    async (placement) => {
      const header = { title: "Bootstrap", right: "11 mins ago" };

      const component = (
        <ToggleToastComponent
          placement={placement as ToastPlacement}
          renderer={renderer}
          close={() => undefined}
          isOpen
          body="Hello, world! This is a toast message."
          header={header}
        />
      );

      render(component);
      expect(screen.getByTestId("toast")).toBeInTheDocument();

      expect(screen.getByTestId("toast-header")).toBeInTheDocument();
      expect(screen.getByTestId("toast-body")).toBeInTheDocument();

      expect(screen.queryByTestId("toast-body")).toHaveTextContent(
        "Hello, world! This is a toast message.",
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(placements)(
    "should render a Toast without a header placed at %s",
    async (placement) => {
      const component = (
        <ToggleToastComponent
          renderer={renderer}
          close={() => undefined}
          isOpen
          body="Hello, world! This is a toast message."
          placement={placement as ToastPlacement}
        />
      );

      render(component);
      expect(screen.getByTestId("toast")).toBeInTheDocument();

      expect(screen.queryByTestId("toast-header")).not.toBeInTheDocument();
      expect(screen.getByTestId("toast-body")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should open a Toast with animation", async () => {
    const header = { title: "Bootstrap", right: "11 mins ago" };
    const user = userEvent.setup();

    const component = (
      <ToggleToastComponent
        renderer={renderer}
        close={() => undefined}
        body="Hello, world! This is a toast message."
        header={header}
      />
    );

    render(component);

    const btn = screen.queryByTestId("toast-wrapper-btn");
    const toast = screen.queryByTestId("toast");

    expect(btn).toBeInTheDocument();
    expect(toast).toBeInTheDocument();

    expect(btn).toHaveTextContent("Open Toast");
    await user.click(btn!);

    fireEvent.animationStart(toast!);
    fireEvent.animationEnd(toast!);

    expect(btn).toHaveTextContent("Close Toast");
    expect(toast).toBeVisible();
  });

  it("should close a Toast with animation", async () => {
    const header = { title: "Bootstrap", right: "11 mins ago" };
    const user = userEvent.setup();

    const component = (
      <ToggleToastComponent
        isOpen
        renderer={renderer}
        close={() => undefined}
        body="Hello, world! This is a toast message."
        header={header}
      />
    );

    render(component);

    const btn = screen.queryByTestId("toast-wrapper-btn");
    const toast = screen.queryByTestId("toast");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Close Toast");

    expect(toast).toBeInTheDocument();
    expect(toast).toBeVisible();

    await user.click(btn!);

    fireEvent.animationStart(toast!);
    fireEvent.animationEnd(toast!);

    expect(btn).toHaveTextContent("Open Toast");
    expect(toast).not.toBeVisible();
  });

  it("should notify users with screen readers when the component is updated", async () => {
    const header = { title: "Bootstrap", right: "11 mins ago" };
    const component = (
      <ToggleToastComponent
        renderer={renderer}
        close={() => undefined}
        isOpen
        body="Hello, world! This is a toast message."
        header={header}
      />
    );

    render(component);

    const toast = screen.queryByTestId("toast");
    expect(toast).toHaveAttribute("role", "alert");

    expect(toast).toHaveAttribute("aria-live", "assertive");
    expect(toast).toHaveAttribute("aria-atomic", "true");
  });
});
