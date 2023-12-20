import { useState } from "react";
import { Offcanvas, OffcanvasProps } from "./Offcanvas";
import { CSSProperties, IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { OffcanvasPlacement } from "./Wrapper";
import userEvent from "@testing-library/user-event";
import { PortalProps, Portal } from "../Portal";

const not = (x: boolean | undefined) => !x;
jest.mock("../Portal");

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

const OffcanvasExample = (props: OffcanvasProps) => {
  const { isOpen: initialOpen, onClose: onCloseProp, ...args } = props;
  const [isOpen, setIsOpen] = useState(initialOpen);

  const onClose = () => {
    onCloseProp();
    setIsOpen(not);
  };

  return <Offcanvas isOpen={isOpen} onClose={onClose} {...args} />;
};

describe("components/Offcanvas/Offcanvas", () => {
  const body = "Offcanvas Example Body";
  const id = "example-offcanvas";
  const title = "Offcanvas";
  const titleId = "example-offcanvas-title";

  let renderer: IRenderer;
  const placements = ["bottom", "end", "start", "top"];

  (Portal as jest.Mock).mockImplementation(MockPortal);

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    (Portal as jest.Mock).mockClear();
    renderer.clear();
  });

  it("should render an open offcanvas", async () => {
    const onClose = () => undefined;
    const component = (
      <OffcanvasExample
        id={id}
        title={title}
        body={body}
        isOpen={true}
        titleId={titleId}
        onClose={onClose}
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-wrapper")).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an offcanvas", async () => {
    const onClose = () => undefined;
    const component = (
      <OffcanvasExample
        id={id}
        title={title}
        body={body}
        isOpen={false}
        titleId={titleId}
        onClose={onClose}
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should close an offcanvas when close button is pressed", async () => {
    const onClose = jest.fn();
    const user = userEvent.setup();

    const component = (
      <OffcanvasExample
        id={id}
        title={title}
        body={body}
        isOpen={true}
        titleId={titleId}
        onClose={onClose}
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-wrapper")).toBeVisible();

    const closeBtn = screen.queryByTestId("offcanvas-close-button");
    expect(closeBtn).toBeInTheDocument();
    expect(closeBtn).toBeVisible();

    await user.click(closeBtn!);
    expect(onClose).toHaveBeenCalled();
    expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
  });

  it("should render an offcanvas with a backdrop", async () => {
    const onClose = () => undefined;
    const component = (
      <OffcanvasExample
        id={id}
        title={title}
        body={body}
        isOpen={false}
        titleId={titleId}
        onClose={onClose}
        showBackdrop
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
    expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open offcanvas with a backdrop", async () => {
    const onClose = () => undefined;
    const component = (
      <OffcanvasExample
        id={id}
        title={title}
        body={body}
        isOpen={true}
        titleId={titleId}
        onClose={onClose}
        showBackdrop
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-wrapper")).toBeVisible();
    expect(screen.queryByTestId("offcanvas-backdrop")).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(placements)(
    "should render an offcanvas at placement %s",
    async (placement) => {
      const onClose = () => undefined;
      const component = (
        <OffcanvasExample
          id={id}
          title={title}
          placement={placement as OffcanvasPlacement}
          body={body}
          isOpen={false}
          titleId={titleId}
          onClose={onClose}
          minBreakpoint={undefined}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(
        screen.queryByTestId("offcanvas-backdrop"),
      ).not.toBeInTheDocument();

      expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(placements)(
    "should render an offcanvas with a backdrop at placement %s",
    async (placement) => {
      const onClose = () => undefined;
      const component = (
        <OffcanvasExample
          id={id}
          title={title}
          placement={placement as OffcanvasPlacement}
          body={body}
          isOpen={false}
          titleId={titleId}
          onClose={onClose}
          showBackdrop
          minBreakpoint={undefined}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

      expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
      expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render an offcanvas with a static backdrop", async () => {
    const onClose = () => undefined;
    const component = (
      <OffcanvasExample
        blocking
        id={id}
        title={title}
        body={body}
        isOpen={false}
        titleId={titleId}
        onClose={onClose}
        showBackdrop
        minBreakpoint={undefined}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
    expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(placements)(
    "should render an offcanvas with a static backdrop at placement %s",
    async (placement) => {
      const onClose = () => undefined;
      const component = (
        <OffcanvasExample
          blocking
          id={id}
          title={title}
          body={body}
          placement={placement as OffcanvasPlacement}
          isOpen={false}
          titleId={titleId}
          onClose={onClose}
          showBackdrop
          minBreakpoint={undefined}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

      expect(screen.queryByTestId("offcanvas-wrapper")).not.toBeVisible();
      expect(screen.queryByTestId("offcanvas-backdrop")).not.toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.todo("should render an offcanvas for breakpoint md and above");
});
