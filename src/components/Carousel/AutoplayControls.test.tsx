import { IRenderer } from "fela";
import { AutoplayControls } from "./AutoplayControls";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Carousel/AutoplayControls", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should not render any controls when not enabled", () => {
    const wrappedComponent = (
      <Wrapper renderer={renderer}>
        <AutoplayControls />
      </Wrapper>
    );
    render(wrappedComponent);

    expect(
      screen.queryByTestId("autoplay-controls-wrapper"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("carousel-play-btn")).not.toBeInTheDocument();
    expect(screen.queryByTestId("carousel-pause-btn")).not.toBeInTheDocument();
  });

  it("should render a play button", async () => {
    const wrappedComponent = (
      <Wrapper renderer={renderer}>
        <AutoplayControls enabled autoplay={false} />
      </Wrapper>
    );
    render(wrappedComponent);

    expect(screen.getByTestId("autoplay-controls-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-play-btn")).toBeInTheDocument();
    expect(screen.queryByTestId("carousel-pause-btn")).not.toBeInTheDocument();

    const snapshot = await createSnapshot({
      renderer,
      component: <AutoplayControls enabled autoplay={false} />,
    });

    expect(snapshot).toMatchSnapshot();
  });

  it("should render a pause button when autoplaying", async () => {
    const wrappedComponent = (
      <Wrapper renderer={renderer}>
        <AutoplayControls enabled autoplay />
      </Wrapper>
    );
    render(wrappedComponent);

    expect(screen.getByTestId("autoplay-controls-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("carousel-play-btn")).not.toBeInTheDocument();
    expect(screen.getByTestId("carousel-pause-btn")).toBeInTheDocument();

    const snapshot = await createSnapshot({
      renderer,
      component: <AutoplayControls enabled autoplay />,
    });

    expect(snapshot).toMatchSnapshot();
  });
});
