import { IRenderer } from "fela";
import { CodeIcon } from "./CodeIcon";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";

describe("components/CodeIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a code icon", async () => {
    const component = <CodeIcon />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a follow-up code icon", async () => {
    const component = <CodeIcon followUp />;
    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
