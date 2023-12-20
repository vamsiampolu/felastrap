import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { Wrapper } from "./Wrapper";

describe("components/Table/Wrapper", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a table", async () => {
    const component = (
      <Wrapper>
        <thead>
          <tr>
            <td>Col A</td>
            <td>Col B</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A table body</td>
            <td>with two columns</td>
          </tr>
        </tbody>
      </Wrapper>
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
