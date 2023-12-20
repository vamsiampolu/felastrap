import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import { ChangeEvent, useState } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";
import { Textarea, TextareaProps } from "./Textarea";

const ControlledTextarea = ({
  value: initialValue,
  onChange,
  ...props
}: TextareaProps) => {
  const [value, setValue] = useState(initialValue ?? "");
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return <Textarea value={value} onChange={handleChange} {...props} />;
};

describe("components/Form/TextareaField/Textarea", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a textarea", async () => {
    const component = <Textarea />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    expect(screen.getByTestId("form-textarea")).toHaveClass(
      "form-control form-control-medium",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a readonly textarea", async () => {
    const component = <Textarea readOnly />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    expect(screen.getByTestId("form-textarea")).toHaveAttribute("readonly");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a textarea with a placeholder", async () => {
    const component = <Textarea id="foobar" placeholder="Feedback here" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    expect(screen.getByTestId("form-textarea")).toHaveAttribute(
      "placeholder",
      "Feedback here",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a readonly plaintext textarea", async () => {
    const component = <Textarea readOnly plainText />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a textarea of size %s",
    async (size) => {
      const component = <Textarea id="foobar" size={size as Size} />;
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
      expect(screen.queryByTestId("form-textarea")).toHaveAttribute(
        "id",
        "foobar",
      );
      expect(screen.queryByTestId("form-textarea")?.tagName).toEqual(
        "TEXTAREA",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render a readonly plaintext textarea of size %s",
    async (size) => {
      const component = (
        <Textarea
          readOnly
          plainText
          id="foobar"
          size={size as Size}
          defaultValue="Text Area"
        />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
      expect(screen.queryByTestId("form-textarea")).toHaveValue("Text Area");
      expect(screen.queryByTestId("form-textarea")).toHaveAttribute("readonly");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should update an uncontrolled textarea", () => {
    const onChange = jest.fn();
    const event = {
      target: {
        value: "Foobar is fubar",
      },
    };

    const component = (
      <Textarea defaultValue="Hello, there" onChange={onChange} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    const textarea = screen.queryByTestId("form-textarea");

    expect(textarea).toHaveValue("Hello, there");
    fireEvent.change(textarea!, event);

    expect(textarea).toHaveValue("Foobar is fubar");
    expect(onChange).toHaveBeenCalled();
  });

  it("should update a controlled textarea", () => {
    const onChange = jest.fn();
    const event = {
      target: {
        value: "Foobar is fubar",
      },
    };

    const component = (
      <ControlledTextarea value="Hello, there" onChange={onChange} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-textarea")).toBeInTheDocument();
    const textarea = screen.queryByTestId("form-textarea");

    expect(textarea).toHaveValue("Hello, there");
    fireEvent.change(textarea!, event);

    expect(textarea).toHaveValue("Foobar is fubar");
    expect(onChange).toHaveBeenCalled();
  });
});
