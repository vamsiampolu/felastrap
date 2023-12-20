import { IRenderer } from "fela";
import { ToggleIcon } from "./ToggleIcon";
import { Wrapper, createRenderer, createSnapshot } from "../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Accordion/ToggleIcon", () => {
  let renderer: IRenderer;

  beforeAll(() => {
    renderer = createRenderer();
  });

  beforeEach(() => {
    renderer.clear();
  });

  afterAll(() => {
    renderer = undefined as unknown as IRenderer;
  });

  it("should render a ToggleIcon", async () => {
    const component = <ToggleIcon />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("accordion-toggle-icon")).toHaveClass(
      "accordion-toggle-icon",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });

  it("should render an open ToggleIcon", async () => {
    const component = <ToggleIcon isOpen />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("accordion-toggle-icon")).toBeInTheDocument();
    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
