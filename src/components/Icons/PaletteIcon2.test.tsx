import { IRenderer } from "fela";
import { PaletteIcon2 } from "./PaletteIcon2";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/PaletteIcons2", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the palette icon", async () => {
    const component = <PaletteIcon2 />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the follow up palette icon", async () => {
    const component = <PaletteIcon2 followUp />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
