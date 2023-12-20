import { IRenderer } from "fela";
import { DropdownDivider } from "./DropdownDivider";
import { Wrapper, createRenderer, cssReboot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Dropdown/DropdownDivider", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a dropdown divider", async () => {
    const component = <DropdownDivider />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("dropdown-divider-item")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-divider")).toBeInTheDocument();
    expect(screen.getByTestId("dropdown-divider")).toHaveClass(
      "dropdown-divider",
    );
  });
});
