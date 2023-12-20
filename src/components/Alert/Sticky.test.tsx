import { Sticky } from "./Sticky";

import { type IRenderer } from "fela";

import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Alert/Sticky", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("renders a sticky top wrapper", async () => {
    const component = <Sticky>Hello, World{"!"}</Sticky>;
    const snapshot = await createSnapshot({ renderer, component, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
