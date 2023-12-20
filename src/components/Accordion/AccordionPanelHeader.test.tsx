import { IRenderer } from "fela";
import {
  AccordionPanelContext,
  type AccordionPanelContextValue,
} from "./AccordionPanelContext";
import { AccordionPanelHeader } from "./AccordionPanelHeader";
import { Wrapper, createRenderer, createSnapshot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Accordion/AccordionPanelHeader", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  const value: AccordionPanelContextValue = {
    first: false,
    last: false,
    toggle: () => undefined,
    isOpen: false,
  };

  it("should render a panel header", async () => {
    const component = (
      <AccordionPanelContext.Provider value={value}>
        <AccordionPanelHeader>Panel Header</AccordionPanelHeader>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-panel-header")).toHaveClass(
      "accordion-header",
    );

    expect(screen.getByTestId("accordion-panel-header")?.tagName).toEqual("H2");
    expect(screen.getByTestId("accordion-panel-header")).toHaveTextContent(
      "Panel Header",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a toggle button and the toggle icon", async () => {
    const component = (
      <AccordionPanelContext.Provider value={value}>
        <AccordionPanelHeader>Panel Header</AccordionPanelHeader>
      </AccordionPanelContext.Provider>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-panel-header")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-icon")).toBeInTheDocument();

    expect(screen.getByTestId("accordion-toggle-button")).toBeInTheDocument();
    expect(screen.getByTestId("accordion-toggle-button")).toHaveTextContent(
      "Panel Header",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
