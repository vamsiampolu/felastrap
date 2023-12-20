import { IRenderer } from "fela";
import { AccordionPanelContent } from "./AccordionPanelContent";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import {
  AccordionPanelContext,
  AccordionPanelContextValue,
} from "./AccordionPanelContext";
import { render, screen } from "@testing-library/react";

describe("components/Accordion/AccordionPanelContent", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
    cssReboot(renderer);
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  const value: AccordionPanelContextValue = {
    last: false,
    flush: false,
    isOpen: false,
  };

  it("should render the accordion panel content with default context values", async () => {
    const component = (
      <AccordionPanelContext.Provider value={{}}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-panel-content")).toHaveClass(
      "accordion-body",
    );

    expect(screen.queryByTestId("accordion-panel-content")).toHaveTextContent(
      "Accordion Panel Content",
    );
    expect(screen.queryByTestId("accordion-panel-content")).toHaveAttribute(
      "hidden",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the accordion panel content", async () => {
    const component = (
      <AccordionPanelContext.Provider value={value}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-panel-content")).toHaveClass(
      "accordion-body",
    );

    expect(screen.queryByTestId("accordion-panel-content")).toHaveTextContent(
      "Accordion Panel Content",
    );
    expect(screen.queryByTestId("accordion-panel-content")).toHaveAttribute(
      "hidden",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open accordion panel content", async () => {
    const ctxValue: AccordionPanelContextValue = { ...value, isOpen: true };
    const component = (
      <AccordionPanelContext.Provider value={ctxValue}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-panel-content")).toHaveClass(
      "accordion-body",
    );

    expect(screen.queryByTestId("accordion-panel-content")).toHaveTextContent(
      "Accordion Panel Content",
    );
    expect(screen.queryByTestId("accordion-panel-content")).not.toHaveAttribute(
      "hidden",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open accordion panel content", async () => {
    const ctxValue: AccordionPanelContextValue = { ...value, isOpen: true };
    const component = (
      <AccordionPanelContext.Provider value={ctxValue}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-panel-content")).toHaveClass(
      "accordion-body",
    );

    expect(screen.queryByTestId("accordion-panel-content")).toHaveTextContent(
      "Accordion Panel Content",
    );
    expect(screen.queryByTestId("accordion-panel-content")).not.toHaveAttribute(
      "hidden",
    );
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush accordion panel content", async () => {
    const ctxValue: AccordionPanelContextValue = { ...value, flush: true };
    const component = (
      <AccordionPanelContext.Provider value={ctxValue}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last accordion panel content", async () => {
    const ctxValue: AccordionPanelContextValue = { ...value, last: true };
    const component = (
      <AccordionPanelContext.Provider value={ctxValue}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the last flush accordion panel content when open", async () => {
    const ctxValue: AccordionPanelContextValue = {
      last: true,
      isOpen: true,
      flush: true,
    };

    const component = (
      <AccordionPanelContext.Provider value={ctxValue}>
        <AccordionPanelContent>Accordion Panel Content</AccordionPanelContent>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-content")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
