import { IRenderer } from "fela";
import { Link } from "./Link";
import { createRenderer, cssReboot, Wrapper } from "../../test-helpers";
import { render, screen } from "@testing-library/react";
import { createSnapshot } from "../../test-helpers/createSnapshot";

describe("components/Link", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render an anchor element", async () => {
    const component = <Link href="/home">Home</Link>;
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);
    expect(screen.queryByTestId("link")).toHaveAttribute("href", "/home");
    expect(screen.queryByTestId("link")).toHaveTextContent("Home");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an anchor element with target and rel", async () => {
    const component = (
      <Link target="_blank" rel="noopener" href="/home">
        Home
      </Link>
    );
    const wrappedComponent = <Wrapper renderer={renderer}>{component}</Wrapper>;

    render(wrappedComponent);

    expect(screen.queryByTestId("link")).toHaveAttribute("href", "/home");
    expect(screen.queryByTestId("link")).toHaveTextContent("Home");

    expect(screen.queryByTestId("link")).toHaveAttribute("target", "_blank");
    expect(screen.queryByTestId("link")).toHaveAttribute("rel", "noopener");

    const snapshot = await createSnapshot({ renderer, component });
    expect(snapshot).toMatchSnapshot();
  });
});
