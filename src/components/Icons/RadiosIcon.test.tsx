import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { RadiosIcon } from "./RadiosIcon";

describe("components/Icons/RadiosIcon", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the radios icon", async () => {
    const component = <RadiosIcon />;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
