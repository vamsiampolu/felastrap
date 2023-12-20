import { IRenderer } from "fela";
import { NavbarContext, NavbarContextProps } from "../NavbarContext";
import { NavbarCollapse } from "./NavbarCollapse";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Navbar/NavbarCollapse", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar collapse component containing a toggle and content", async () => {
    const value = {} as NavbarContextProps;
    const component = (
      <NavbarContext.Provider value={value}>
        <NavbarCollapse>Navbar Collapse</NavbarCollapse>
      </NavbarContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("navbar-toggle")).toBeInTheDocument();

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-content")).toHaveAttribute(
      "id",
      "navbar-collapse-content",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
