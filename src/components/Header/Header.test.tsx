import { IRenderer } from "fela";
import { Header } from "../Header/Header";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { DynamicElement } from "../common";

describe("components/Header", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });
  it.each(["h1", "h2", "h3", "h4", "h5", "h6"])(
    "should render a header as %s",
    async (as) => {
      const component = <Header as={as as DynamicElement}>Hello, World</Header>;
      const snapshot = await createSnapshot({ component, renderer, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["h1", "h2", "h3", "h4", "h5", "h6"])(
    "should render a display header as %s",
    async (as) => {
      const component = (
        <Header display as={as as DynamicElement}>
          Hello, World
        </Header>
      );
      const snapshot = await createSnapshot({ component, renderer, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
