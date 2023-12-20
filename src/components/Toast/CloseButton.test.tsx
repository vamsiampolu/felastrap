import { IRenderer } from "fela";
import { CloseButton } from "./CloseButton";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Toast/CloseButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("render a close button", async () => {
    const component = <CloseButton />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("render a close button with a className", async () => {
    const component = <CloseButton className="toast-close" />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
