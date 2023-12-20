import { IRenderer } from "fela";
import { PauseIcon } from "./PauseButton";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Carousel/PauseButton.PauseIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an svg pause icon with the fill #fff", async () => {
    const component = <PauseIcon fill="#fff" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an svg pause icon with the fill #000", async () => {
    const component = <PauseIcon fill="#000" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
