import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { CollapseContext } from "../../Collapse";
import { CollapseContextValue } from "../../Collapse/CollapseContext";
import { Toggle } from "./Toggle";

describe("components/Navbar/NavbarCollapse/Toggle", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar toggle component", async () => {
    const component = <Toggle />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a accessible navbar toggle component", async () => {
    const component = <Toggle />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-toggle")).toHaveAttribute(
      "aria-controls",
      "navbarScroll",
    );

    expect(screen.getByTestId("navbar-toggle")).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByTestId("navbar-toggle")).toHaveAttribute(
      "aria-label",
      "Toggle Navigation",
    );
  });

  it("should set aria-label using the label prop", async () => {
    const component = <Toggle label="Navbar Toggle" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-toggle")).toHaveAttribute(
      "aria-label",
      "Navbar Toggle",
    );
  });

  it("should set toggle without a size and variant", async () => {
    const component = <Toggle size={undefined} variant={undefined} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should set the aria-expanded using the isOpen from the CollapseContext", async () => {
    const value = {
      isOpen: false,
      toggleCollapse: () => undefined,
    } as CollapseContextValue;

    const component = (
      <CollapseContext.Provider value={value}>
        <Toggle />
      </CollapseContext.Provider>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-toggle")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("should expand the navbar when toggle is clicked", async () => {
    const toggleCollapse = jest.fn();
    const value = {
      isOpen: false,
      toggleCollapse,
    } as unknown as CollapseContextValue;

    const component = (
      <CollapseContext.Provider value={value}>
        <Toggle />
      </CollapseContext.Provider>
    );
    const user = userEvent.setup();

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const toggle = screen.queryByTestId("navbar-toggle");

    expect(toggle).toBeInTheDocument();
    await user.click(toggle!);

    expect(toggleCollapse).toHaveBeenCalled();
  });
});
