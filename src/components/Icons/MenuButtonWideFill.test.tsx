import { IRenderer } from "fela";
import { MenuButtonWideFill } from "./MenuButtonWideFill";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/MenuButtonWideFill", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a menu button wide fill", async () => {
    const component = <MenuButtonWideFill />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
