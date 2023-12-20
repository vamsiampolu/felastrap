import { IRenderer } from "fela";
import { RadioInput } from "./RadioInput";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Form/RadioButtons/RadioInput", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should correctly render a radio input", async () => {
    const component = <RadioInput />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("radio-input")).toBeInTheDocument();
    expect(screen.queryByTestId("radio-input")).toHaveClass("form-check-input");

    expect(screen.queryByTestId("radio-input")).not.toBeChecked();
    expect(screen.queryByTestId("radio-input")).toHaveAttribute(
      "type",
      "radio",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a reverse radio input", async () => {
    const component = <RadioInput reverse />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a checked radio input", async () => {
    const component = <RadioInput id="foobar" checked />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("radio-input")).toBeInTheDocument();
    expect(screen.queryByTestId("radio-input")).toHaveAttribute("id", "foobar");
    expect(screen.queryByTestId("radio-input")).toBeChecked();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled radio input", async () => {
    const component = <RadioInput id="foobar" disabled />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("radio-input")).toBeInTheDocument();
    expect(screen.queryByTestId("radio-input")).toHaveAttribute("id", "foobar");
    expect(screen.queryByTestId("radio-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onChange when radio input state changes", async () => {
    const onChange = jest.fn();
    const component = <RadioInput id="foobar" onChange={onChange} />;
    const user = userEvent.setup();

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("radio-input")).toBeInTheDocument();

    expect(screen.queryByTestId("radio-input")).not.toBeChecked();
    const radio = screen.queryByTestId("radio-input");

    await user.click(radio!);

    expect(screen.queryByTestId("radio-input")).toBeChecked();
    expect(onChange).toHaveBeenCalled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
