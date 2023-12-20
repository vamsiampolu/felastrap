import { IRenderer } from "fela";
import { Panel } from "./Panel";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/PanelGroup/Panel", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a panel with a header and a body", async () => {
    const component = (
      <Panel label="A Panel" isOpen={false} setActive={() => undefined}></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open panel with a header and a body", async () => {
    const component = (
      <Panel label="A Panel" isOpen={true} setActive={() => undefined}></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first panel with a header and a body", async () => {
    const component = (
      <Panel
        first
        label="A Panel"
        isOpen={false}
        setActive={() => undefined}
      ></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last panel with a header and a body", async () => {
    const component = (
      <Panel
        last
        label="A Panel"
        isOpen={false}
        setActive={() => undefined}
      ></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first flush panel with a header and a body", async () => {
    const component = (
      <Panel
        first
        flush
        label="A Panel"
        isOpen={false}
        setActive={() => undefined}
      ></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last flush panel with a header and a body", async () => {
    const component = (
      <Panel
        last
        flush
        label="A Panel"
        isOpen={false}
        setActive={() => undefined}
      ></Panel>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group-panel")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-text-header")).toBeInTheDocument();
    expect(screen.getByTestId("panel-group-body")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
