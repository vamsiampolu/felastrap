import type { IRenderer } from "fela";
import { Wrapper } from "./Wrapper";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { Item } from "./Item";

describe("components/Breadcrumbs/Divider", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a divider", async () => {
    const component = (
      <Wrapper backgroundColor={null} borderRadius={null}>
        <Item first href="/foo" label="Foo" />
        <Item active href="/bar" label="Bar" />
      </Wrapper>
    );
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
