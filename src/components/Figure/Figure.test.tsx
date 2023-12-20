import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Figure } from "./Figure";
import { render, screen } from "@testing-library/react";

describe("components/Figure/Figure", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a figure with an image and a figcaption", async () => {
    const component = (
      <Figure src="https://placehold.co/400x300" caption="Image Caption" />
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("figure")).toBeInTheDocument();
    expect(screen.queryByTestId("figure")?.tagName).toEqual("FIGURE");
    expect(screen.queryByTestId("figure")).toHaveClass("figure");

    expect(screen.getByTestId("image")).toBeInTheDocument();
    expect(screen.queryByTestId("image")).toHaveAttribute(
      "src",
      "https://placehold.co/400x300",
    );

    expect(screen.getByTestId("figure-caption")).toBeInTheDocument();
    expect(screen.queryByTestId("figure-caption")).toHaveTextContent(
      "Image Caption",
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
