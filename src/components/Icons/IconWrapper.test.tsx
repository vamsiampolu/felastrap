import { IRenderer } from "fela";
import { IconWrapper } from "./IconWrapper";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Icons/IconWrapper", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render the icon wrapper", async () => {
    const component = <IconWrapper>Icon Wrapper</IconWrapper>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("icon-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("icon-wrapper")).toHaveClass(
      "masthead-followup-icon",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
