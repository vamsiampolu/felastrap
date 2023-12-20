import { render, screen } from "@testing-library/react";
import { DropdownText } from "./DropdownText";
import { IRenderer } from "fela";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";

describe("components/Dropdown/DropdownText", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a DropdownText component", async () => {
    const component = <DropdownText>Dropdown Text</DropdownText>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-text-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-text")).toBeInTheDocument();

    expect(screen.getByTestId("dropdown-text")).toHaveClass("dropdown-text");
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
