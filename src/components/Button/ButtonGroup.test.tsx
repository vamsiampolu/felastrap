import { IRenderer } from "fela";
import { ButtonGroup } from "./ButtonGroup";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("components/Button/ButtonGroup", () => {
  let renderer: IRenderer;
  const variants = [
    "default",
    "danger",
    "info",
    "primary",
    "secondary",
    "success",
    "warning",
  ];

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should allow for some accessibility support", () => {
    const component = (
      <Wrapper renderer={renderer}>
        <ButtonGroup aria-label="Button Group">
          <Button group>Left</Button>
          <Button group>Middle</Button>
          <Button group last isGtEqThree>
            Right
          </Button>
        </ButtonGroup>
      </Wrapper>
    );

    render(component);

    expect(screen.getByTestId("button-group")).toBeInTheDocument();
    expect(screen.queryByTestId("button-group")).toHaveClass("button-group");

    expect(screen.queryByTestId("button-group")).toHaveAttribute(
      "role",
      "group",
    );
    expect(screen.queryByTestId("button-group")).toHaveAccessibleName(
      "Button Group",
    );
  });

  it.each(variants)(
    "should render a ButtonGroup with three buttons of variant %s",
    async (variant) => {
      const component = (
        <ButtonGroup>
          <Button group variant={variant}>
            Left
          </Button>
          <Button group variant={variant}>
            Middle
          </Button>
          <Button group last isGtEqThree variant={variant}>
            Right
          </Button>
        </ButtonGroup>
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it("should render a mixed ButtonGroup with three buttons", async () => {
    const component = (
      <ButtonGroup>
        <Button group variant="danger">
          Left
        </Button>
        <Button group variant="warning">
          Middle
        </Button>
        <Button group last isGtEqThree variant="success">
          Right
        </Button>
      </ButtonGroup>
    );

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a group of %s buttons",
    async (groupSize) => {
      const component = (
        <ButtonGroup>
          <Button group groupSize={groupSize} variant="primary">
            Left
          </Button>
          <Button group groupSize={groupSize} variant="primary">
            Middle
          </Button>
          <Button
            group
            groupSize={groupSize}
            last
            isGtEqThree
            variant="primary"
          >
            Right
          </Button>
        </ButtonGroup>
      );

      const snapshot = await createSnapshot({ renderer, component });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(variants)(
    "should render a vertical group of buttons of variant %s",
    async (variant) => {
      const component = (
        <ButtonGroup vertical>
          <Button first group groupVertical variant={variant}>
            Left
          </Button>
          <Button group groupVertical variant={variant}>
            Middle
          </Button>
          <Button group last groupVertical isGtEqThree variant={variant}>
            Right
          </Button>
        </ButtonGroup>
      );

      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
