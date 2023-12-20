import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import { ChangeEvent, useState } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { Size } from "../../../common";
import { TextInputType } from "../../TextField/TextInput";
import {
  FloatingTextContext,
  FloatingTextContextValue,
} from "./FloatingTextContext";
import { FloatingTextInput, FloatingTextInputProps } from "./FloatingTextInput";

const ControlledInput = ({
  value: initialValue,
  onChange,
}: FloatingTextInputProps) => {
  const contextValue: FloatingTextContextValue = {
    group: false,
    autoFilled: false,
    disabled: false,
    focused: false,
    placeholderShown: false,
    plainText: false,
    readOnly: false,
    size: "medium",
  };

  const [value, setValue] = useState(initialValue);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <FloatingTextContext.Provider value={contextValue}>
      <FloatingTextInput value={value} onChange={handleChange} />
    </FloatingTextContext.Provider>
  );
};

describe("components/Form/TextField/FloatingTextInput", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating text input", async () => {
    const component = <FloatingTextInput />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-input")?.tagName).toBe("INPUT");
    expect(screen.queryByTestId("floating-text-input")).toHaveAttribute(
      "type",
      "text",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["tel", "email"])(
    "should display a floating text input of type %s",
    async (inputType) => {
      const component = <FloatingTextInput type={inputType as TextInputType} />;
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("floating-text-input")?.tagName).toBe(
        "INPUT",
      );
      expect(screen.queryByTestId("floating-text-input")).toHaveAttribute(
        "type",
        inputType,
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should display a floating text input of size %s",
    async (size) => {
      const component = <FloatingTextInput size={size as Size} />;
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("floating-text-input")?.tagName).toBe(
        "INPUT",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should display a group floating text input of size %s",
    async (size) => {
      const value: FloatingTextContextValue = {
        group: true,
        autoFilled: false,
        disabled: false,
        focused: false,
        placeholderShown: true,
        plainText: false,
        readOnly: false,
        size: size as Size,
      };

      const component = (
        <FloatingTextContext.Provider value={value}>
          <FloatingTextInput size={size as Size} />
        </FloatingTextContext.Provider>
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("floating-text-input")?.tagName).toBe(
        "INPUT",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should display a readonly plaintext floating input of size %s",
    async (size) => {
      const value: FloatingTextContextValue = {
        group: false,
        autoFilled: false,
        disabled: false,
        focused: false,
        placeholderShown: false,
        plainText: true,
        readOnly: true,
        size: size as Size,
      };

      const component = (
        <FloatingTextContext.Provider value={value}>
          <FloatingTextInput size={size as Size} />
        </FloatingTextContext.Provider>
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
      expect(screen.queryByTestId("floating-text-input")?.tagName).toBe(
        "INPUT",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a disabled floating text input", async () => {
    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: true,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput />
      </FloatingTextContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-text-input")).toBeDisabled();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should hide the placeholder when input is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
      setFocused,
      setPlaceholderShown,
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    input!.focus();
    expect(setFocused).toHaveBeenCalledWith(true);
    expect(setPlaceholderShown).toHaveBeenCalledWith(false);
  });

  it("should not hide the placeholder when disabled input is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: true,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
      setFocused,
      setPlaceholderShown,
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    input!.focus();
    expect(setFocused).not.toHaveBeenCalled();
    expect(setPlaceholderShown).not.toHaveBeenCalled();
  });

  it("should not hide the placeholder when a readonly input is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: true,
      readOnly: true,
      size: "medium",
      setFocused,
      setPlaceholderShown,
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    input!.focus();
    expect(setFocused).not.toHaveBeenCalled();
    expect(setPlaceholderShown).not.toHaveBeenCalled();
  });

  it("should show the placeholder when an empty input is blurred", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
      setFocused,
      setPlaceholderShown,
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput defaultValue="" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    input!.focus();
    input!.blur();

    expect(setFocused).toHaveBeenLastCalledWith(false);
    expect(setPlaceholderShown).toHaveBeenLastCalledWith(true);
  });

  it("should not show the placeholder when an input with value is blurred", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
      setFocused,
      setPlaceholderShown,
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput defaultValue="" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    input!.focus();

    const event = {
      target: {
        value: "Clouds",
      },
    } as ChangeEvent<HTMLInputElement>;

    fireEvent.input(input!, event);
    expect(input).toHaveValue("Clouds");

    input!.blur();

    expect(setFocused).toHaveBeenLastCalledWith(false);
    expect(setFocused).toHaveBeenCalledTimes(2);

    expect(setPlaceholderShown).toHaveBeenCalledTimes(1);
    expect(setPlaceholderShown).toHaveBeenLastCalledWith(false);
  });

  it("should update an uncontrolled input", async () => {
    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput defaultValue="" />
      </FloatingTextContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    const event = {
      target: {
        value: "Clouds",
      },
    } as ChangeEvent<HTMLInputElement>;

    fireEvent.input(input!, event);
    expect(input).toHaveValue("Clouds");
  });

  it("should invoke onChange when an uncontrolled input is updated", async () => {
    const onChange = jest.fn();
    const value: FloatingTextContextValue = {
      group: false,
      autoFilled: false,
      disabled: false,
      focused: false,
      placeholderShown: false,
      plainText: false,
      readOnly: false,
      size: "medium",
    };

    const component = (
      <FloatingTextContext.Provider value={value}>
        <FloatingTextInput defaultValue="" onChange={onChange} />
      </FloatingTextContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    const event = {
      target: {
        value: "Clouds",
      },
    } as ChangeEvent<HTMLInputElement>;

    fireEvent.input(input!, event);
    expect(input).toHaveValue("Clouds");
    expect(onChange).toHaveBeenCalled();
  });

  it("should invoke onChange when an controlled input is updated", async () => {
    const onChange = jest.fn();

    const component = <ControlledInput value="" onChange={onChange} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const input = screen.queryByTestId("floating-text-input");
    expect(input).toBeInTheDocument();

    const event = {
      target: {
        value: "Clouds",
      },
    } as ChangeEvent<HTMLInputElement>;

    fireEvent.change(input!, event);

    expect(input).toHaveValue("Clouds");
    expect(onChange).toHaveBeenCalled();
  });
});
