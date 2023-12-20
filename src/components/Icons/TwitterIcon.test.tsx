import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { TwitterIcon } from "./TwitterIcon";
import { render, screen } from "@testing-library/react";

describe("components/Icons/TwitterIcon", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the twitter icon", async () => {
    const component = <TwitterIcon />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveClass("navbar-nav-svg");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
