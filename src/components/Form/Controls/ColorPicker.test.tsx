import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { ColorPicker, ColorPickerProps } from "./ColorPicker";
import { Label } from "./Label";
import { ChangeEvent, useState } from "react";
import { Size } from "../../common";

const ControlledColorPicker = ({
  onChange,
  id,
  title,
  value: initialValue,
}: ColorPickerProps) => {
  const [value, setValue] = useState(initialValue ?? "#000");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <>
      <Label htmlFor={id ?? "color"}>Pick Color</Label>
      <ColorPicker
        value={value}
        onChange={handleChange}
        id={id ?? "color"}
        title={title}
      />
    </>
  );
};

describe("components/Form/Controls/ColorPicker", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a color picker", async () => {
    const component = <ColorPicker id="color-picker" defaultValue="#000" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("color-picker")).toBeInTheDocument();
    expect(screen.queryByTestId("color-picker")).toHaveClass(
      "form-control-color",
    );

    expect(screen.getByTestId("color-picker")).toHaveAttribute(
      "id",
      "color-picker",
    );
    expect(screen.getByTestId("color-picker")).toHaveAttribute("type", "color");

    expect(screen.getByTestId("color-picker")?.tagName).toEqual("INPUT");

    const colorPicker = screen.queryByTestId("color-picker");
    expect((colorPicker as HTMLInputElement).value).toEqual("#000000");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should update the value of an uncontrolled color picker", async () => {
    const component = <ColorPicker id="color-picker" defaultValue="#000" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const colorPicker = screen.queryByTestId("color-picker");
    const event = {
      target: {
        value: "#333333",
      },
    };

    fireEvent.change(colorPicker!, event);

    expect((colorPicker as HTMLInputElement).value).toEqual("#333333");
  });

  it("should invoke onChange with a controlled component", async () => {
    const onChange = jest.fn();
    const component = (
      <ControlledColorPicker
        id="color-picker"
        value="#000"
        title="Pick Color"
        onChange={onChange}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const event = { target: { value: "#333333" } };

    expect(screen.getByTestId("color-picker")).toBeInTheDocument();
    const colorPicker = screen.queryByTestId("color-picker");

    fireEvent.input(colorPicker!, event);
    expect(onChange).toHaveBeenCalled();

    const [changeEvent] = onChange.mock.calls[0];
    expect(changeEvent.target.value).toEqual("#333333");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a color picker with title",
    async (size) => {
      const component = (
        <ColorPicker
          size={size as Size}
          id="color-picker"
          title="Pick Color"
          defaultValue="#000"
        />
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
