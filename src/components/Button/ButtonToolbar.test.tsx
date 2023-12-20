import { IRenderer } from "fela";
import { createRenderer, createSnapshot, cssReboot } from "../../test-helpers";
import { ButtonToolbar } from "./ButtonToolbar";
import { ButtonGroup } from "./ButtonGroup";
import { Button } from "./Button";

describe("components/Button/ButtonToolbar", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a button toolbar with multiple groups", async () => {
    const component = (
      <ButtonToolbar>
        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="primary">
            Left
          </Button>
          <Button group variant="primary">
            Middle
          </Button>
          <Button group last isGtEqThree variant="primary">
            Right
          </Button>
        </ButtonGroup>

        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="secondary">
            Left
          </Button>
          <Button group variant="secondary">
            Middle
          </Button>
          <Button group last isGtEqThree variant="secondary">
            Right
          </Button>
        </ButtonGroup>

        <ButtonGroup style={{ marginRight: "0.5rem" }}>
          <Button group variant="info">
            Info
          </Button>
        </ButtonGroup>
      </ButtonToolbar>
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
