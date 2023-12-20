import { IRenderer } from "fela";
import { GridFillIcon } from "./GridFillIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/GridFillIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a grid fill icon", async () => {
    const component = <GridFillIcon />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
