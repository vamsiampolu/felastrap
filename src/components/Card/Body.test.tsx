import { IRenderer } from "fela";
import { CardBody } from "./Body";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Card/Body", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a card body", async () => {
    const component = <CardBody>Card Body</CardBody>;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
