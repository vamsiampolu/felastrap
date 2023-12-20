import { IRenderer } from "fela";
import { ToggleIcon } from "./ToggleIcon";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";
import { NavbarSize } from "../utils";

describe("components/Navbar/NavbarCollapse/ToggleIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a toggle icon", async () => {
    const component = <ToggleIcon />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
      "navbar-toggle-icon",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toggle icon with className", async () => {
    const component = <ToggleIcon className="toggle-icon-custom" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();

    expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
      "navbar-toggle-icon",
    );
    expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
      "toggle-icon-custom",
    );
  });

  it.each(["small", "medium", "large", "x-large"])(
    "should render a toggle icon of size %s with no variant",
    async (size) => {
      const component = (
        <ToggleIcon size={size as NavbarSize} variant={undefined} />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
        "navbar-toggle-icon",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large", "x-large"])(
    "should render a toggle icon of size %s with variant fixed",
    async (size) => {
      const component = (
        <ToggleIcon size={size as NavbarSize} variant="fixed" />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
        "navbar-toggle-icon",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large", "x-large"])(
    "should render a toggle icon of size %s with variant sticky",
    async (size) => {
      const component = (
        <ToggleIcon size={size as NavbarSize} variant="sticky" />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
        "navbar-toggle-icon",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large", "x-large"])(
    "should render a toggle icon of size %s with variant expand",
    async (size) => {
      const component = (
        <ToggleIcon size={size as NavbarSize} variant="expand" />
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("navbar-toggle-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("navbar-toggle-icon")).toHaveClass(
        "navbar-toggle-icon",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
