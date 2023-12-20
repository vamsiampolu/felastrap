import { IRenderer } from "fela";
import { DropdownHeader } from "./DropdownHeader";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Dropdown/DropdownHeader", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a Dropdown Header", async () => {
    const component = <DropdownHeader>Dropdown Header</DropdownHeader>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-header-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-header")).toBeInTheDocument();

    expect(screen.queryByTestId("dropdown-header")).toHaveClass(
      "dropdown-header",
    );
    expect(screen.queryByTestId("dropdown-header")).toHaveTextContent(
      "Dropdown Header",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
