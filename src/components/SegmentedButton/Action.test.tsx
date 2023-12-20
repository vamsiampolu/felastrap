import { IRenderer } from "fela";
import { Action } from "./Action";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/SegmentedButton/Action", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an action", async () => {
    const component = <Action>Action</Action>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("segmented-button-action")).toBeInTheDocument();
    expect(screen.queryByTestId("segmented-button-action")).toHaveClass(
      "segmented-button-action",
    );
  });
});
