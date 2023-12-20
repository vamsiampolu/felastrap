import { IRenderer } from "fela";
import { PhoneIcon } from "./PhoneIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/PhoneIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a phone icon", async () => {
    const component = <PhoneIcon />;

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
