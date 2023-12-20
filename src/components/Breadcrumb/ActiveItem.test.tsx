import { render, screen } from "@testing-library/react";
import { ActiveItem } from "./ActiveItem";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";

describe("components/Breadcrumb/ActiveItem", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an active breadcrumb item", async () => {
    const component = <ActiveItem label="Active Item" />;

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("breadcrumb-active-item")).toBeInTheDocument();

    expect(screen.queryByTestId("breadcrumb-active-item")).toHaveClass(
      "breadcrumb-active-item",
    );
    expect(screen.queryByTestId("breadcrumb-active-item")).toHaveAttribute(
      "aria-current",
      "page",
    );

    expect(screen.getByTestId("breadcrumb-divider")).toBeInTheDocument();
    expect(screen.queryByTestId("breadcrumb-active-item")).toHaveTextContent(
      "/Active Item",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
