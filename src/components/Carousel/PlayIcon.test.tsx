import { IRenderer } from "fela";
import { PlayIcon } from "./PlayButton";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Carousel/PlayButton.PlayIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an svg play icon with the fill #fff", async () => {
    const component = <PlayIcon fill="#fff" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an svg play icon with the fill #000", async () => {
    const component = <PlayIcon fill="#000" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
