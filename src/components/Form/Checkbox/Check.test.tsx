import { IRenderer } from "fela";
import { CheckboxInput } from "./Check";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import { CHECKBOX_STATES } from "./CheckboxStates";
import userEvent from "@testing-library/user-event";

describe("components/Form/Checkbox/Check", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should correctly render a default checkbox input", async () => {
    const component = <CheckboxInput />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(screen.queryByTestId("checkbox-input")?.tagName).toEqual("INPUT");

    expect(screen.queryByTestId("checkbox-input")).toHaveAttribute(
      "type",
      "checkbox",
    );
    expect(screen.queryByTestId("checkbox-input")).not.toBeChecked();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should correctly render a disabled checkbox input", async () => {
    const component = <CheckboxInput disabled />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(screen.queryByTestId("checkbox-input")?.tagName).toEqual("INPUT");

    expect(screen.queryByTestId("checkbox-input")).toHaveAttribute(
      "type",
      "checkbox",
    );
    expect(screen.queryByTestId("checkbox-input")).not.toBeChecked();
    expect(screen.queryByTestId("checkbox-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a checked checkbox input", async () => {
    const component = (
      <CheckboxInput id="form-check" value={CHECKBOX_STATES.Checked} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(screen.queryByTestId("checkbox-input")).toBeChecked();
    expect(screen.queryByTestId("checkbox-input")).toHaveAttribute(
      "id",
      "form-check",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an indeterminate checkbox input", async () => {
    const component = (
      <CheckboxInput
        id="form-check"
        value={CHECKBOX_STATES.Indeterminate}
        allowIndeterminate
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();
    expect(
      (screen.queryByTestId("checkbox-input") as HTMLInputElement)
        .indeterminate,
    ).toBe(true);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onChange when checkbox state changes", async () => {
    const onChange = jest.fn();
    const component = <CheckboxInput onChange={onChange} />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("checkbox-input")).toBeInTheDocument();

    const user = userEvent.setup();
    const checkbox = screen.queryByTestId("checkbox-input");

    await user.click(checkbox!);

    expect(screen.queryByTestId("checkbox-input")).toBeChecked();
    expect(onChange).toHaveBeenCalled();
  });
});
