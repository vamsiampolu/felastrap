import { IRenderer } from "fela";
import { Button } from ".";
import { Wrapper } from "../../test-helpers/Wrapper";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { render, screen } from "@testing-library/react";
import {
  createSnapshot,
  createUserEventSnapshot,
} from "../../test-helpers/createSnapshot";
import userEvent from "@testing-library/user-event";

describe("components/Button", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a button", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Button>Click Me</Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");

    expect(btn).toBeInTheDocument();
    expect(btn).toHaveTextContent("Click Me");
  });

  it("should render a disabled button", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Button disabled={true}>Click Me</Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");
    expect(btn).toBeDisabled();
  });

  it("should accept id and className props", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Button className="foobar" id="barter" href="/click-me">
          Click Me
        </Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");
    expect(btn.tagName).toEqual("BUTTON");
    expect(btn).toHaveClass("foobar");
    expect(btn).toHaveAttribute("id", "barter");
  });

  it("should create a button with a dynamic element", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Button as="a" href="/click-me">
          Click Me
        </Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");
    expect(btn.tagName).toEqual("A");
    expect(btn).toHaveAttribute("href", "/click-me");
  });

  it("should invoke the onClick prop when a button is clicked", async () => {
    const user = userEvent.setup();
    const onClick = jest
      .fn()
      .mockImplementation((e: Event) => e.preventDefault());
    const component = (
      <Wrapper renderer={renderer}>
        <Button onClick={onClick} href="/click-me">
          Click Me
        </Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");
    await user.click(btn);
    expect(onClick).toHaveBeenCalled();
  });

  it("should render a hovered button", async () => {
    const component = <Button>Click Me</Button>;

    const snapshot = await createUserEventSnapshot({
      eventName: "hover",
      component,
      testId: "button",
      renderer,
    });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active button", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Button active href="/click-me">
          Click Me
        </Button>
      </Wrapper>
    );

    render(component);
    const btn = screen.getByTestId("button");
    expect(btn).toHaveAttribute("active", "active");
  });

  describe("variants", () => {
    const variants = [
      "default",
      "danger",
      "info",
      "primary",
      "secondary",
      "success",
      "warning",
    ];

    it.each(variants)(
      "should render a button with a variant: %s",
      async (variant) => {
        const component = <Button variant={variant}>Click Me</Button>;

        const snapshot = await createSnapshot({
          renderer,
          component,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an active button with a variant: %s",
      async (variant) => {
        const component = (
          <Button active variant={variant}>
            Click Me
          </Button>
        );

        const snapshot = await createSnapshot({
          renderer,
          component,
          theme: {},
        });

        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an outlined button of variant %s",
      async (variant) => {
        const component = (
          <Button outline variant={variant}>
            Click Me
          </Button>
        );

        const snapshot = await createSnapshot({
          renderer,
          component,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a hovered button of variant %s",
      async (variant) => {
        const component = <Button variant={variant}>Click Me</Button>;

        const snapshot = await createUserEventSnapshot({
          eventName: "hover",
          component,
          testId: "button",
          renderer,
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a disabled button of variant %s",
      async (variant) => {
        const component = (
          <Button disabled variant={variant}>
            Click Me
          </Button>
        );

        const snapshot = await createSnapshot({
          renderer,
          component,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );
  });

  describe("size", () => {
    it.each(["small", "medium", "large"])(
      "should render a button of the size %s",
      async (size) => {
        const component = <Button size={size}>Click Me</Button>;

        const snapshot = await createSnapshot({
          renderer,
          component,
          theme: {},
        });
        expect(snapshot).toMatchSnapshot();
      },
    );
  });
});
