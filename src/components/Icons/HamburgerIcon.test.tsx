import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { HamburgerIcon } from "./HamburgerIcon";

describe("components/Icons/HamburgerIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a hamburger icon", async () => {
    const component = <HamburgerIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a hamburger icon with a stroke color", async () => {
    const component = <HamburgerIcon stroke="#fff" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
