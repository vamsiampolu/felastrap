import { act } from "react-dom/test-utils";
import { Button } from "../Button";
import { TooltipPlacement } from "../common";
import { Tooltip } from "./Tooltip";
import { render, screen } from "@testing-library/react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { IRenderer } from "fela";
import userEvent from "@testing-library/user-event";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useLayoutEffect: jest.requireActual("react").useEffect,
}));

describe("components/Tooltip/Tooltip", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  const placements = ["top", "left", "bottom", "right"];
  const waitForPosition = () =>
    act(async () => {
      return Promise.resolve(undefined);
    });

  it.each(placements)(
    "should render an open tooltip at %s",
    async (placement) => {
      const component = (
        <Tooltip
          tooltipText="This is the default tooltip"
          placement={placement as TooltipPlacement}
          initialOpen={true}
        >
          <Button variant="secondary">Tooltip</Button>
        </Tooltip>
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      await waitForPosition();

      expect(screen.getByTestId("tooltip-trigger")).toBeInTheDocument();
      expect(screen.getByTestId("tooltip-content")).toBeInTheDocument();

      expect(screen.queryByTestId("tooltip-content-inner")).toHaveTextContent(
        "This is the default tooltip",
      );
      expect(screen.queryByTestId("tooltip-content-inner")).toHaveClass(
        "floating",
      );

      expect(screen.getByTestId("tooltip-arrow")).toBeInTheDocument();
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(placements)("should render an tooltip at %s", async (placement) => {
    const component = (
      <Tooltip
        tooltipText="This is the default tooltip"
        placement={placement as TooltipPlacement}
        initialOpen={false}
      >
        <Button variant="secondary">Tooltip</Button>
      </Tooltip>
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    await waitForPosition();

    expect(screen.getByTestId("tooltip-trigger")).toBeInTheDocument();

    expect(screen.queryByTestId("tooltip-content")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("tooltip-content-inner"),
    ).not.toBeInTheDocument();
    expect(screen.queryByTestId("tooltip-arrow")).not.toBeInTheDocument();

    const trigger = screen.getByTestId("tooltip-trigger");
    await user.hover(trigger);
    await waitForPosition();

    expect(screen.queryByTestId("tooltip-content")).toBeVisible();
    expect(screen.queryByTestId("tooltip-arrow")).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
    await user.unhover(trigger);
  });
});
