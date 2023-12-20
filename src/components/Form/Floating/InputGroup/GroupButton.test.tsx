import { IRenderer } from "fela";
import { FloatingGroupButton } from "./GroupButton";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Floating/InputGroup/FloatingGroupButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a floating group button", async () => {
    const component = (
      <FloatingGroupButton>Floating Group Button</FloatingGroupButton>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("input-group-btn")).toBeInTheDocument();

    expect(screen.queryByTestId("input-group-btn")).toHaveTextContent(
      "Floating Group Button",
    );
    expect(screen.queryByTestId("input-group-btn")).toHaveClass(
      "floating-input-group-button",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
