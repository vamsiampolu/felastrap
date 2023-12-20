import { IRenderer } from "fela";
import { CardText } from "./Text";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Card/Text", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a card text", async () => {
    const component = <CardText className="card-text">Card Text</CardText>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
