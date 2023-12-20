import { useListItem } from "@floating-ui/react";
import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import { RefObject, createRef } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { DropdownContext, DropdownContextValue } from "./DropdownContext";
import { DropdownItem } from "./DropdownItem";

jest.mock("@floating-ui/react", () => ({
  ...jest.requireActual("@floating-ui/react"),
  useListItem: jest.fn(),
}));

describe("components/Dropdown/DropdownItem", () => {
  const getItemProps = () => ({});
  const handleSelect = () => undefined;
  const value = {
    activeIndex: -1,
    selectedIndex: -1,
    getItemProps,
    handleSelect,
  };

  let renderer: IRenderer;
  let ref: RefObject<unknown> | null;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);

    ref = createRef();
    (useListItem as jest.Mock).mockReturnValue({
      ref,
      index: 1,
    });
  });

  afterEach(() => {
    renderer.clear();

    ref = null;
    (useListItem as jest.Mock).mockClear();
  });

  it("should render a dropdown item", async () => {
    const component = (
      <DropdownContext.Provider value={value as DropdownContextValue}>
        <DropdownItem label="Dropdown Item" disabled={false} />
      </DropdownContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-item")).toHaveClass("dropdown-item");

    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "role",
      "option",
    );
    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "tabIndex",
      "-1",
    );

    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "aria-disabled",
      "false",
    );
    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "aria-selected",
      "false",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
    ref = null;
  });

  it("should render a disabled dropdown item", async () => {
    const component = (
      <DropdownContext.Provider value={value as DropdownContextValue}>
        <DropdownItem label="Dropdown Item" disabled />
      </DropdownContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-item")).toHaveClass("dropdown-item");

    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a selected dropdown item", async () => {
    const ctxValue: DropdownContextValue = {
      ...value,
      activeIndex: 1,
      selectedIndex: 1,
    };

    const component = (
      <DropdownContext.Provider value={ctxValue}>
        <DropdownItem label="Dropdown Item" disabled={false} />
      </DropdownContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("dropdown-item")).toBeInTheDocument();

    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByTestId("dropdown-item")).toHaveAttribute(
      "tabIndex",
      "0",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
