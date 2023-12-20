import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ListGroupItemAction } from "./ListGroupItemAction";
import { Variant } from "../common";
import { render, screen } from "@testing-library/react";

describe("components/ListGroup/ListGroupItemAction", () => {
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

  it.each(variants)(
    "should create a ListItemGroupAction with variant %s",
    async (variant) => {
      const component = (
        <ListGroupItemAction variant={variant as Variant}>
          Action
        </ListGroupItemAction>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();
      expect(screen.queryByTestId("list-group-item-action")).toHaveTextContent(
        "Action",
      );

      expect(screen.queryByTestId("list-group-item-action")?.tagName).toBe("A");
      expect(screen.queryByTestId("list-group-item-action")).toHaveClass(
        "list-group-item-action",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should create a ListItemGroupAction as a button of variant %s",
    async (variant) => {
      const component = (
        <ListGroupItemAction as="button" variant={variant as Variant}>
          Action
        </ListGroupItemAction>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();

      expect(screen.queryByTestId("list-group-item-action")?.tagName).toBe(
        "BUTTON",
      );
      expect(screen.queryByTestId("list-group-item-action")).toHaveTextContent(
        "Action",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should create a ListItemGroupAction as an active button of variant %s",
    async (variant) => {
      const component = (
        <ListGroupItemAction active as="button" variant={variant as Variant}>
          Action
        </ListGroupItemAction>
      );
      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );

      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();
      expect(screen.queryByTestId("list-group-item-action")?.tagName).toBe(
        "BUTTON",
      );

      expect(screen.queryByTestId("list-group-item-action")).toHaveTextContent(
        "Action",
      );
      expect(screen.queryByTestId("list-group-item-action")).toHaveAttribute(
        "active",
        "active",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should create an active ListItemGroupAction of variant %s",
    async (variant) => {
      const component = (
        <ListGroupItemAction active variant={variant as Variant}>
          Action
        </ListGroupItemAction>
      );

      const wrappedComponent = (
        <Wrapper renderer={renderer}>{component}</Wrapper>
      );
      render(wrappedComponent);

      expect(screen.getByTestId("list-group-item-action")).toBeInTheDocument();

      expect(screen.queryByTestId("list-group-item-action")).toHaveTextContent(
        "Action",
      );
      expect(screen.queryByTestId("list-group-item-action")).toHaveAttribute(
        "active",
        "active",
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
