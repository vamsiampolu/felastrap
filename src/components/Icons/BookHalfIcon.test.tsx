import { IRenderer } from "fela";
import { createSnapshot, createRenderer, cssReboot } from "../../test-helpers";
import { BookHalfIcon } from "./BookHalfIcon";

describe("components/Icons/BookHalfIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a book half icon", async () => {
    const component = <BookHalfIcon />;
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
