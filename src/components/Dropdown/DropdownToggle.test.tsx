import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { DropdownToggle } from "./DropdownToggle";
import { DropdownDirection, NavVariant, Size, Variant } from "../common";

describe("components/Dropdown/DropdownToggle", () => {
  let getReferenceProps = () => ({});
  let renderer: IRenderer;

  const sizes = ["small", "medium", "large"];
  const navVariants = ["default", "vertical", "underline", "tabs", "pills"];
  const directions = ["up", "down", "end", "start", "centered"];

  const variants = [
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a dropdown toggle", async () => {
    const component = (
      <DropdownToggle
        label="Dropdown Toggle"
        direction="down"
        nav={false}
        navVariant="default"
        size="medium"
        split={false}
        variant="default"
        getReferenceProps={getReferenceProps}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle")?.tagName).toEqual("BUTTON");

    expect(screen.getByTestId("dropdown-toggle")).toHaveTextContent(
      "Dropdown Toggle",
    );

    expect(screen.getByTestId("dropdown-toggle")).toHaveClass(
      "dropdown-toggle",
    );
    expect(screen.getByTestId("dropdown-toggle")).toHaveAttribute(
      "tabIndex",
      "0",
    );

    expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a nav dropdown toggle", async () => {
    const component = (
      <DropdownToggle
        label="Dropdown Toggle"
        direction="down"
        nav={true}
        navVariant="default"
        size="medium"
        split={false}
        variant="default"
        getReferenceProps={getReferenceProps}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle")).toHaveTextContent(
      "Dropdown Toggle",
    );

    expect(screen.getByTestId("dropdown-toggle").tagName).toEqual("A");
    expect(screen.getByTestId("dropdown-toggle")).toHaveClass(
      "dropdown-toggle",
    );

    expect(screen.getByTestId("dropdown-toggle")).toHaveAttribute(
      "tabIndex",
      "0",
    );
    expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a split dropdown toggle", async () => {
    const component = (
      <DropdownToggle
        direction="down"
        getReferenceProps={getReferenceProps}
        label="Dropdown Toggle"
        nav={false}
        navVariant="default"
        size="medium"
        split
        variant="default"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(variants)(
    "should render a dropdown toggle of variant %s",
    async (variant) => {
      getReferenceProps = jest.fn();
      const component = (
        <DropdownToggle
          label="Dropdown Toggle"
          direction="down"
          nav={false}
          navVariant="default"
          size="medium"
          split={false}
          variant={variant as Variant}
          getReferenceProps={getReferenceProps}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
      expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();

      expect(getReferenceProps).toHaveBeenCalled();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();

      getReferenceProps = () => ({});
    },
  );

  it.each(sizes)("should render a dropdown toggle of size %s", async (size) => {
    const component = (
      <DropdownToggle
        label="Dropdown Toggle"
        direction="down"
        nav={false}
        navVariant="default"
        size={size as Size}
        split={false}
        variant="default"
        getReferenceProps={getReferenceProps}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(sizes)(
    "should render a split dropdown toggle of size %s",
    async (size) => {
      const component = (
        <DropdownToggle
          direction="down"
          getReferenceProps={getReferenceProps}
          label="Dropdown Toggle"
          nav={false}
          navVariant="default"
          size={size as Size}
          split
          variant="default"
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
      expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(directions)(
    "should render a dropdown toggle with direction %s",
    async (direction) => {
      const component = (
        <DropdownToggle
          label="Dropdown Toggle"
          direction={direction as DropdownDirection}
          nav={false}
          navVariant="default"
          size="medium"
          split={false}
          variant="default"
          getReferenceProps={getReferenceProps}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();

      expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(navVariants)("should render a nav variant %s", async (navVariant) => {
    const component = (
      <DropdownToggle
        label="Dropdown Toggle"
        direction="down"
        nav={true}
        navVariant={navVariant as NavVariant}
        size="medium"
        split={false}
        variant="default"
        getReferenceProps={getReferenceProps}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-toggle-caret")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
