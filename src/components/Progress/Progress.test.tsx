import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Progress, ProgressVariant } from "./Progress";

describe("components/Progress/Progress", () => {
  let renderer: IRenderer;

  const variants = ["default", "danger", "info", "success", "warning"];

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each([0, 25, 50, 75, 100])(
    "should display a progressbar at %d",
    async (value) => {
      const component = <Progress value={value} />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("progressbar")).toBeInTheDocument();
      expect(screen.getByTestId("progressbar-label")).toBeInTheDocument();

      expect(screen.queryByTestId("progressbar")).toHaveAccessibleName(
        "Progress Bar",
      );
      expect(screen.queryByTestId("progressbar")).toHaveAttribute(
        "aria-valuenow",
        `${value}`,
      );

      expect(screen.queryByTestId("progressbar")).toHaveAttribute(
        "aria-valuemin",
        "0",
      );
      expect(screen.queryByTestId("progressbar")).toHaveAttribute(
        "aria-valuemax",
        "100",
      );

      expect(screen.queryByTestId("progressbar-label")).toBeEmptyDOMElement();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should display a progressbar with of variant %s",
    async (variant) => {
      const component = (
        <Progress value={55} variant={variant as ProgressVariant} />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("progressbar")).toBeInTheDocument();

      expect(screen.getByTestId("progressbar-label")).toBeInTheDocument();
      expect(screen.queryByTestId("progressbar-label")).toBeEmptyDOMElement();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should display a progressbar with a label of variant %s",
    async (variant) => {
      const component = (
        <Progress variant={variant as ProgressVariant} value={55} showLabel />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("progressbar")).toBeInTheDocument();

      expect(screen.getByTestId("progressbar-label")).toBeInTheDocument();

      expect(screen.queryByTestId("progressbar-label")).toHaveTextContent(
        "55%",
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should display a striped progress bar of variant %s",
    async (variant) => {
      const component = (
        <Progress striped variant={variant as ProgressVariant} value={55} />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("progressbar")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should displayed an animated striped progress bar of variant %s",
    async (variant) => {
      const component = (
        <Progress
          striped
          variant={variant as ProgressVariant}
          value={55}
          animated
        />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("progressbar")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should display a stacked progressbar of variant %s",
    async (variant) => {
      const component = (
        <Progress variant={variant as ProgressVariant} value={55} stacked />
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);
      expect(screen.getByTestId("progressbar")).toBeInTheDocument();
      expect(screen.getByTestId("progressbar-label")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
