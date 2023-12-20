import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { NavLink } from "./NavLink";

describe("components/Nav/NavLink", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a NavLink", async () => {
    const component = (
      <NavLink href="/icons" target="foobar">
        Icons
      </NavLink>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();

    expect(screen.queryByTestId("nav-link")).toHaveClass("nav-link");
    expect(screen.queryByTestId("nav-link")?.tagName).toBe("A");
    expect(screen.queryByTestId("nav-link")).toHaveAttribute("href", "/icons");
    expect(screen.queryByTestId("nav-link")).toHaveAttribute(
      "target",
      "foobar",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a NavLink using a div", async () => {
    const component = (
      <NavLink as="div" href="/icons" target="foobar">
        Icons
      </NavLink>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();

    expect(screen.queryByTestId("nav-link")).toHaveClass("nav-link");
    expect(screen.queryByTestId("nav-link")?.tagName).toBe("DIV");

    expect(screen.queryByTestId("nav-link")).not.toHaveAttribute("href");
    expect(screen.queryByTestId("nav-link")).not.toHaveAttribute("target");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled NavLink", async () => {
    const component = (
      <NavLink disabled href="/icons">
        Icons
      </NavLink>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("nav-link")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["tabs", "pills", "underline", "fill", "justified", "vertical"])(
    "should render a NavLink of variant %s",
    async (variant) => {
      const component = (
        <NavLink variant={variant} href="/icons">
          Icons
        </NavLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("nav-link")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["tabs", "pills", "underline"])(
    "should render an active NavLink of variant %s",
    async (variant) => {
      const component = (
        <NavLink active variant={variant} href="/icons">
          Icons
        </NavLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("nav-link")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["tabs", "pills"])(
    "should render a NavLink for a card of variant %s",
    async (variant) => {
      const component = (
        <NavLink card variant={variant} href="/icons">
          Icons
        </NavLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("nav-link")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["tabs", "pills"])(
    "should render an active NavLink for a card of variant %s",
    async (variant) => {
      const component = (
        <NavLink active card variant={variant} href="/icons">
          Icons
        </NavLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("nav-link")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
