import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { Wrapper as CarouselWrapper } from "./Wrapper";

describe("components/Carousel/Wrapper", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Carousel Wrapper", async () => {
    const component = <CarouselWrapper>Carousel</CarouselWrapper>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
