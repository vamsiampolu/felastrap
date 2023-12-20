import { IRenderer } from "fela";
import { FloatingSelectLabel } from "./Label";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Floating/Select/Label", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating select label", async () => {
    const component = (
      <FloatingSelectLabel htmlFor="foobar">
        Floating Select Label
      </FloatingSelectLabel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveTextContent(
      "Floating Select Label",
    );

    expect(screen.queryByTestId("form-label")).toHaveClass(
      "floating-select-label",
    );
    expect(screen.queryByTestId("form-label")).toHaveAttribute("for", "foobar");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a disabled floating select label", async () => {
    const component = (
      <FloatingSelectLabel disabled htmlFor="foobar">
        Floating Select Label
      </FloatingSelectLabel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.queryByTestId("form-label")).toHaveTextContent(
      "Floating Select Label",
    );

    expect(screen.queryByTestId("form-label")).toHaveClass(
      "floating-select-label",
    );
    expect(screen.queryByTestId("form-label")).toHaveAttribute("for", "foobar");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
