import { IRenderer } from "fela";
import { FloatingTextarea, FloatingTextareaProps } from "./FloatingTextarea";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { fireEvent, render, screen } from "@testing-library/react";
import { Size } from "../../../common";
import {
  FloatingTextContext,
  FloatingTextContextValue,
} from "./FloatingTextContext";
import { ChangeEvent, useState } from "react";

describe("components/Floating/TextField/FloatingTextarea", () => {
  let renderer: IRenderer;

  const defaultCtxValue: FloatingTextContextValue = {
    autoFilled: false,
    disabled: false,
    focused: false,
    placeholderShown: false,
    plainText: false,
    readOnly: false,
    group: false,
    size: "medium",
  };

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating text area", async () => {
    const component = <FloatingTextarea />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-textarea")?.tagName).toEqual(
      "TEXTAREA",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a floating text area with id and className", async () => {
    const component = (
      <FloatingTextarea id="float-id" className="float-class" />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-textarea")?.tagName).toEqual(
      "TEXTAREA",
    );

    expect(screen.queryByTestId("floating-textarea")).toHaveClass(
      "float-class",
    );
    expect(screen.queryByTestId("floating-textarea")).toHaveAttribute(
      "id",
      "float-id",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should display a floating text field with uncontrolled value", async () => {
    const component = <FloatingTextarea defaultValue="fickle" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();
    expect(screen.queryByTestId("floating-textarea")).toHaveValue("fickle");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should display a floating textarea of size %s",
    async (size) => {
      const component = (
        <FloatingTextarea defaultValue="fickle" size={size as Size} />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should display a textarea within a group of size %s",
    async (size) => {
      const ctxValue: FloatingTextContextValue = {
        ...defaultCtxValue,
        group: true,
        size: size as Size,
      };
      const component = (
        <FloatingTextContext.Provider value={ctxValue}>
          <FloatingTextarea defaultValue="fickle" size={size as Size} />
        </FloatingTextContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should display a readonly plaintext textarea of size %s",
    async (size) => {
      const ctxValue: FloatingTextContextValue = {
        ...defaultCtxValue,
        readOnly: true,
        plainText: true,
        size: size as Size,
      };
      const component = (
        <FloatingTextContext.Provider value={ctxValue}>
          <FloatingTextarea defaultValue="fickle" size={size as Size} />
        </FloatingTextContext.Provider>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should hide placeholder when floating textarea is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const ctxValue: FloatingTextContextValue = {
      ...defaultCtxValue,
      setPlaceholderShown,
      setFocused,
    };

    const component = (
      <FloatingTextContext.Provider value={ctxValue}>
        <FloatingTextarea id="fickle" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

    const textarea = screen.queryByTestId("floating-textarea");
    textarea!.focus();

    expect(setFocused).toHaveBeenCalledWith(true);
    expect(setPlaceholderShown).toHaveBeenCalledWith(false);
  });

  it("should not hide placeholder when a disabled floating textarea is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const ctxValue: FloatingTextContextValue = {
      ...defaultCtxValue,
      disabled: true,
      setPlaceholderShown,
      setFocused,
    };

    const component = (
      <FloatingTextContext.Provider value={ctxValue}>
        <FloatingTextarea id="fickle" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

    const textarea = screen.queryByTestId("floating-textarea");
    textarea!.focus();

    expect(setFocused).not.toHaveBeenCalled();
    expect(setPlaceholderShown).not.toHaveBeenCalled();
  });

  it("should not hide placeholder when a readonly plaintext textarea is focused", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const ctxValue: FloatingTextContextValue = {
      ...defaultCtxValue,
      plainText: true,
      readOnly: true,
      setPlaceholderShown,
      setFocused,
    };

    const component = (
      <FloatingTextContext.Provider value={ctxValue}>
        <FloatingTextarea id="fickle" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

    const textarea = screen.queryByTestId("floating-textarea");
    textarea!.focus();

    expect(setFocused).not.toHaveBeenCalled();
    expect(setPlaceholderShown).not.toHaveBeenCalled();
  });

  it("should show the placeholder when an empty textarea is blurred", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const ctxValue: FloatingTextContextValue = {
      ...defaultCtxValue,
      setPlaceholderShown,
      setFocused,
    };

    const component = (
      <FloatingTextContext.Provider value={ctxValue}>
        <FloatingTextarea id="fickle" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

    const textarea = screen.queryByTestId("floating-textarea");

    textarea!.focus();
    textarea!.blur();

    expect(setFocused).toHaveBeenCalledWith(false);
    expect(setPlaceholderShown).toHaveBeenCalledWith(true);
  });

  it("should not show the placeholder when a non empty textarea is blurred", async () => {
    const setFocused = jest.fn();
    const setPlaceholderShown = jest.fn();

    const ctxValue: FloatingTextContextValue = {
      ...defaultCtxValue,
      setPlaceholderShown,
      setFocused,
    };

    const component = (
      <FloatingTextContext.Provider value={ctxValue}>
        <FloatingTextarea id="fickle" />
      </FloatingTextContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();

    const textarea = screen.queryByTestId("floating-textarea");

    textarea!.focus();
    fireEvent.input(textarea!, {
      target: {
        value: "Folder",
      },
    });

    textarea!.blur();
    expect(setFocused).toHaveBeenCalledWith(false);

    expect(setPlaceholderShown).toHaveBeenCalledTimes(1);
    expect(setPlaceholderShown).not.toHaveBeenCalledWith(true);
  });

  it("should invoke onChange when an uncontrolled input is updated", async () => {
    const onChange = jest.fn();

    const component = (
      <FloatingTextarea
        id="fickle"
        defaultValue="foundry"
        onChange={onChange}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();
    const textarea = screen.queryByTestId("floating-textarea");

    fireEvent.input(textarea!, {
      target: {
        value: "Foundered",
      },
    });

    expect(textarea).toHaveValue("Foundered");
    expect(onChange).toHaveBeenCalled();
  });

  it("should invoke onChange when a controlled input is updated", async () => {
    const ControlledInput = ({
      value: initialValue,
      onChange,
    }: FloatingTextareaProps) => {
      const [value, setValue] = useState(initialValue);

      const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
        if (onChange) {
          onChange(e);
        }
      };

      return <FloatingTextarea value={value} onChange={handleChange} />;
    };

    const onChange = jest.fn();

    const component = <ControlledInput value="foundry" onChange={onChange} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("floating-textarea")).toBeInTheDocument();
    const textarea = screen.queryByTestId("floating-textarea");

    fireEvent.input(textarea!, {
      target: {
        value: "Foundered",
      },
    });

    expect(textarea).toHaveValue("Foundered");
    expect(onChange).toHaveBeenCalled();
  });
});
