import { render, screen } from "@testing-library/react";
import { IRenderer } from "fela";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { Brand } from "./Brand";

describe("components/Navbar/Brand", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a navbar brand with name", () => {
    const component = <Brand>Faraday Cage</Brand>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-brand")).toBeInTheDocument();
    expect(screen.queryByTestId("navbar-brand")?.tagName).toBe("A");
    expect(screen.queryByTestId("navbar-brand")).toHaveAttribute("href", "#");

    expect(screen.queryByTestId("navbar-brand")).toHaveClass("navbar-brand");
  });

  it("should render a navbar brand with name and image", async () => {
    const component = (
      <Brand
        image={{ src: "https://placehold.co/600x400", width: 600, height: 400 }}
      >
        Faraday Cage
      </Brand>
    );
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-brand")).toBeInTheDocument();
    expect(screen.getByTestId("navbar-brand-image")).toBeInTheDocument();

    expect(screen.queryByTestId("navbar-brand-image")).toHaveAttribute(
      "src",
      "https://placehold.co/600x400",
    );
    expect(screen.queryByTestId("navbar-brand-image")).toHaveAttribute(
      "width",
      "600",
    );
    expect(screen.queryByTestId("navbar-brand-image")).toHaveAttribute(
      "height",
      "400",
    );
  });

  it("should render a navbar brand with a className", () => {
    const component = <Brand className="magnetic">Faraday Cage</Brand>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("navbar-brand")).toBeInTheDocument();
    expect(screen.queryByTestId("navbar-brand")?.tagName).toBe("A");

    expect(screen.queryByTestId("navbar-brand")).toHaveClass("navbar-brand");
    expect(screen.queryByTestId("navbar-brand")).toHaveClass("magnetic");
  });
});
