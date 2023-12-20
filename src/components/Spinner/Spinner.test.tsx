import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Variant } from "../common";
import { Spinner } from "./Spinner";
import { render, screen } from "@testing-library/react";

describe("components/Spinner", () => {
  const variants = [
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it.each([...variants])(
    "should render a spinner of variant %s",
    async (variant) => {
      const component = <Spinner variant={variant as Variant} />;
      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each([...variants])(
    "should render a small spinner of variant %s",
    async (variant) => {
      const component = <Spinner small variant={variant as Variant} />;
      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each([...variants])(
    "should render a growing spinner of variant %s",
    async (variant) => {
      const component = <Spinner type="grow" variant={variant as Variant} />;
      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each([...variants])(
    "should render a small growing spinner of variant %s",
    async (variant) => {
      const component = (
        <Spinner small type="grow" variant={variant as Variant} />
      );
      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each([...variants])(
    "should render a spinner with className spinner-border-%s",
    (variant) => {
      const component = (
        <Wrapper renderer={renderer}>
          <Spinner small type="border" variant={variant as Variant} />
        </Wrapper>
      );

      render(component);
      expect(screen.queryByTestId("spinner")).toHaveClass(
        `spinner-border-${variant}`,
      );
    },
  );

  it.each([...variants])(
    "should render a growing spinner with className spinner-grow-%s",
    (variant) => {
      const component = (
        <Wrapper renderer={renderer}>
          <Spinner small type="grow" variant={variant as Variant} />
        </Wrapper>
      );

      render(component);
      expect(screen.queryByTestId("spinner")).toHaveClass(
        `spinner-grow-${variant}`,
      );
    },
  );

  it("should have a role and visually hidden text", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Spinner />
      </Wrapper>
    );

    render(component);

    expect(screen.queryByTestId("spinner")).toHaveAttribute("role", "status");
    expect(screen.queryByTestId("spinner-hidden-text")).toHaveTextContent(
      "Loading...",
    );
  });
});
