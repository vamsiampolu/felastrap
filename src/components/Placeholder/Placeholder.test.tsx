import { IRenderer } from "fela";
import { PlaceholderSize } from "./types";
import { Placeholder } from "./Placeholder";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { Wrapper } from "../../test-helpers/Wrapper";
import { createSnapshot } from "../../test-helpers/createSnapshot";

const sizes = ["xsmall", "small", "medium", "large"];
describe("components/Placeholder", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a placeholder", async () => {
    const component = <Placeholder />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a placeholder of variant default", async () => {
    const component = <Placeholder variant="default" />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a placeholder of variant primary", async () => {
    const component = <Placeholder variant="primary" />;
    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(sizes)("should display a placeholder of size %s", async (size) => {
    const component = (
      <Wrapper renderer={renderer}>
        <Placeholder size={size as PlaceholderSize} />
      </Wrapper>
    );

    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(sizes)(
    "should display a glowing placeholder of size %s",
    async (size) => {
      const component = (
        <Wrapper renderer={renderer}>
          <Placeholder animation="glow" size={size as PlaceholderSize} />
        </Wrapper>
      );

      const snapshot = await createSnapshot({ component, renderer, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(sizes)(
    "should display a waving placeholder of size %s",
    async (size) => {
      const component = (
        <Wrapper renderer={renderer}>
          <Placeholder animation="wave" size={size as PlaceholderSize} />
        </Wrapper>
      );

      const snapshot = await createSnapshot({ component, renderer, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(sizes)(
    "should display a placeholder button of size %s",
    async (size) => {
      const component = (
        <Wrapper renderer={renderer}>
          <Placeholder size={size as PlaceholderSize} type="button" />
        </Wrapper>
      );

      const snapshot = await createSnapshot({ component, renderer, theme: {} });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should display a placeholder of fixed width", async () => {
    const component = (
      <Wrapper renderer={renderer}>
        <Placeholder animation="wave" width="66.67%" />
      </Wrapper>
    );

    const snapshot = await createSnapshot({ component, renderer, theme: {} });
    expect(snapshot).toMatchSnapshot();
  });
});
