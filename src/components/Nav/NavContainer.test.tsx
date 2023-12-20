import { IRenderer } from "fela";
import { NavContainer } from "./NavContainer";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { NavItem } from "./NavItem";
import { render, screen } from "@testing-library/react";
import { NavVariant } from "../common";

describe("components/Nav/NavContainer", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a NavContainer", async () => {
    const component = (
      <NavContainer>
        <NavItem>Hello</NavItem>
      </NavContainer>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("nav-container")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-container")?.tagName).toBe("UL");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a centered NavContainer", async () => {
    const component = (
      <NavContainer center>
        <NavItem>Hello</NavItem>
      </NavContainer>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("nav-container")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-container")?.tagName).toBe("UL");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a NavContainer as a nav", async () => {
    const component = (
      <NavContainer as="nav">
        <NavItem>Hello</NavItem>
      </NavContainer>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("nav-container")).toBeInTheDocument();
    expect(screen.queryByTestId("nav-container")?.tagName).toBe("NAV");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["default", "tabs", "pills", "underline", "vertical"])(
    "should render a NavContainer of variant %s",
    async (variant) => {
      const component = (
        <NavContainer variant={variant as NavVariant}>
          <NavItem>Hello</NavItem>
        </NavContainer>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("nav-container")).toBeInTheDocument();
      expect(screen.queryByTestId("nav-container")?.tagName).toBe("UL");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["default", "tabs", "pills", "underline"])(
    "should render a centered NavContainer of variant %s",
    async (variant) => {
      const component = (
        <NavContainer center variant={variant as NavVariant}>
          <NavItem>Hello</NavItem>
        </NavContainer>
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
