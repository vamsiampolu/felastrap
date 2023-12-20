import { render, screen } from "@testing-library/react";
import { Segment } from "./Segment";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/SegmentedButton/Segment", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Segment as a button with a visually hidden label", async () => {
    const component = <Segment />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("segment")).toBeInTheDocument();
    expect(screen.getByTestId("segment-after")).toBeInTheDocument();

    expect(screen.getByTestId("segment-visually-hidden")).toBeInTheDocument();
    expect(screen.getByTestId("segment-visually-hidden")).toHaveTextContent(
      "Toggle Dropdown",
    );

    expect(screen.getByTestId("segment")).toHaveClass("segment");
    expect(screen.getByTestId("segment-visually-hidden")).toHaveClass(
      "visually-hidden",
    );
    expect(screen.getByTestId("segment-after")).toHaveClass("segment-after");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
