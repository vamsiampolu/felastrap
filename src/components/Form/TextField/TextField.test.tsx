import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

import {
  createRenderer,
  cssReboot,
  createSnapshot,
  Wrapper,
} from "../../../test-helpers";
import { IRenderer } from "fela";
import { Size } from "../../common";

describe("components/Form/TextField/TextField", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a text field", async () => {
    const component = <TextField id="foobar" label="Text Field Label" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("text-field")).toBeInTheDocument();

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.getByTestId("text-input")).toBeInTheDocument();

    expect(screen.queryByTestId("form-label")).toHaveAttribute("for", "foobar");
    expect(screen.queryByTestId("text-input")).toHaveAttribute("id", "foobar");

    expect(screen.queryByTestId("form-label")).toHaveTextContent(
      "Text Field Label",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a text field with placeholder and text", async () => {
    const component = (
      <TextField
        id="foobar"
        label="Text Field Label"
        placeholder="Placeholder"
        text="Form Text"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("text-field")).toBeInTheDocument();

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")).toHaveAttribute(
      "placeholder",
      "Placeholder",
    );

    expect(screen.getByTestId("form-text")).toBeInTheDocument();
    expect(screen.queryByTestId("form-text")).toHaveTextContent("Form Text");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a text field of size %s",
    async (size) => {
      const component = (
        <TextField
          id="foobar"
          label="Text Field Label"
          placeholder="Placeholder"
          text="Form Text"
          size={size as Size}
        />
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should display a floating text field", async () => {
    const component = (
      <TextField
        floating
        id="foobar"
        label="Text Field Label"
        placeholder="Placeholder"
        text="Form Text"
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-field")).toBeInTheDocument();
    expect(screen.getByTestId("floating-text-field")).toBeInTheDocument();

    expect(screen.getByTestId("floating-label")).toBeInTheDocument();
    expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();

    expect(screen.queryByTestId("floating-label")).toHaveTextContent(
      "Text Field Label",
    );

    expect(screen.queryByTestId("floating-label")).toHaveAttribute(
      "for",
      "foobar",
    );
    expect(screen.queryByTestId("floating-text-input")).toHaveAttribute(
      "id",
      "foobar",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a readOnly plainText text field", async () => {
    const component = (
      <TextField
        id="foobar"
        label="Text Field Label"
        placeholder="Placeholder"
        text="Form Text"
        readOnly
        plainText
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")).toHaveAttribute("readonly");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
