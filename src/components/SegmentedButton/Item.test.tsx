import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import {
  DropdownContext,
  DropdownContextValue,
} from "../Dropdown/DropdownContext";
import { Item } from "./Item";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/SegmentedButton/Item", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a dropdown divider item", async () => {
    const component = (
      <Item type="divider" index={0} text="" disabled={false} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-divider")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown header item", async () => {
    const component = (
      <Item type="header" index={0} text="Header" disabled={false} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled dropdown header item", async () => {
    const component = <Item type="header" index={0} text="Header" disabled />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown header as the second item", async () => {
    const component = (
      <Item type="header" index={1} text="Header" disabled={false} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown text item", async () => {
    const component = (
      <Item type="text" index={0} text="Text" disabled={false} />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-text")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown item", async () => {
    const value: DropdownContextValue = {
      activeIndex: null,
      selectedIndex: null,
      getItemProps: () => ({}),
      handleSelect: () => undefined,
    };
    const component = (
      <DropdownContext.Provider value={value}>
        <Item type="item" index={0} text="Item" disabled={false} />
      </DropdownContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-item")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a dropdown disabled item", async () => {
    const value: DropdownContextValue = {
      activeIndex: null,
      selectedIndex: null,
      getItemProps: () => ({}),
      handleSelect: () => undefined,
    };
    const component = (
      <DropdownContext.Provider value={value}>
        <Item type="item" index={0} text="Item" disabled />
      </DropdownContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-item")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
