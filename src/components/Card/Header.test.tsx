import { IRenderer } from "fela";
import { CardHeader } from "./Header";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Card/Header", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a card header", async () => {
    const component = <CardHeader>Card header</CardHeader>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a card header when body has a top image", async () => {
    const component = <CardHeader hasImage>Card header</CardHeader>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
