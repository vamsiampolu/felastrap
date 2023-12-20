import { IRenderer } from "fela";
import { createSnapshot, createRenderer, cssReboot } from "../../test-helpers";
import { ArrowRightIcon } from "./ArrowRightIcon";

describe("components/Icons/ArrowRightIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an arrow right icon", async () => {
    const component = <ArrowRightIcon width={32} height={32} />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
