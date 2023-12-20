import { render, screen } from "@testing-library/react";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionPanelContent } from "./AccordionPanelContent";
import { AccordionPanelHeader } from "./AccordionPanelHeader";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { AccordionContext, AccordionContextValue } from "./AccordionContext";
import getPanelKey from "./getPanelKey";
import userEvent from "@testing-library/user-event";

jest.mock("./getPanelKey");

describe("components/Accordion/AccordionPanel", () => {
  const defaultProps = {
    first: false,
    last: false,
  };

  const value: AccordionContextValue = {
    activeKey: "foo",
    setActiveKey: () => undefined,
    flush: false,
  };

  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);

    (getPanelKey as jest.Mock).mockReturnValue("z8nafbh2t");
  });

  afterEach(() => {
    (getPanelKey as jest.Mock).mockReset();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render the Accordion Panel", async () => {
    const component = (
      <AccordionContext.Provider value={value}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel")).toHaveClass("accordion-item");

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();

    expect(screen.getByTestId("accordion-panel-content")).not.toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the Accordion Panel with a className", async () => {
    const component = (
      <AccordionContext.Provider value={value}>
        <AccordionPanel {...defaultProps} className="panel">
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel")).toHaveClass("accordion-item");
    expect(screen.getByTestId("accordion-panel")).toHaveClass("panel");

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();

    expect(screen.getByTestId("accordion-panel-content")).not.toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the flush Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "foobar",
      flush: true,
    };

    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the first Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "foobar",
    };
    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps} first>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the flush first Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      flush: true,
      activeKey: "foobar",
    };
    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps} first>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the flush last Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      flush: true,
      activeKey: "foobar",
    };
    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps} last>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "foobar",
    };

    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps} last>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the active Accordion Panel", async () => {
    const setActiveKey = jest.fn();
    const ctxValue: AccordionContextValue = {
      ...value,
      setActiveKey,
      activeKey: "z8nafbh2t",
    };
    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel")).toHaveClass("accordion-item");

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();

    expect(setActiveKey).toHaveBeenCalledWith("z8nafbh2t");
    expect(screen.getByTestId("accordion-panel-content")).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the active flush Accordion Panel", async () => {
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "z8nafbh2t",
      flush: true,
    };

    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel")).toHaveClass("accordion-item");

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();

    expect(screen.getByTestId("accordion-panel-content")).toBeVisible();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should open a closed accordion panel when header is clicked", async () => {
    const setActiveKey = jest.fn();
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "foobar",
      flush: true,
      setActiveKey,
    };

    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).not.toBeVisible();

    const header = screen.getByTestId("accordion-panel-header");
    await user.click(header!);

    expect(screen.queryByTestId("accordion-panel-content")).toBeVisible();
    expect(setActiveKey).toHaveBeenCalledWith("z8nafbh2t");
  });

  it("should close an open accordion panel when header is clicked", async () => {
    const setActiveKey = jest.fn();
    const ctxValue: AccordionContextValue = {
      ...value,
      activeKey: "z8nafbh2t",
      flush: true,
      setActiveKey,
    };

    const component = (
      <AccordionContext.Provider value={ctxValue}>
        <AccordionPanel {...defaultProps}>
          <AccordionPanelHeader>Panel Name</AccordionPanelHeader>
          <AccordionPanelContent>Panel Content</AccordionPanelContent>
        </AccordionPanel>
      </AccordionContext.Provider>
    );

    const user = userEvent.setup();
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-content")).toBeVisible();

    const header = screen.getByTestId("accordion-panel-header");
    await user.click(header!);

    expect(screen.queryByTestId("accordion-panel-content")).not.toBeVisible();
  });
});
