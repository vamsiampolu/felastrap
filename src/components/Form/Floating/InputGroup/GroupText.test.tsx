import { IRenderer } from "fela";
import { FloatingGroupText } from "./GroupText";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Floating/InputGroup/GroupText", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a group text", async () => {
    const component = (
      <FloatingGroupText>Floating Group Text</FloatingGroupText>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("input-group-text")).toBeInTheDocument();

    expect(screen.queryByTestId("input-group-text")).toHaveClass(
      "floating-input-group-text",
    );
    expect(screen.queryByTestId("input-group-text")).toHaveTextContent(
      "Floating Group Text",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
