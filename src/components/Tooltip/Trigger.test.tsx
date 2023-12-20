import { IRenderer } from "fela";
import { Trigger } from "./Trigger";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Tooltip/Trigger", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a tooltip trigger", async () => {
    const component = <Trigger />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
