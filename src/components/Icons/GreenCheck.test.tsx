import { IRenderer } from "fela";
import { GreenCheck } from "./GreenCheck";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/GreenCheck", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a green check icon", async () => {
    const component = <GreenCheck />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a green check with fill color", async () => {
    const component = <GreenCheck fill="#198754" />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
