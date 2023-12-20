import { IRenderer } from "fela";
import { TextareaField } from "./TextareaField";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../../common";

describe("components/Form/TextareaField/TextareaField", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a textarea field", async () => {
    const component = <TextareaField id="foobar" label="Comments" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.getByTestId("textarea-field")).toHaveClass("textarea-field");

    expect(screen.getByTestId("form-textarea")).toHaveAttribute("id", "foobar");
    expect(screen.getByTestId("form-label")).toHaveAttribute("for", "foobar");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a readonly textarea", async () => {
    const component = <TextareaField readOnly id="foobar" label="Comments" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.queryByTestId("form-textarea")).toHaveAttribute("readonly");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a textarea with a value", async () => {
    const component = (
      <TextareaField id="foobar" label="Comments" value="Blah Blah" />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.queryByTestId("form-textarea")).toHaveValue("Blah Blah");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a textarea field with a placeholder", async () => {
    const component = (
      <TextareaField id="foobar" label="Comments" placeholder="Add comments" />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.getByTestId("textarea-field")).toHaveClass("textarea-field");

    expect(screen.getByTestId("form-textarea")).toHaveAttribute("id", "foobar");
    expect(screen.getByTestId("form-label")).toHaveAttribute("for", "foobar");
    expect(screen.getByTestId("form-textarea")).toHaveAttribute(
      "placeholder",
      "Add comments",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a textarea field with text below the control", async () => {
    const component = (
      <TextareaField
        id="foobar"
        label="Comments"
        placeholder="Add comments"
        text="Read content guidelines"
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.getByTestId("form-text")).toBeInTheDocument();
    expect(screen.getByTestId("form-text")).toHaveTextContent(
      "Read content guidelines",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a textarea field of size %s",
    async (size) => {
      const component = (
        <TextareaField id="foobar" label="Comments" size={size as Size} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
      expect(screen.getByTestId("textarea-field")).toHaveClass(
        "textarea-field",
      );

      expect(screen.getByTestId("form-textarea")).toHaveAttribute(
        "id",
        "foobar",
      );
      expect(screen.getByTestId("form-label")).toHaveAttribute("for", "foobar");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a textarea with a value", async () => {
    const component = (
      <TextareaField id="foobar" label="Comments" value="Blah Blah" />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
    expect(screen.queryByTestId("form-textarea")).toHaveValue("Blah Blah");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a readonly plaintext textarea of size %s",
    async (size) => {
      const component = (
        <TextareaField
          readOnly
          plainText
          id="foobar"
          label="Comments"
          value="Blah Blah"
          size={size as Size}
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("textarea-field")).toBeInTheDocument();
      expect(screen.getByTestId("form-textarea")).toHaveAttribute("readonly");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
