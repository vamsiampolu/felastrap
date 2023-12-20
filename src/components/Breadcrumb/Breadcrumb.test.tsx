import { Breadcrumb } from "./Breadcrumb";
import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-helpers/Wrapper";
import { type IRenderer } from "fela";
import { createRenderer, cssReboot } from "../../test-helpers/createRenderer";

describe("components/Breadcrumb", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should display the breadcrumbs with a divider", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const breadcrumb = screen.getByTestId("breadcrumb");
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("Home/Frameworks/React");
  });

  it("should render the first item", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    expect(screen.getByTestId("breadcrumb-first-item")).toHaveTextContent(
      "Home",
    );
    expect(
      // eslint-disable-next-line testing-library/no-node-access
      screen.getByTestId("breadcrumb-first-item").querySelector("a"),
    ).toHaveAttribute("href", "/home");
  });

  it("should set last item as active", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const activeItem = screen.getByTestId("breadcrumb-active-item");
    expect(activeItem).toHaveTextContent("/React");
  });

  it("should render intermediate breadcrumb items", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );

    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const breadcrumbItems = screen.getAllByTestId("breadcrumb-item");
    expect(breadcrumbItems).toHaveLength(1);
  });

  it("should provide a link to the page", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    const breadcrumbItems = screen.getAllByTestId("breadcrumb-item");
    const links = breadcrumbItems.map(
      // eslint-disable-next-line testing-library/no-node-access
      (item) => item.querySelector("a")?.getAttribute("href"),
    );

    expect(links).toHaveLength(1);
    expect(links).toEqual(["/home/frameworks"]);
  });

  it("should not use a link for the active item", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const activeItem = screen.getByTestId("breadcrumb-active-item");
    // eslint-disable-next-line testing-library/no-node-access
    expect(activeItem.querySelector("a")).toBeNull();
  });

  it("should use a distinct color for the active item", () => {
    const component = (
      <Breadcrumb
        items={[
          { label: "Home", href: "/home" },
          { label: "Frameworks", href: "/home/frameworks" },
          { label: "React", href: "/home/frameworks/react" },
        ]}
      />
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);
    const activeItem = screen.getByTestId("breadcrumb-active-item");
    expect(activeItem).toHaveStyle("color:  rgba(33, 37, 41, 0.75);");
  });

  describe("accessibility", () => {
    it("should hide the divders from screen readers", () => {
      const component = (
        <Breadcrumb
          items={[
            { label: "Home", href: "/home" },
            { label: "Frameworks", href: "/home/frameworks" },
            { label: "React", href: "/home/frameworks/react" },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      const [item] = screen.getAllByTestId("breadcrumb-divider");
      expect(item).toHaveAttribute("aria-hidden", "true");
    });

    it("should set the breadcrumb landmark for the entire component", () => {
      const component = (
        <Breadcrumb
          items={[
            { label: "Home", href: "/home" },
            { label: "Frameworks", href: "/home/frameworks" },
            { label: "React", href: "/home/frameworks/react" },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      const nav = screen.getByTestId("breadcrumb");
      expect(nav.tagName).toEqual("NAV");
      expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
    });

    it("should ensure that the active item represents the current page", () => {
      const component = (
        <Breadcrumb
          items={[
            { label: "Home", href: "/home" },
            { label: "Frameworks", href: "/home/frameworks" },
            { label: "React", href: "/home/frameworks/react" },
          ]}
        />
      );

      render(<Wrapper renderer={renderer}>{component}</Wrapper>);
      const activeItem = screen.getByTestId("breadcrumb-active-item");
      expect(activeItem).toHaveAttribute("aria-current", "page");
    });
  });
});
