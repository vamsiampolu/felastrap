import { ModalFooter } from "./Footer";
import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Modal/Footer", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Modal Footer", async () => {
    const component = <ModalFooter>Modal Footer</ModalFooter>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
