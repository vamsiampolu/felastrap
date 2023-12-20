import { IRenderer } from "fela";
import { ToggleButton } from "./ToggleButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  createUserEventSnapshot,
  cssReboot,
} from "../../test-helpers";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Variant } from "../common";

describe("components/Button/ToggleButton", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  const variants = [
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  it("should render a Toggle Button with a checkbox and a label", async () => {
    const component = <ToggleButton id="toggle-button">Toggle</ToggleButton>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toggle-button-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-button-label")).toBeInTheDocument();

    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "type",
      "checkbox",
    );
    expect(screen.queryByTestId("toggle-button-input")).not.toBeChecked();

    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "id",
      "toggle-button",
    );
    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "autoComplete",
      "off",
    );

    expect(screen.queryByTestId("toggle-button-label")).toHaveAttribute(
      "for",
      "toggle-button",
    );
    expect(screen.queryByTestId("toggle-button-label")).toHaveTextContent(
      "Toggle",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Toggle Button with a disabled checkbox and a label", async () => {
    const component = (
      <ToggleButton id="toggle-button" disabled>
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("toggle-button-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-button-label")).toBeInTheDocument();

    expect(screen.getByTestId("toggle-button-input")).toBeDisabled();
    expect(screen.getByTestId("toggle-button-input")).toHaveAttribute(
      "aria-disabled",
      "true",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Toggle Button with a radio button and a label", async () => {
    const component = (
      <ToggleButton id="toggle-button" type="radio" name="ticketType">
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("toggle-button-input")).toBeInTheDocument();
    expect(screen.getByTestId("toggle-button-label")).toBeInTheDocument();

    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "type",
      "radio",
    );
    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "autoComplete",
      "off",
    );

    expect(screen.queryByTestId("toggle-button-input")).toHaveAttribute(
      "id",
      "toggle-button",
    );
    expect(screen.queryByTestId("toggle-button-input")).not.toBeChecked();

    expect(screen.queryByTestId("toggle-button-label")).toHaveAttribute(
      "for",
      "toggle-button",
    );
    expect(screen.queryByTestId("toggle-button-label")).toHaveTextContent(
      "Toggle",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a Toggle Button with a disabled radio button and a label", async () => {
    const component = (
      <ToggleButton id="toggle-button" type="radio" name="ticketType" disabled>
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.queryByTestId("toggle-button-input")).toBeDisabled();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a checked Toggle Button with a checkbox and a label", async () => {
    const component = (
      <ToggleButton id="toggle-button" checked>
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.queryByTestId("toggle-button-input")).toBeChecked();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a checked Toggle Button with a radio button and a label", async () => {
    const component = (
      <ToggleButton id="toggle-button" type="radio" checked>
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.queryByTestId("toggle-button-input")).toBeChecked();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onChange when checkbox toggle button is clicked", async () => {
    const onChange = jest.fn();
    const component = (
      <ToggleButton id="toggle-button" onChange={onChange} checked={false}>
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    const user = userEvent.setup();

    render(wrappedComponent);

    const label = await screen.findByTestId("toggle-button-label");

    await act(async () => {
      await user.click(label!);
    });

    expect(onChange).toHaveBeenCalled();
  });

  it("should invoke onChange when radio toggle button is clicked", async () => {
    const onChange = jest.fn();

    const component = (
      <ToggleButton
        type="radio"
        id="toggle-button"
        name="vegan"
        onChange={onChange}
      >
        Toggle
      </ToggleButton>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    const user = userEvent.setup();

    render(wrappedComponent);

    const label = await screen.findByTestId("toggle-button-label");

    await act(async () => {
      await user.click(label!);
    });
    expect(onChange).toHaveBeenCalled();
  });

  describe("styling", () => {
    it.each(variants)(
      "should render a Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton id="toggle-button" variant={variant as Variant}>
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a checked Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton id="toggle-button" checked variant={variant as Variant}>
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a focused Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton id="toggle-button" variant={variant as Variant}>
            Toggle
          </ToggleButton>
        );
        const snapshot = await createUserEventSnapshot({
          renderer,
          component,
          eventName: "focus",
          testId: "toggle-button-input",
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a disabled Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton
            id="toggle-button"
            disabled
            variant={variant as Variant}
          >
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a checked disabled Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton
            id="toggle-button"
            checked
            disabled
            variant={variant as Variant}
          >
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an outlined Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton id="toggle-button" outline variant={variant as Variant}>
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a focused outlined Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton id="toggle-button" outline variant={variant as Variant}>
            Toggle
          </ToggleButton>
        );
        const snapshot = await createUserEventSnapshot({
          renderer,
          component,
          eventName: "focus",
          testId: "toggle-button-input",
        });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render a checked outlined Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton
            id="toggle-button"
            checked
            outline
            variant={variant as Variant}
          >
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an outlined disabled Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton
            id="toggle-button"
            outline
            disabled
            variant={variant as Variant}
          >
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );

    it.each(variants)(
      "should render an outlined checked disabled Toggle Button with variant %s",
      async (variant) => {
        const component = (
          <ToggleButton
            id="toggle-button"
            outline
            checked
            disabled
            variant={variant as Variant}
          >
            Toggle
          </ToggleButton>
        );
        const snapshot = await createSnapshot({ renderer, component });
        expect(snapshot).toMatchSnapshot();
      },
    );
  });
});
