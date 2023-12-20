import type { IRenderer } from "fela";
import { Divider } from "./Divider";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Breadcrumbs/Divider", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the default divider", async () => {
    const component = <Divider />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a divider", async () => {
    const component = <Divider divider="/" />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
