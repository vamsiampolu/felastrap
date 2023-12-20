import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { Portal, PortalProps } from "../Portal";
import { PanelGroup } from "./PanelGroup";

jest.mock("../Portal");

const MockPortal = ({ children, wrapperId }: PortalProps) => {
  return (
    <div id={wrapperId} data-testid="mock-portal">
      {children}
    </div>
  );
};

describe("components/PanelGroup/PanelGroup", () => {
  let renderer: IRenderer;
  (Portal as jest.Mock).mockImplementation(MockPortal);

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display a panel group with panels", async () => {
    const items = [
      {
        label: "Panel Group Item #1",
        content: (
          <>
            <strong>This is the first item&apos;s panel group body.</strong> It
            is shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #2",
        content: (
          <>
            <strong>This is the second item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
      {
        label: "Panel Group Item #3",
        content: (
          <>
            <strong>This is the third item&apos;s panel group body.</strong> It
            is hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It&apos;s also worth noting that
            just about any HTML can go within the <code>.panel group-body</code>
            , though the transition does limit overflow.
          </>
        ),
      },
    ];

    const component = <PanelGroup items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group")).toBeInTheDocument();
    expect(screen.queryByTestId("panel-group")).toHaveClass("panel-group");
    expect(screen.getAllByTestId("panel-group-panel")).toHaveLength(3);

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should verify panel contents", async () => {
    const items = [
      {
        label: "Panel Group Item #1",
        content: "First Item",
      },
      {
        label: "Panel Group Item #2",
        content: "Second Item",
      },
    ];

    const component = <PanelGroup items={items} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group")).toBeInTheDocument();
    expect(screen.queryByTestId("panel-group")).toHaveClass("panel-group");
    expect(screen.getAllByTestId("panel-group-panel")).toHaveLength(2);

    const [firstPanelBody, secondPanelBody] =
      screen.getAllByTestId("panel-group-body");

    expect(firstPanelBody).toHaveTextContent("First Item");
    expect(firstPanelBody).toBeVisible();

    expect(secondPanelBody).toHaveTextContent("Second Item");
    expect(secondPanelBody).toBeVisible();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render a flush panel group", async () => {
    const items = [
      {
        label: "Panel Group Item #1",
        content: "First Item",
      },
      {
        label: "Panel Group Item #2",
        content: "Second Item",
      },
    ];

    const component = <PanelGroup items={items} flush />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("panel-group")).toBeInTheDocument();

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
