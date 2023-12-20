import type { IRenderer } from "fela";
import { Item } from "./Item";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Breadcrumb/Item", () => {
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

  it("should render an Item", async () => {
    const component = <Item href="/home" label="Home" />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first item", async () => {
    const component = <Item first href="/home" label="Home" />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an active item", async () => {
    const component = <Item href="/home" label="Home" active />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
