import { CirclePopIcon } from "./CirclePopIcon";

import { IRenderer } from "fela";
import { createSnapshot, createRenderer, cssReboot } from "../../test-helpers";

describe("components/Icons/CirclePopIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a circle pop icon", async () => {
    const component = <CirclePopIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
