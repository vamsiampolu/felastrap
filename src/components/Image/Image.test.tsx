import { IRenderer } from "fela";
import { createRenderer, cssReboot } from "../../test-helpers";
import { createSnapshot } from "../../test-helpers/createSnapshot";
import { Image } from "../Image/Image";

describe("components/Image", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a centered image", async () => {
    const component = (
      <Image
        center
        src="https://placehold.co/600x400"
        width={600}
        height={400}
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a fluid image", async () => {
    const component = (
      <Image
        fluid
        src="https://placehold.co/600x400"
        width={600}
        height={400}
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a rounded image", async () => {
    const component = (
      <Image
        rounded
        src="https://placehold.co/600x400"
        width={600}
        height={400}
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a thumbnail image", async () => {
    const component = (
      <Image
        thumbnail
        src="https://placehold.co/600x400"
        width={600}
        height={400}
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a figure image", async () => {
    const component = (
      <Image
        figure
        src="https://placehold.co/600x400"
        width={600}
        height={400}
      />
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
