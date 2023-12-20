import { IRenderer } from "fela";
import { Dialog } from "./Dialog";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { Size } from "../common";

describe("components/Modal/Dialog", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Modal Dialog", async () => {
    const component = <Dialog>Modal Dialog</Dialog>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("modal-dialog")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-dialog-inner")).toHaveTextContent(
      "Modal Dialog",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it.each(["small", "medium", "large"])(
    "should render a Modal Dialog of size %s",
    async (size) => {
      const component = <Dialog size={size as Size}>Modal Dialog</Dialog>;
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("modal-dialog")).toBeInTheDocument();
      expect(screen.queryByTestId("modal-dialog-inner")).toHaveTextContent(
        "Modal Dialog",
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render a centered Modal Dialog of size %s",
    async (size) => {
      const component = (
        <Dialog centered size={size as Size}>
          Modal Dialog
        </Dialog>
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("modal-dialog")).toBeInTheDocument();
      expect(screen.queryByTestId("modal-dialog-inner")).toHaveTextContent(
        "Modal Dialog",
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );

  it.each(["small", "medium", "large"])(
    "should render a scrollable Modal Dialog of size %s",
    async (size) => {
      const component = (
        <Dialog scrollable size={size as Size}>
          Modal Dialog
        </Dialog>
      );
      render(<Wrapper renderer={renderer}>{component}</Wrapper>);

      expect(screen.getByTestId("modal-dialog")).toBeInTheDocument();
      expect(screen.queryByTestId("modal-dialog-inner")).toHaveTextContent(
        "Modal Dialog",
      );
      const snapshot = await createSnapshot({ component, renderer });
      expect(snapshot).toMatchSnapshot();
    },
  );
});
