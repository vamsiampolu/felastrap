import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import { CSSProperties, useRef } from "react";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Portal, PortalProps } from "../Portal";
import { CollapseContext, CollapseContextValue } from "./CollapseContext";
import { CollapseContentProps, Content } from "./Content";

jest.mock("../Portal");

const MockPortal = ({ children, wrapperId, style = null }: PortalProps) => (
  <div data-testid="portal" style={style as CSSProperties} id={wrapperId}>
    {children}
  </div>
);

const CollapseContentExample = ({
  height,
  ...contentProps
}: { height?: CSSProperties["height"] } & CollapseContentProps) => {
  const contentRef = useRef(null);
  const toggleCollapse = () => undefined;

  const value: CollapseContextValue = {
    contentRef,
    toggleCollapse,
    height: height ?? 0,
    collapsed: false,
    isOpen: false,
  };

  return (
    <CollapseContext.Provider value={value}>
      <Content {...contentProps} />
    </CollapseContext.Provider>
  );
};

describe("components/Collapse/Content", () => {
  let renderer: IRenderer;
  (Portal as jest.Mock).mockImplementation(MockPortal);

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    (Portal as jest.Mock).mockClear();
    renderer.clear();
  });

  it("should render collapsible content with a className", async () => {
    const component = (
      <CollapseContentExample className="collapse-content-wrapper">
        Collapse Content
      </CollapseContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("collapse")).toHaveClass(
      "collapse collapse-content-wrapper",
    );

    expect(screen.getByTestId("collapse-content")).toBeInTheDocument();

    expect(screen.getByTestId("collapse-container")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-container")).toHaveTextContent(
      "Collapse Content",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render the collapsible Content with an id", async () => {
    const component = (
      <CollapseContentExample id="collapse-content">
        Collapse Content
      </CollapseContentExample>
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("collapse")).toBeInTheDocument();

    expect(screen.getByTestId("collapse-content")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-content")).toHaveAttribute(
      "id",
      "collapse-content",
    );

    expect(screen.getByTestId("collapse-container")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-container")).toHaveTextContent(
      "Collapse Content",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render detached collapsible Content", async () => {
    const component = (
      <CollapseContentExample detached id="collapse-content">
        Collapse Content
      </CollapseContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-content")).toBeInTheDocument();

    expect(screen.getByTestId("collapse-container")).toBeInTheDocument();
    expect(screen.getByTestId("collapse-container")).toHaveTextContent(
      "Collapse Content",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
