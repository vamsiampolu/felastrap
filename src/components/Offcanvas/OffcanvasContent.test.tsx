import { IRenderer } from "fela";
import { OffcanvasContent } from "./OffcanvasContent";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Offcanvas/OffcanvasContent", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an offcanvas wrapper containing a header and body", async () => {
    const component = (
      <OffcanvasContent
        isOpen
        width="400px"
        titleId="sidebar-content-title"
        title="Title"
        id="sidebar-content"
        onClose={() => undefined}
        body="Content Body"
      />
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("offcanvas-wrapper")).toBeInTheDocument();
    expect(screen.queryByTestId("offcanvas-wrapper")).toHaveAttribute(
      "id",
      "sidebar-content",
    );

    expect(screen.getByTestId("offcanvas-title")).toHaveAttribute(
      "id",
      "sidebar-content-title",
    );
    expect(screen.queryByTestId("offcanvas-title")).toHaveTextContent("Title");

    expect(screen.queryByTestId("offcanvas-body")).toHaveTextContent(
      "Content Body",
    );
  });
});
