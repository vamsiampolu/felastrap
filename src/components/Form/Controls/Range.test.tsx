import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { Range, RangeProps } from "./Range";
import { ChangeEvent, useState } from "react";

const ControlledRange = ({ id, value: initialValue, onChange }: RangeProps) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return <Range id={id} value={value} onChange={handleChange} />;
};

describe("components/Form/Controls/Range", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an uncontrolled range component", async () => {
    const component = <Range id="range" defaultValue={1} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-range")).toBeInTheDocument();
    expect(screen.queryByTestId("form-range")).toHaveClass("form-range");

    expect(screen.queryByTestId("form-range")).toHaveAttribute("type", "range");
    expect(screen.queryByTestId("form-range")).toHaveAttribute("id", "range");

    expect(screen.queryByTestId("form-label")).not.toBeInTheDocument();
    expect(screen.queryByTestId("form-range")?.tagName).toEqual("INPUT");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an uncontrolled range with a label", async () => {
    const component = <Range id="range" defaultValue={1} label="Range Label" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toHaveTextContent("Range Label");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should update an uncontrolled range component", async () => {
    const component = <Range id="range" defaultValue={1} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-range")).toBeInTheDocument();
    expect(screen.getByTestId("form-range")).toHaveValue("1");

    const event = {
      target: {
        value: 2,
      },
    };

    const range = screen.queryByTestId("form-range");
    fireEvent.change(range!, event);

    expect((range as HTMLInputElement).value).toEqual("2");
  });

  it("should invoke onChange for an controlled range input", async () => {
    const onChange = jest.fn();
    const component = (
      <ControlledRange id="range" onChange={onChange} value={1} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-range")).toBeInTheDocument();
    expect(screen.getByTestId("form-range")).toHaveValue("1");

    const event = {
      target: {
        value: 2,
      },
    };

    const range = screen.queryByTestId("form-range");
    fireEvent.change(range!, event);

    expect(onChange).toHaveBeenCalled();
    const [changeEvent] = (onChange as jest.Mock).mock.calls[0];
    expect(changeEvent.target.value).toEqual("2");
  });
});
