import { IRenderer } from "fela";
import { ToggleButton } from "./ToggleButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/PanelGroup/ToggleButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a toggle button when panel is closed", async () => {
    const component = <ToggleButton>Toggle Button</ToggleButton>;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toggle button when panel is open", async () => {
    const component = <ToggleButton isOpen>Toggle Button</ToggleButton>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-toggle-button")).toHaveAttribute(
      "aria-expanded",
      "true",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first toggle button", async () => {
    const component = <ToggleButton first>Toggle Button</ToggleButton>;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last toggle button when open", async () => {
    const component = (
      <ToggleButton last isOpen>
        Toggle Button
      </ToggleButton>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last toggle button when closed", async () => {
    const component = <ToggleButton last>Toggle Button</ToggleButton>;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("panel-group-toggle-button")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
