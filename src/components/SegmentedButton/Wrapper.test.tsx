import { IRenderer } from "fela";
import { Wrapper } from "./Wrapper";
import {
  createRenderer,
  createSnapshot,
  cssReboot,
  Wrapper as FelaWrapper,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/SegmentedButton/Wrapper", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Segmented Button Wrapper", async () => {
    const component = <Wrapper>Segmented Button Wrapper</Wrapper>;
    render(<FelaWrapper renderer={renderer}>{component}</FelaWrapper>);

    expect(screen.getByTestId("segmented-button")).toBeInTheDocument();
    expect(screen.queryByTestId("segmented-button")).toHaveClass(
      "segmented-btn-wrapper",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
