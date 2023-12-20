import { CloseButton } from "./CloseButton";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Modal/CloseButton", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Modal CloseButton", async () => {
    const component = <CloseButton onClick={() => undefined} />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("modal-close-button")).toBeInTheDocument();
    expect(screen.queryByTestId("modal-close-button")).toHaveAttribute(
      "aria-label",
      "Close",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
