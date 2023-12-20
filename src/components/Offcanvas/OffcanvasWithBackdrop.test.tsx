import { render, screen } from "@testing-library/react";
import {
  OffcanvasWithBackdrop,
  OffcanvasWithBackdropProps,
} from "./OffcanvasWithBackdrop";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { OffcanvasPlacement } from "./Wrapper";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

const OffcanvasWithState = ({
  isOpen: initialOpen = false,
  onClose: onCloseProp,
  ...props
}: OffcanvasWithBackdropProps) => {
  const [isOpen, setOpen] = useState(initialOpen);
  const close = () => setOpen(false);
  const onClose = () => {
    onCloseProp();
    close();
  };
  return <OffcanvasWithBackdrop isOpen={isOpen} onClose={onClose} {...props} />;
};

describe("components/Offcanvas/OffcanvasWithBackdrop", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a closed Offcanvas with a backdrop", async () => {
    const body = <p>Offcanvas with body</p>;

    const component = (
      <OffcanvasWithBackdrop
        title="Offcanvas"
        body={body}
        isOpen={false}
        titleId="offcanvas-backdrop-title"
        id="offcanvas-backdrop"
        onClose={() => undefined}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.getByTestId("offcanvas-body")).toHaveTextContent(
      "Offcanvas with body",
    );
    expect(screen.getByTestId("offcanvas-wrapper")).not.toBeVisible();

    expect(screen.getByTestId("offcanvas-backdrop")).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a closed Offcanvas with a static backdrop", async () => {
    const body = <p>Offcanvas with body</p>;

    const component = (
      <OffcanvasWithBackdrop
        blocking
        title="Offcanvas"
        body={body}
        isOpen={false}
        titleId="offcanvas-backdrop-title"
        id="offcanvas-backdrop"
        onClose={() => undefined}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

    expect(screen.getByTestId("offcanvas-body")).toHaveTextContent(
      "Offcanvas with body",
    );
    expect(screen.getByTestId("offcanvas-wrapper")).not.toBeVisible();
    expect(screen.getByTestId("offcanvas-backdrop")).not.toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["bottom", "end", "start", "top"])(
    "should render an Offcanvas with backdrop placed at %s",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;
      const onClose = () => undefined;

      const component = (
        <OffcanvasWithBackdrop
          title="Offcanvas"
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["bottom", "end", "start", "top"])(
    "should render an Offcanvas with a static backdrop placed at %s",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;
      const onClose = () => undefined;

      const component = (
        <OffcanvasWithBackdrop
          title="Offcanvas"
          blocking
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeInTheDocument();

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["bottom", "end", "start", "top"])(
    "should dismiss an Offcanvas placed at %s when Escape is pressed",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;

      const onClose = jest.fn();
      const user = userEvent.setup();

      const component = (
        <OffcanvasWithState
          title="Offcanvas"
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      await user.keyboard("[Escape]");

      expect(onClose).toHaveBeenCalled();
      expect(screen.getByTestId("offcanvas-body")).not.toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).not.toBeVisible();
    },
  );

  it.each(["bottom", "end", "start", "top"])(
    "should dismiss an Offcanvas placed at %s when user clicks outside",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;

      const onClose = jest.fn();
      const user = userEvent.setup();

      const component = (
        <OffcanvasWithState
          title="Offcanvas"
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      await user.click(document.body);

      expect(onClose).toHaveBeenCalled();
      expect(screen.getByTestId("offcanvas-body")).not.toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).not.toBeVisible();
    },
  );

  it.each(["bottom", "end", "start", "top"])(
    "should not dismiss an Offcanvas with a static backdrop placed at %s when Escape is pressed",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;

      const onClose = jest.fn();
      const user = userEvent.setup();

      const component = (
        <OffcanvasWithState
          blocking
          title="Offcanvas"
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      await user.keyboard("[Escape]");

      expect(onClose).not.toHaveBeenCalled();
    },
  );

  it.each(["bottom", "end", "start", "top"])(
    "should not dismiss an Offcanvas with a static backdrop placed at %s when user clicks outside",
    async (placement) => {
      const body = <p>Offcanvas with body</p>;

      const onClose = jest.fn();
      const user = userEvent.setup();

      const component = (
        <OffcanvasWithState
          blocking
          title="Offcanvas"
          body={body}
          isOpen
          titleId="offcanvas-backdrop-title"
          id="offcanvas-backdrop"
          onClose={onClose}
          placement={placement as OffcanvasPlacement}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("offcanvas-body")).toBeVisible();
      expect(screen.getByTestId("offcanvas-backdrop")).toBeVisible();

      await user.click(document.body);
      expect(onClose).not.toHaveBeenCalled();
    },
  );
});
