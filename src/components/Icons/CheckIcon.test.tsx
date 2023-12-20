import { IRenderer } from "fela";
import { CheckIcon } from "./CheckIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/Icons/CheckIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });
  it("should render a braces icon", async () => {
    const component = <CheckIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a braces icon with a stroke", async () => {
    const component = <CheckIcon stroke="#fff" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a braces icon with a fill", async () => {
    const component = <CheckIcon fill="none" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a braces icon with a stroke and stroke width", async () => {
    const component = <CheckIcon stroke="#fff" strokeWidth={3} />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
