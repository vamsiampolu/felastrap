import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Size } from "../../common";
import { TextInput, TextInputProps } from "./TextInput";
import { ChangeEvent, useState } from "react";

describe("components/Form/TextField/TextInput", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a text input", async () => {
    const component = <TextInput />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")?.tagName).toBe("INPUT");

    expect(screen.getByTestId("text-input")).toHaveClass(
      "form-control text-field",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a text input with a placeholder", async () => {
    const component = <TextInput placeholder="Place Holder" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")?.tagName).toBe("INPUT");

    expect(screen.getByTestId("text-input")).toHaveClass(
      "form-control text-field",
    );
    expect(screen.getByTestId("text-input")).toHaveAttribute(
      "placeholder",
      "Place Holder",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a text input of size %s",
    async (size) => {
      const component = <TextInput size={size as Size} id="foobar" />;
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("text-input")).toHaveAttribute(
        "id",
        "foobar",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should display a readonly input", async () => {
    const component = <TextInput readOnly id="foobar" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")).toHaveAttribute("readonly");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a plaintext readonly input of size %s",
    async (size) => {
      const component = (
        <TextInput readOnly id="foobar" size={size as Size} plainText />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("text-input")).toHaveAttribute("readonly");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should update an uncontrolled text input", async () => {
    const onChange = jest.fn();
    const component = <TextInput onChange={onChange} defaultValue="" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")).toHaveValue("");

    const input = screen.queryByTestId("text-input");
    fireEvent.input(input!, { target: { value: "Foobar" } });

    expect(input).toHaveValue("Foobar");
    expect(onChange).toHaveBeenCalled();
  });

  it("should update a controlled text input", async () => {
    const onChange = jest.fn();
    const ControlledInput = ({
      value: initialValue,
      onChange,
    }: Pick<TextInputProps, "value" | "onChange">) => {
      const [value, setValue] = useState(initialValue ?? "");
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);

        if (onChange) {
          onChange(e);
        }
      };

      return <TextInput value={value} onChange={handleChange} />;
    };

    const component = <ControlledInput value="Ch" onChange={onChange} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")).toHaveValue("Ch");

    const input = screen.queryByTestId("text-input");
    fireEvent.input(input!, { target: { value: "Charmed" } });

    expect(input).toHaveValue("Charmed");
    expect(onChange).toHaveBeenCalled();
  });
});
