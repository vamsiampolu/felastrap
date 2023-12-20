import { render, screen } from "@testing-library/react";
import { CSSProperties, useState } from "react";

import { type IRenderer } from "fela";
import type { Variant } from "../common";

import { userEvent } from "@testing-library/user-event";
import { Portal, PortalProps } from "../Portal";
import { Wrapper } from "../../test-helpers/Wrapper";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { HeaderAlert } from ".";
import { Button } from "../Button";

const AlertToggleComponent = ({
  renderer,
  isOpen: init = false,
  onDismiss = () => undefined,
  onToggle = () => undefined,
}: {
  renderer: IRenderer;
  isOpen?: boolean;
  onDismiss?: () => void;
  onToggle?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(init);
  const toggleAlert = () => {
    onToggle();
    setIsOpen((current) => !current);
  };

  const closeAlert = () => {
    onDismiss();
    setIsOpen(false);
  };
  return (
    <Wrapper renderer={renderer}>
      <HeaderAlert isOpen={isOpen} dismissable onDismiss={closeAlert}>
        The first principle is that you must not fool yourself and you are the
        easiest person to fool.
      </HeaderAlert>
      <Button data-testid="alert-toggle-btn" onClick={toggleAlert}>
        {isOpen ? "Close Alert" : "Open Alert"}
      </Button>
    </Wrapper>
  );
};

const variants = [
  "default",
  "danger",
  "info",
  "primary",
  "secondary",
  "success",
  "warning",
];

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

jest.mock("../Portal");
describe("components/Alert/HeaderAlert", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    (Portal as jest.Mock).mockImplementation(MockPortal);
  });

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    (Portal as jest.Mock).mockClear();
    renderer.clear();
  });

  it("should be null when closed", () => {
    expect(
      HeaderAlert({
        isOpen: false,
        children: "Foobar",
      }),
    ).toBeNull();
  });

  it("should show a sticky alert when open", async () => {
    const component = (
      <HeaderAlert isOpen>
        Unforeseen surprises are the rule in science, not the exception.
        Remember: Stuff happens.
      </HeaderAlert>
    );
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should show a non dismissable header alert", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <HeaderAlert isOpen>
          However difficult life may seem, there is always something you can do
          and succeed at.
        </HeaderAlert>
      </Wrapper>
    );
    render(component);
    expect(screen.getByTestId("header-alert")).toBeInTheDocument();
    expect(screen.queryByTestId("alert-close-btn")).not.toBeInTheDocument();
  });

  it("should show a dismissable header alert", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <HeaderAlert isOpen dismissable>
          However difficult life may seem, there is always something you can do
          and succeed at.
        </HeaderAlert>
      </Wrapper>
    );
    render(component);
    expect(screen.getByTestId("alert-close-btn")).toBeInTheDocument();
  });

  it("should dismiss an alert on close button click", async () => {
    const onDismiss = jest.fn();
    const component = (
      <Wrapper renderer={renderer}>
        <HeaderAlert isOpen dismissable onDismiss={onDismiss}>
          However difficult life may seem, there is always something you can do
          and succeed at.
        </HeaderAlert>
      </Wrapper>
    );

    render(component);
    const closeBtn = screen.queryByTestId("alert-close-btn");

    const user = userEvent.setup();
    await user.click(closeBtn!);

    expect(onDismiss).toHaveBeenCalled();
  });

  it("should toggle an alert programmatically", async () => {
    const onToggle = jest.fn();
    const onDismiss = jest.fn();

    const component = (
      <AlertToggleComponent
        renderer={renderer}
        isOpen
        onDismiss={onDismiss}
        onToggle={onToggle}
      />
    );

    render(component);
    expect(screen.getByTestId("header-alert")).toBeInTheDocument();

    const toggleBtn = screen.queryByTestId("alert-toggle-btn");
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveTextContent("Close Alert");

    const user = userEvent.setup();
    await user.click(toggleBtn!);

    expect(onToggle).toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();

    expect(screen.queryByTestId("header-alert")).not.toBeInTheDocument();
    expect(toggleBtn).toHaveTextContent("Open Alert");
  });

  it.each(variants)(
    "should show a non dismissable alert of variant %s",
    async (variant) => {
      const component = (
        <HeaderAlert isOpen variant={variant as Variant}>
          T{"-"}Rexes in the mirror may be closer than they appear{"."}
        </HeaderAlert>
      );

      const snapshot = await createSnapshot({
        component,
        renderer,
        theme: {},
      });

      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should show a dismissable alert of variant %s",
    async (variant) => {
      const component = (
        <HeaderAlert isOpen dismissable variant={variant as Variant}>
          T{"-"}Rexes in the mirror may be closer than they appear{"."}
        </HeaderAlert>
      );

      const snapshot = await createSnapshot({
        component,
        renderer,
        theme: {},
      });

      expect(snapshot).toMatchSnapshot();
    },
  );
});
