import { IRenderer } from "fela";
import { ToggleIcon } from "./ToggleIcon";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/PanelGroup/ToggleIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a toggle icon when the panel is closed", async () => {
    const component = <ToggleIcon />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-toggle-icon")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toggle icon when the panel is open", async () => {
    const component = <ToggleIcon isOpen />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-toggle-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
