import { IRenderer } from "fela";
import { NavbarText } from "./NavbarText";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Navbar/NavbarCollapse/NavbarText", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar text", async () => {
    const component = <NavbarText text="Navbar Text" />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-text")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-text")).toHaveClass("navbar-text");
    expect(screen.getByTestId("navbar-text")).toHaveTextContent("Navbar Text");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
