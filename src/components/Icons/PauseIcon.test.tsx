import { IRenderer } from "fela";
import { PauseIcon } from "./PauseIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/PauseIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a pause icon icon", async () => {
    const component = <PauseIcon />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a pause icon with fill color", async () => {
    const component = <PauseIcon fill="#198754" />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
