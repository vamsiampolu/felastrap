import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { NavItem } from "./NavItem";
import { render, screen } from "@testing-library/react";

describe("components/Nav/NavItem", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a NavItem", async () => {
    const component = <NavItem>Navigation Item</NavItem>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("nav-item")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-item")).toHaveTextContent(
      "Navigation Item",
    );
    expect(screen.queryByTestId("nav-item")).toHaveClass("nav-item");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a NavItem with a className ", async () => {
    const component = <NavItem className="item">Navigation Item</NavItem>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("nav-item")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-item")).toHaveClass("item");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a NavItem for a card", async () => {
    const component = (
      <NavItem className="item" card>
        Navigation Item
      </NavItem>
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a NavItem with fill prop", async () => {
    const component = (
      <NavItem className="item" fill>
        Navigation Item
      </NavItem>
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a justified NavItem", async () => {
    const component = (
      <NavItem className="item" justified>
        Navigation Item
      </NavItem>
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active NavItem", async () => {
    const component = (
      <NavItem className="item" active>
        Navigation Item
      </NavItem>
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
