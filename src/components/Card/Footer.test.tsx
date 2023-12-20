import { IRenderer } from "fela";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { Footer } from "./Footer";

describe("components/Card/Footer", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a card footer", async () => {
    const component = <Footer className="card-footer">Card Footer</Footer>;
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
