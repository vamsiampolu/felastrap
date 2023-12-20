import { IRenderer } from "fela";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { Wrapper as PageWrapper } from "./Wrapper";
import { PageItem } from "./Item";
import { render, screen } from "@testing-library/react";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Pagination/Wrapper", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a nav", async () => {
    const component = (
      <PageWrapper>
        <PageItem label="Page Item" />
      </PageWrapper>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("pagination-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("pagination-wrapper")?.tagName).toBe("NAV");
    expect(screen.getByTestId("pagination-wrapper")).toHaveAttribute(
      "aria-label",
      "Page Navigation",
    );
  });

  it("should render a nav with a list for pagination", async () => {
    const component = (
      <PageWrapper>
        <PageItem label="Page Item" />
      </PageWrapper>
    );

    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;
    render(wrappedComponent);

    expect(screen.getByTestId("pagination-wrapper")).toBeInTheDocument();
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.getByTestId("pagination-wrapper")?.firstElementChild?.tagName,
    ).toBe("UL");
  });

  it("should match the snapshot", async () => {
    const component = (
      <PageWrapper>
        <PageItem label="Page Item" />
      </PageWrapper>
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
