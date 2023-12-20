import { IRenderer } from "fela";
import { Caption } from "./Caption";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Figure/Caption", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a figure caption", () => {
    const component = <Caption>Figure Caption</Caption>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("figure-caption")).toBeInTheDocument();
    expect(screen.queryByTestId("figure-caption")).toHaveTextContent(
      "Figure Caption",
    );
    expect(screen.queryByTestId("figure-caption")?.tagName).toBe("FIGCAPTION");

    expect(screen.queryByTestId("figure-caption")).toHaveClass(
      "figure-caption",
    );
  });

  it("should render with the custom className", () => {
    const component = (
      <Caption className="captain-caption">Figure Caption</Caption>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.getByTestId("figure-caption")).toBeInTheDocument();
    expect(screen.queryByTestId("figure-caption")).toHaveClass(
      "captain-caption",
    );
  });
});
