import { IRenderer } from "fela";
import { OpenCollectiveIcon } from "./OpenCollectiveIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/OpenCollectiveIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an open collective icon", async () => {
    const component = <OpenCollectiveIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
