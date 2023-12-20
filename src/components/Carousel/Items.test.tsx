import { IRenderer } from "fela";
import { Items } from "./Items";
import {
  createRenderer,
  cssReboot,
  createSnapshot,
  Wrapper,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Item } from "./Item";

describe("components/Carousel/Items", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render Items wrapper with some text", async () => {
    const component = <Items>Items</Items>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);
    expect(screen.getByTestId("carousel-items")).toBeInTheDocument();
    expect(screen.getByTestId("carousel-items")).toHaveClass("carousel-inner");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render Items wrapper with some text", async () => {
    const component = (
      <Items>
        <Item
          active
          src="https://picsum.photos/seed/picsum/450/300"
          alt="Placeholder Image 1"
          title="Placeholder 1"
          description="Placeholder Item Description"
        />
      </Items>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);
    expect(screen.getByTestId("carousel-items")).toBeInTheDocument();
    expect(screen.queryByTestId("carousel-items")).toHaveClass(
      "carousel-inner",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
