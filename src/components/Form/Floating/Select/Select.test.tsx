import { IRenderer } from "fela";
import { FloatingSelect, FloatingSelectProps } from "./Select";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ChangeEvent, useState } from "react";

describe("components/Form/Floating/FloatingSelect", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating select", async () => {
    const component = (
      <FloatingSelect
        placeholder="Placeholder"
        options={[
          {
            disabled: false,
            value: "Album",
            label: "Album",
          },
          {
            disabled: false,
            value: "Kaleidescope",
            label: "Kaleidescope",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-floating-select")).toBeInTheDocument();
    expect(screen.queryByTestId("form-floating-select")).toHaveClass(
      "form-floating",
    );

    expect(screen.getByTestId("floating-select")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-select")).toHaveClass(
      "floating-select",
    );

    expect(
      screen.getByTestId("floating-select-option-placeholder"),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId("floating-select-option-placeholder"),
    ).toHaveTextContent("Placeholder");

    expect(screen.getAllByTestId("floating-select-option")).toHaveLength(2);
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a floating select with a label", async () => {
    const component = (
      <FloatingSelect
        id="floating"
        label="Floating Select"
        placeholder="Placeholder"
        options={[
          {
            disabled: false,
            value: "Album",
            label: "Album",
          },
          {
            disabled: false,
            value: "Kaleidescope",
            label: "Kaleidescope",
          },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-floating-select")).toBeInTheDocument();
    expect(screen.getByTestId("floating-select")).toBeInTheDocument();

    expect(screen.queryByTestId("floating-select")).toHaveAttribute(
      "id",
      "floating",
    );
    expect(screen.getByTestId("form-label")).toBeInTheDocument();

    expect(screen.getByTestId("form-label")).toHaveTextContent(
      "Floating Select",
    );
    expect(screen.queryByTestId("form-label")).toHaveAttribute(
      "for",
      "floating",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a disabled floating select", async () => {
    const component = (
      <FloatingSelect
        disabled
        id="floating"
        label="Floating Select"
        placeholder="Placeholder"
        options={[
          {
            disabled: false,
            value: "Album",
            label: "Album",
          },
          {
            disabled: false,
            value: "Kaleidescope",
            label: "Kaleidescope",
          },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-select")).toBeInTheDocument();
    expect(screen.getByTestId("floating-select")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display an uncontrolled select with a value", async () => {
    const component = (
      <FloatingSelect
        defaultValue="Album"
        id="floating"
        label="Floating Select"
        placeholder="Placeholder"
        options={[
          {
            disabled: false,
            value: "Album",
            label: "Album",
          },
          {
            disabled: false,
            value: "Kaleidescope",
            label: "Kaleidescope",
          },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-select")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-select")).toHaveValue("Album");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onChange when uncontrolled select value is updated", async () => {
    const onChange = jest.fn();
    const component = (
      <FloatingSelect
        onChange={onChange}
        defaultValue="Kaleidescope"
        id="floating"
        label="Floating Select"
        placeholder="Placeholder"
        options={[
          {
            disabled: false,
            value: "Album",
            label: "Album",
          },
          {
            disabled: false,
            value: "Kaleidescope",
            label: "Kaleidescope",
          },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-select")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-select")).toHaveValue("Kaleidescope");

    const user = userEvent.setup();
    const select = screen.queryByTestId("floating-select");

    const option = screen.getAllByTestId("floating-select-option")[0];
    await user.selectOptions(select!, option);

    expect(select).toHaveValue("Album");
    expect(onChange).toHaveBeenCalled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke onChange when a controlled select is updated", async () => {
    const ControlledSelect = ({
      value: initialValue,
      onChange,
    }: Pick<FloatingSelectProps, "value" | "onChange">) => {
      const [value, setValue] = useState(initialValue);
      const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      };

      return (
        <FloatingSelect
          id="foobar"
          label="Select One"
          value={value}
          onChange={handleChange}
          placeholder="Placeholder"
          options={[
            {
              disabled: false,
              value: "Album",
              label: "Album",
            },
            {
              disabled: false,
              value: "Kaleidescope",
              label: "Kaleidescope",
            },
          ]}
        />
      );
    };

    const onChange = jest.fn();

    const component = (
      <ControlledSelect value="Kaleidescope" onChange={onChange} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-select")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-select")).toHaveValue("Kaleidescope");

    const user = userEvent.setup();
    const select = screen.queryByTestId("floating-select");

    const option = screen.getAllByTestId("floating-select-option")[0];
    await user.selectOptions(select!, option);

    expect(select).toHaveValue("Album");
    expect(onChange).toHaveBeenCalled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
