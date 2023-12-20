import { IRenderer } from "fela";
import { Size } from "../common";
import { Next } from "./Next";
import { createRenderer, cssReboot, Wrapper } from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import userEvent from "@testing-library/user-event";

describe("components/Pagination/Next", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each(["small", "medium", "large"])(
    "should create a Next component of size %s",
    async (size) => {
      const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
      const component = <Next size={size as Size} onClick={onClick} />;

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("next")).toBeInTheDocument();
      expect(screen.getByTestId("next")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("»");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should create a Next component of size %s with label Next",
    async (size) => {
      const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
      const component = (
        <Next size={size as Size} label="Next" onClick={onClick} />
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("next")).toBeInTheDocument();
      expect(screen.getByTestId("next")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Next");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should create a disabled Next component of size %s",
    async (size) => {
      const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
      const component = (
        <Next size={size as Size} label="Next" onClick={onClick} disabled />
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("next")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toBeInTheDocument();

      expect(screen.getByTestId("next")).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      expect(screen.getByTestId("page-link")).toHaveAttribute(
        "aria-disabled",
        "true",
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should respond to click events on Next", async () => {
    const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
    const component = <Next onClick={onClick} />;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();

    render(wrappedComponent);
    const user = userEvent.setup();

    const next = screen.getByTestId("page-link");
    expect(next).toBeInTheDocument();

    await user.click(next!);
    expect(onClick).toHaveBeenCalled();
  });
});
