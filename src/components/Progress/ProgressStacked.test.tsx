import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ProgressProps } from "./Progress";
import { ProgressStacked } from "./ProgressStacked";
import { render, screen } from "@testing-library/react";

describe("components/Progress/ProgressStacked", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a stacked group of progress bars", async () => {
    const progressBars: ProgressProps[] = [
      {
        value: 15,
        label: "Segment One",
      },
      {
        value: 30,
        label: "Segment Two",
      },
      {
        value: 20,
        label: "Segment Three",
      },
    ];

    const component = <ProgressStacked progressBars={progressBars} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.getByTestId("progress-stacked")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a stacked group of progress bars with different varients", async () => {
    const progressBars: ProgressProps[] = [
      {
        value: 15,
        label: "Segment One",
        variant: "success",
      },
      {
        value: 30,
        label: "Segment Two",
        variant: "info",
      },
      {
        value: 20,
        label: "Segment Three",
        variant: "danger",
      },
    ];

    const component = <ProgressStacked progressBars={progressBars} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("progress-stacked")).toBeInTheDocument();
    expect(screen.queryByTestId("progress-stacked")).toHaveClass(
      "progress-stacked",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should not render when no progress bars", async () => {
    const component = <ProgressStacked progressBars={[] as ProgressProps[]} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.queryByTestId("progress-stacked")).not.toBeInTheDocument();
  });

  it("should render a stacked group of progress bars with an added className", async () => {
    const progressBars: ProgressProps[] = [
      {
        value: 15,
        label: "Segment One",
        variant: "success",
      },
      {
        value: 30,
        label: "Segment Two",
        variant: "info",
      },
      {
        value: 20,
        label: "Segment Three",
        variant: "danger",
      },
    ];

    const component = (
      <ProgressStacked
        className="install-progress-bar"
        progressBars={progressBars}
      />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("progress-stacked")).toBeInTheDocument();
    expect(screen.queryByTestId("progress-stacked")).toHaveClass(
      "install-progress-bar",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
