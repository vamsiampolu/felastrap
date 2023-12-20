import { Indicators } from "./Indicators";
import { createRenderer, cssReboot, createSnapshot } from "../../test-helpers";
import { IRenderer } from "fela";
import { Indicator } from "./Indicator";

describe("components/Carousel/Indicators", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the Indicators wrapper without the indicators", async () => {
    const component = <Indicators>Indicators</Indicators>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a wrapper that contains the indicators", async () => {
    const component = (
      <Indicators>
        <Indicator active label="Slide 1" />
        <Indicator label="Slide 2" />
      </Indicators>
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
