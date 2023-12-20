import { IRenderer } from "fela";
import { Body } from "./Body";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/PanelGroup/Body", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a panel body", async () => {
    const component = <Body>Panel Body</Body>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toHaveClass(
      "panel-group-body",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush panel body", async () => {
    const component = <Body flush>Panel Body</Body>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toHaveClass(
      "panel-group-body",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
