import { IRenderer } from "fela";
import { Header, ToggleHeaderContainer } from "./Header";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { CollapseContext } from "../Collapse";
import { CollapseContextValue } from "../Collapse/CollapseContext";
import userEvent from "@testing-library/user-event";

describe("components/PanelGroup/Header", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a panel group header", async () => {
    const component = <Header>Panel Header</Header>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.queryByTestId("panel-group-text-header")).toHaveClass(
      "panel-group-header",
    );

    expect(screen.queryByTestId("panel-group-text-header")?.tagName).toEqual(
      "H2",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should contain a toggle button and a toggle icon", () => {
    const component = <Header>Panel Header</Header>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-toggle-icon")).toBeInTheDocument();

    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-toggle-button")).toHaveTextContent(
      "Panel Header",
    );
  });

  it("should invoke toggle prop when the toggle button is clicked", async () => {
    const toggle = jest.fn();
    const component = <Header toggle={toggle}>Panel Header</Header>;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();

    const user = userEvent.setup();
    const toggleBtn = screen.queryByTestId("panel-group-toggle-button");

    await user.click(toggleBtn!);
    expect(toggle).toHaveBeenCalled();
  });
});

describe("components/PanelGroupToggleHeaderContainer", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should open a closed panel: invokes setActive and toggleCollapse", async () => {
    const toggleCollapse = jest.fn();
    const setActive = jest.fn();
    const value = {
      isOpen: false,
      toggleCollapse,
    };

    const component = (
      <CollapseContext.Provider
        value={value as unknown as CollapseContextValue}
      >
        <ToggleHeaderContainer setActive={setActive}>
          Toggle Header Behaviour
        </ToggleHeaderContainer>
      </CollapseContext.Provider>
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const toggleBtn = screen.queryByTestId("panel-group-toggle-button");
    expect(toggleBtn).toBeInTheDocument();

    await user.click(toggleBtn!);
    expect(toggleCollapse).toHaveBeenCalled();
    expect(setActive).toHaveBeenCalled();
  });

  it("should close an open panel", async () => {
    const toggleCollapse = jest.fn();
    const setActive = jest.fn();
    const value = {
      isOpen: true,
      toggleCollapse,
    };

    const component = (
      <CollapseContext.Provider
        value={value as unknown as CollapseContextValue}
      >
        <ToggleHeaderContainer setActive={setActive}>
          Toggle Header Behaviour
        </ToggleHeaderContainer>
      </CollapseContext.Provider>
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const toggleBtn = screen.queryByTestId("panel-group-toggle-button");
    expect(toggleBtn).toBeInTheDocument();

    await user.click(toggleBtn!);
    expect(toggleCollapse).toHaveBeenCalled();
    expect(setActive).not.toHaveBeenCalled();
  });
});
