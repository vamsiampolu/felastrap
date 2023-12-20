import { IRenderer } from "fela";
import { FloatingTextField } from "./FloatingTextField";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { FloatingTextInput } from "./FloatingTextInput";
import { render, screen } from "@testing-library/react";

describe("components/Form/TextField/FloatingTextField", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });
  /*
  disabled = false,
  readOnly = false,
  plainText = false,
  */

  it("should render a floating text field with an input", async () => {
    const component = (
      <FloatingTextField id="foobar">
        <FloatingTextInput id="foobar-input" />
      </FloatingTextField>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-field")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-field")).toHaveClass(
      "form-floating",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled floating text field with an input", async () => {
    const component = (
      <FloatingTextField disabled id="foobar">
        <FloatingTextInput id="foobar-input" />
      </FloatingTextField>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-field")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-field")).toHaveClass(
      "form-floating",
    );

    expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a readonly plaintext floating text field", async () => {
    const component = (
      <FloatingTextField readOnly plainText id="foobar">
        <FloatingTextInput id="foobar-input" />
      </FloatingTextField>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-field")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-field")).toHaveClass(
      "form-floating",
    );

    expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-input")).toHaveAttribute(
      "readonly",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
