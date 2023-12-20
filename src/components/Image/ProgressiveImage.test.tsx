import { fireEvent, render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { ProgressiveImage } from "./ProgressiveImage";

describe("components/ProgressiveImage", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render a progressive image", async () => {
    const component = (
      <ProgressiveImage
        width="200px"
        height="300px"
        src="https://picsum.photos/seed/crayon/200/300"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("progressive-image-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("progressive-image")).toBeInTheDocument();

    expect(screen.queryByTestId("progressive-image")).toHaveAttribute(
      "src",
      "https://picsum.photos/seed/crayon/200/300",
    );
    expect(screen.queryByTestId("progressive-image")).toHaveAttribute(
      "loading",
      "lazy",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a progressive image with an error image", async () => {
    const component = (
      <ProgressiveImage
        width="200px"
        height="300px"
        src="https://picsum.photos/seed/crayon/200/300"
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const image = screen.queryByTestId("progressive-image");
    fireEvent(image!, new ErrorEvent("error", {}));

    expect(screen.getByTestId("progressive-image-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("progressive-image")).toBeInTheDocument();

    expect(screen.queryByTestId("progressive-image")).toHaveAttribute(
      "src",
      "/error-image.png",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
