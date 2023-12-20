import { IRenderer, createRenderer } from "fela";
import { createSnapshot, cssReboot } from "../../test-helpers";
import { ToolsIcon } from "./ToolsIcon";

describe("components/Icons/ToolsIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a tools icon", async () => {
    const component = <ToolsIcon />;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
