import { IRenderer } from "fela";
import { CardSubtitle } from "./Subtitle";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Card/Subtitle", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a card subtitle", async () => {
    const component = <CardSubtitle>Card Subtitle</CardSubtitle>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a card subtitle using custom color", async () => {
    const component = (
      <CardSubtitle color="#d1c8ae">Card Subtitle</CardSubtitle>
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
