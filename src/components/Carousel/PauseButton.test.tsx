import { act, render, screen } from "@testing-library/react";
import { PauseButton } from "./PauseButton";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
describe("components/PauseButton", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
    jest.useFakeTimers();
  });

  afterEach(() => {
    renderer.clear();
    jest.useRealTimers();
  });

  it("should render a PauseButton", async () => {
    const component = (
      <div style={{ backgroundColor: "#ff4500" }}>
        <PauseButton />;
      </div>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId("carousel-pause-btn")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-pause-icon")).toBeInTheDocument();
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a disabled PauseButton", async () => {
    const component = (
      <div style={{ backgroundColor: "transparent" }}>
        <PauseButton disabled />;
      </div>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    act(() => {
      jest.runAllTimers();
    });

    expect(screen.getByTestId("carousel-pause-btn")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-pause-icon")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
