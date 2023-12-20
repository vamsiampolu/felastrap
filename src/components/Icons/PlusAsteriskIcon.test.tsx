import { IRenderer } from "fela";
import { PlusAsteriskIcon } from "./PlusAsteriskIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/PlusAsteriskIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the plus asterisk icon", async () => {
    const component = <PlusAsteriskIcon />;
    const snapshot = await createSnapshot({ renderer, component });

    expect(snapshot).toMatchSnapshot();
  });
});
