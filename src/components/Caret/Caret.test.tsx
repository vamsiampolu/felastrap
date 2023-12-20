import { IRenderer } from "fela";
import { Caret } from "./Caret";
import { createRenderer, cssReboot } from "../../test-helpers/";
import { CaretDirection } from "../common";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Caret/Caret", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a caret", async () => {
    const component = <Caret />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["down", "end", "start", "up"])(
    "should render a caret with direction %s",
    async (direction) => {
      const component = (
        <Caret direction={direction as CaretDirection} width="0.3rem" />
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["down", "end", "start", "up"])(
    "should render a caret with direction %s and default width",
    async (direction) => {
      const component = <Caret direction={direction as CaretDirection} />;
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["down", "end", "start", "up"])(
    "should render a caret with direction %s and custom width",
    async (direction) => {
      const component = (
        <Caret direction={direction as CaretDirection} width="0.5rem" />
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
