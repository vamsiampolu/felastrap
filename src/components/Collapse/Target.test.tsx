import { render, screen } from "@testing-library/react";
import { CollapseContext, CollapseContextValue } from "./CollapseContext";
import { Target } from "./Target";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { IRenderer } from "fela";
import userEvent from "@testing-library/user-event";

describe("components/Collapse/Target", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a collapsible target", async () => {
    const toggleCollapse = () => undefined;

    const component = (
      <CollapseContext.Provider
        value={{ toggleCollapse } as unknown as CollapseContextValue}
      >
        <Target />
      </CollapseContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse-target")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should invoke toggleCollapse when target is clicked", async () => {
    const toggleCollapse = jest.fn();
    const user = userEvent.setup();

    const component = (
      <CollapseContext.Provider
        value={{ toggleCollapse } as unknown as CollapseContextValue}
      >
        <Target />
      </CollapseContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse-target")).toBeInTheDocument();

    const target = screen.queryByTestId("collapse-target");
    await user.click(target!);

    expect(toggleCollapse).toHaveBeenCalled();
  });
});
