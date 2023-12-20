import { IRenderer } from "fela";
import { ListGroupItem } from "./ListGroupItem";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ListGroupContext } from "./ListGroupContext";
import { render, screen } from "@testing-library/react";
import { Variant } from "../common";
import { Badge } from "../Badge/Badge";
import { ListGroupItemAction } from "./ListGroupItemAction";

describe("components/ListGroup/ListGroupItem", () => {
  let renderer: IRenderer;

  const variants = [
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a list group item with the className provided", () => {
    const component = (
      <ListGroupContext.Provider
        value={{
          card: false,
          flush: false,
          numbered: false,
          horizontal: false,
        }}
      >
        <ListGroupItem className="book-shelf-item">Item</ListGroupItem>
      </ListGroupContext.Provider>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group-item")).toHaveClass(
      "book-shelf-item",
    );
  });

  it.each(variants)(
    "should render a list group item with variant %s",
    async (variant) => {
      const component = (
        <ListGroupContext.Provider
          value={{
            card: false,
            flush: false,
            numbered: false,
            horizontal: false,
          }}
        >
          <ListGroupItem variant={variant as Variant}>Item</ListGroupItem>
        </ListGroupContext.Provider>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
      expect(screen.queryByTestId("list-group-item")).toHaveClass(
        "list-group-item",
      );

      expect(screen.queryByTestId("list-group-item")?.tagName).toBe("LI");
      expect(screen.queryByTestId("list-group-item")).toHaveTextContent("Item");

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render the first list group item of variant %s",
    async (variant) => {
      const component = (
        <ListGroupContext.Provider
          value={{
            card: false,
            flush: false,
            numbered: false,
            horizontal: false,
          }}
        >
          <ListGroupItem first variant={variant as Variant}>
            Item
          </ListGroupItem>
        </ListGroupContext.Provider>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render the last list group item of variant %s",
    async (variant) => {
      const component = (
        <ListGroupContext.Provider
          value={{
            card: false,
            flush: false,
            numbered: false,
            horizontal: false,
          }}
        >
          <ListGroupItem last variant={variant as Variant}>
            Item
          </ListGroupItem>
        </ListGroupContext.Provider>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render the active list group item of variant %s",
    async (variant) => {
      const component = (
        <ListGroupContext.Provider
          value={{
            card: false,
            flush: false,
            numbered: false,
            horizontal: false,
          }}
        >
          <ListGroupItem active variant={variant as Variant}>
            Item
          </ListGroupItem>
        </ListGroupContext.Provider>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);
      expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render a disabled list group item of variant %s",
    async (variant) => {
      const component = (
        <ListGroupContext.Provider
          value={{
            card: false,
            flush: false,
            numbered: false,
            horizontal: false,
          }}
        >
          <ListGroupItem disabled variant={variant as Variant}>
            Item
          </ListGroupItem>
        </ListGroupContext.Provider>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item")).toBeInTheDocument();

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a list group item with actions", async () => {
    const component = (
      <ListGroupContext.Provider
        value={{
          card: false,
          flush: false,
          numbered: false,
          horizontal: false,
        }}
      >
        <ListGroupItem active={false} disabled={false}>
          <ListGroupItemAction as={"button"}>Click Me</ListGroupItemAction>
        </ListGroupItem>
      </ListGroupContext.Provider>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
    expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();

    expect(screen.queryByTestId("list-group-item-action")?.tagName).toBe(
      "BUTTON",
    );
    expect(screen.queryByTestId("list-group-item-action")).toHaveTextContent(
      "Click Me",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a list group item with a badge", async () => {
    const component = (
      <ListGroupContext.Provider
        value={{
          card: false,
          flush: false,
          numbered: false,
          horizontal: false,
        }}
      >
        <ListGroupItem
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div data-testid="list-group-item-text">Click Me</div>
          <Badge variant="primary" pill>
            5
          </Badge>
        </ListGroupItem>
      </ListGroupContext.Provider>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("list-group-item")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group-item")).toHaveStyle({
      display: "flex",
      "justify-content": "space-between",
      "align-items": "center",
    });

    expect(screen.queryByTestId("badge")).toHaveTextContent("5");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
