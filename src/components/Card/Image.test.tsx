import { IRenderer } from "fela";
import { CardImage } from "./Image";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Card/Image", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an image at the top of the card", async () => {
    const component = <CardImage top src="https://placehold.co/600x400" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an image at the bottom of the card", async () => {
    const component = <CardImage bottom src="https://placehold.co/600x400" />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an image as part of the card body", async () => {
    const component = (
      <CardImage
        bottom={false}
        top={false}
        src="https://placehold.co/600x400"
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
