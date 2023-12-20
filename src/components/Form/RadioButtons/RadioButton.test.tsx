import { IRenderer } from "fela";
import { RadioButton } from "./RadioButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("components/Form/RadioButtons/RadioButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a radio button control", async () => {
    const component = <RadioButton label="Radio Button" id="foobar" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-control-radio-button")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.getByTestId("radio-input")).toBeInTheDocument();

    expect(screen.queryByTestId("radio-input")).toHaveAttribute("id", "foobar");
    expect(screen.queryByTestId("form-label")).toHaveAttribute("for", "foobar");

    expect(screen.queryByTestId("form-label")).toHaveTextContent(
      "Radio Button",
    );
    expect(screen.queryByTestId("radio-input")).not.toBeChecked();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled radio button control", async () => {
    const component = <RadioButton disabled label="Radio Button" id="foobar" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.queryByTestId("radio-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a reverse radio button control", async () => {
    const component = <RadioButton reverse label="Radio Button" id="foobar" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an inline radio button control", async () => {
    const component = <RadioButton reverse label="Radio Button" id="foobar" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke the onChange prop when radio button is clicked", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    const component = (
      <RadioButton onChange={onChange} label="Radio Button" id="foobar" />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const radio = screen.queryByTestId("radio-input");

    await user.click(radio!);
    expect(onChange).toHaveBeenCalled();

    expect(radio).toBeChecked();
  });
});
