import { useState } from "react";
import { render, screen } from "@testing-library/react";

import type { IRenderer } from "fela";
import type { Variant } from "../common";

import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { userEvent } from "@testing-library/user-event";
import { Wrapper } from "../../test-helpers/Wrapper";
import { Alert } from ".";
import { Button } from "../Button";

const ParentComponent = ({
  renderer,
  isOpen: init = false,
  onDismiss = () => undefined,
}: {
  renderer: IRenderer;
  isOpen?: boolean;
  onDismiss?: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(init);
  const closeAlert = () => {
    setIsOpen(false);
    onDismiss();
  };
  return (
    <Wrapper renderer={renderer}>
      <Alert isOpen={isOpen} dismissable onDismiss={closeAlert}>
        The first principle is that you must not fool yourself and you are the
        easiest person to fool.
      </Alert>
    </Wrapper>
  );
};

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
      <Alert isOpen={isOpen} dismissable onDismiss={closeAlert}>
        The first principle is that you must not fool yourself and you are the
        easiest person to fool.
      </Alert>
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

describe("components/Alert/Alert", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should be null when closed", () => {
    const component = Alert({
      isOpen: false,
      children: "Megallen, use the force.",
    });
    expect(component).toBeNull();
  });

  it("should show the content when open", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Alert isOpen>
          T{"-"}Rexes in the mirror may be closer than they appear{"."}
        </Alert>
      </Wrapper>
    );
    render(component);

    const alert = await screen.findByTestId("alert");
    expect(alert).toHaveTextContent(
      "T-Rexes in the mirror may be closer than they appear.",
    );
  });

  it("should not have a close button by default", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Alert isOpen>
          T{"-"}Rexes in the mirror may be closer than they appear{"."}
        </Alert>
      </Wrapper>
    );
    render(component);

    expect(screen.queryByTestId("alert-close-btn")).not.toBeInTheDocument();
  });

  it("should have a close button when dismissable", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Alert isOpen dismissable>
          T{"-"}Rexes in the mirror may be closer than they appear{"."}
        </Alert>
      </Wrapper>
    );

    render(component);
    const closeBtn = screen.queryByTestId("alert-close-btn");
    expect(closeBtn).toBeInTheDocument();
  });

  it("should use state from a parent to dismiss/show the alert", async () => {
    const onDismiss = jest.fn();
    const user = userEvent.setup();

    const component = (
      <ParentComponent renderer={renderer} isOpen onDismiss={onDismiss} />
    );
    render(component);
    const closeBtn = screen.queryByTestId("alert-close-btn");

    await user.click(closeBtn!);
    expect(onDismiss).toHaveBeenCalled();
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });

  it("should programatically toggle an alert on button click", async () => {
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
    expect(screen.getByTestId("alert")).toBeInTheDocument();

    const toggleBtn = screen.queryByTestId("alert-toggle-btn");
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveTextContent("Close Alert");

    const user = userEvent.setup();
    await user.click(toggleBtn!);

    expect(onToggle).toHaveBeenCalled();
    expect(onDismiss).not.toHaveBeenCalled();

    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
    expect(toggleBtn).toHaveTextContent("Open Alert");
  });

  describe("styles", () => {
    it.each(variants)(
      "should show a non dismissable alert of variant %s",
      async (variant) => {
        const component = (
          <Alert isOpen variant={variant as Variant}>
            T{"-"}Rexes in the mirror may be closer than they appear{"."}
          </Alert>
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
          <Alert isOpen dismissable variant={variant as Variant}>
            T{"-"}Rexes in the mirror may be closer than they appear{"."}
          </Alert>
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
});
