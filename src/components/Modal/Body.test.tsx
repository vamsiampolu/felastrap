import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { ModalBody } from "./Body";

describe("components/Modal/Body", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Modal Body", async () => {
    const component = <ModalBody>Modal Body</ModalBody>;
    await expect(createSnapshot({ component, renderer }));
  });
});
