import { CSSProperties, IRenderer } from "fela";
import { Content, ContentProps } from "./Content";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { useRef } from "react";
import {
  CollapseContext,
  CollapseContextValue,
} from "../../Collapse/CollapseContext";
import { render, screen } from "@testing-library/react";

const ContentExample = ({
  isOpen,
  height,
  ...contentProps
}: { isOpen?: boolean; height?: CSSProperties["height"] } & ContentProps) => {
  const contentRef = useRef(null);
  const toggleCollapse = () => undefined;
  const value: CollapseContextValue = {
    contentRef,
    toggleCollapse,
    height: height ?? 0,
    collapsed: !(isOpen ?? false),
    isOpen: isOpen ?? false,
  };

  return (
    <CollapseContext.Provider value={value}>
      <Content {...contentProps} />
    </CollapseContext.Provider>
  );
};

describe("components/Navbar/NavbarCollapse/Content", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar collapse content component", async () => {
    const component = (
      <ContentExample isOpen={false}>
        <div data-testid="hello-there">Hello, there</div>
      </ContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("hello-there")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open navbar collapse content component", async () => {
    const component = (
      <ContentExample isOpen={true}>
        <div data-testid="hello-there">Hello, there</div>
      </ContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("hello-there")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar collapse content component with variant sticky", async () => {
    const component = (
      <ContentExample isOpen={false} variant="sticky">
        <div data-testid="hello-there">Hello, there</div>
      </ContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("hello-there")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar collapse content component with variant expand and size small", async () => {
    const component = (
      <ContentExample isOpen={false} variant="expand" size="small">
        <div data-testid="hello-there">Hello, there</div>
      </ContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("hello-there")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a navbar collapse content component with variant fixed and size small", async () => {
    const component = (
      <ContentExample isOpen={false} variant="fixed" size="small">
        <div data-testid="hello-there">Hello, there</div>
      </ContentExample>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("collapse")).toBeInTheDocument();
    expect(screen.getByTestId("hello-there")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
