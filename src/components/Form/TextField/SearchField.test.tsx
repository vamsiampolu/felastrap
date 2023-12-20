import { IRenderer, createRenderer } from "fela";
import { SearchField } from "./SearchField";
import { Wrapper, createSnapshot, cssReboot } from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/TextField/SearchField", () => {
  let renderer: IRenderer;
  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should a search field", async () => {
    const component = <SearchField />;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("search-field")).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();

    expect(screen.getByTestId("text-input")).toBeInTheDocument();
    expect(screen.queryByTestId("text-input")?.tagName).toEqual("INPUT");

    expect(screen.getByTestId("text-input")).toHaveAttribute("type", "search");
    expect(screen.getByTestId("text-input")).toHaveAttribute(
      "placeholder",
      "Search",
    );

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
