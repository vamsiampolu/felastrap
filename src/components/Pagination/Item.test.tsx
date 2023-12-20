import { IRenderer } from "fela";
import { PageItem } from "./Item";
import { createRenderer, cssReboot, Wrapper } from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../common";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Pagination/Item", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it.each(["small", "medium", "large"])(
    "should render a page item",
    async (size) => {
      const component = <PageItem size={size as Size} label="Item" />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-item")).toBeInTheDocument();
      expect(screen.getByTestId("page-item")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render an active page item",
    async (size) => {
      const component = <PageItem active size={size as Size} label="Item" />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-item")).toBeInTheDocument();
      expect(screen.getByTestId("page-item")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the first page item",
    async (size) => {
      const component = <PageItem first size={size as Size} label="Item" />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-item")).toBeInTheDocument();
      expect(screen.getByTestId("page-item")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the last page item",
    async (size) => {
      const component = <PageItem last size={size as Size} label="Item" />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-item")).toBeInTheDocument();
      expect(screen.getByTestId("page-item")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render the disabled page item",
    async (size) => {
      const component = <PageItem disabled size={size as Size} label="Item" />;
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("page-item")).toBeInTheDocument();
      expect(screen.getByTestId("page-item")?.tagName).toBe("LI");

      expect(screen.getByTestId("page-link")).toBeInTheDocument();
      expect(screen.getByTestId("page-link")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
