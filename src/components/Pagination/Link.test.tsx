import { IRenderer } from "fela";
import { PageLink } from "./Link";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { Size } from "../common";
import userEvent from "@testing-library/user-event";

describe("components/Pagination/Link", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each(["small", "medium", "large"])(
    "should render a PageLink of %s",
    async (size) => {
      const component = <PageLink size={size as Size}>Page Link</PageLink>;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Page Link");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the first PageLink of %s",
    async (size) => {
      const component = (
        <PageLink first size={size as Size}>
          1
        </PageLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("1");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the last PageLink of %s",
    async (size) => {
      const component = (
        <PageLink last size={size as Size}>
          5
        </PageLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("5");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render a disabled PageLink of %s",
    async (size) => {
      const component = (
        <PageLink disabled size={size as Size}>
          3
        </PageLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("3");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render an active PageLink of %s",
    async (size) => {
      const component = (
        <PageLink active size={size as Size}>
          3
        </PageLink>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("3");

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should respond to click events", async () => {
    const onClick = jest.fn().mockImplementation((e) => e.preventDefault());
    const component = (
      <Wrapper renderer={renderer}>
        <PageLink onClick={onClick}>Page Link</PageLink>
      </Wrapper>
    );
    const user = userEvent.setup();

    render(component);
    const pageLink = screen.getByTestId("page-link");
    await user.click(pageLink!);

    expect(pageLink).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
  });
});
