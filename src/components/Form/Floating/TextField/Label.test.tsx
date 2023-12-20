import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import {
  FloatingTextContext,
  FloatingTextContextValue,
} from "./FloatingTextContext";
import { FloatingLabel } from "./Label";

describe("components/Form/Floating/TextField/Label", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating input label", async () => {
    const component = <FloatingLabel label="Floating Label" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveTextContent(
      "Floating Label",
    );
    expect(screen.queryByTestId("floating-label")).toHaveClass(
      "floating-label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a disabled floating input label", async () => {
    const value = {
      autoFilled: false,
      disabled: true,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
    } as FloatingTextContextValue;

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingLabel htmlFor="foobar" label="Floating Label" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );

    expect(screen.queryByTestId("floating-label")).toHaveClass(
      "floating-label",
    );
    expect(screen.queryByTestId("floating-label")).toHaveTextContent(
      "Floating Label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a plaintext readOnly floating input label", async () => {
    const value = {
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: true,
      readOnly: true,
    } as FloatingTextContextValue;

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingLabel htmlFor="foobar" label="Floating Label" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );

    expect(screen.queryByTestId("floating-label")).toHaveClass(
      "floating-label",
    );
    expect(screen.queryByTestId("floating-label")).toHaveTextContent(
      "Floating Label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display the label for autofilled floating input", async () => {
    const value = {
      autoFilled: true,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
    } as FloatingTextContextValue;

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingLabel htmlFor="foobar" label="Floating Label" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should show the label for a focused floating input", async () => {
    const value = {
      autoFilled: false,
      disabled: false,
      focused: true,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
    } as FloatingTextContextValue;

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingLabel htmlFor="foobar" label="Floating Label" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should show a label when placeholder is visible for a floating input", async () => {
    const value = {
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: true,
      plainText: false,
      readOnly: false,
    } as FloatingTextContextValue;

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingLabel htmlFor="foobar" label="Floating Label" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
