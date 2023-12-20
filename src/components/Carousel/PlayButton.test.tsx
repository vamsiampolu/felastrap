import { act, render, screen } from "@testing-library/react";
import { PlayButton } from "./PlayButton";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
describe("components/Carousel/PlayButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    renderer.clear();
  });

  it("should render a PlayButton", async () => {
    const component = (
      <div style={{ backgroundColor: "#ff4500" }}>
        <PlayButton />;
      </div>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId("carousel-play-btn")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-play-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled PlayButton", async () => {
    const component = (
      <div style={{ backgroundColor: "transparent" }}>
        <PlayButton disabled />;
      </div>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId("carousel-play-btn")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-play-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
