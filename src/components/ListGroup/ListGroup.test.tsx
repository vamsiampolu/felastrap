import { IRenderer } from "fela";
import { ListGroup } from "./ListGroup";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ListGroupItem } from "./ListGroupItem";
import { render, screen } from "@testing-library/react";

describe("components/ListGroup/ListGroup", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a ListGroup with three list items", async () => {
    const component = (
      <ListGroup>
        <ListGroupItem first>First List Item</ListGroupItem>
        <ListGroupItem>Second List Item</ListGroupItem>
        <ListGroupItem last>Third List Item</ListGroupItem>
      </ListGroup>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group")?.tagName).toBe("UL");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush ListGroup with three items", async () => {
    const component = (
      <ListGroup flush>
        <ListGroupItem first>First List Item</ListGroupItem>
        <ListGroupItem>Second List Item</ListGroupItem>
        <ListGroupItem last>Third List Item</ListGroupItem>
      </ListGroup>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush ListGroup with three items for a card", async () => {
    const component = (
      <ListGroup card flush>
        <ListGroupItem first>First List Item</ListGroupItem>
        <ListGroupItem>Second List Item</ListGroupItem>
        <ListGroupItem last>Third List Item</ListGroupItem>
      </ListGroup>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a numbered ListGroup with three items", async () => {
    const component = (
      <ListGroup numbered>
        <ListGroupItem first>First List Item</ListGroupItem>
        <ListGroupItem>Second List Item</ListGroupItem>
        <ListGroupItem last>Third List Item</ListGroupItem>
      </ListGroup>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();
    expect(screen.queryByTestId("list-group")?.tagName).toBe("OL");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a horizontal ListGroup with three items", async () => {
    const component = (
      <ListGroup horizontal>
        <ListGroupItem first>First List Item</ListGroupItem>
        <ListGroupItem>Second List Item</ListGroupItem>
        <ListGroupItem last>Third List Item</ListGroupItem>
      </ListGroup>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("list-group")).toBeInTheDocument();

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
