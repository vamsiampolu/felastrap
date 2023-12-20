import { IRenderer } from "fela";
import { Label } from "./Label";
import {
  Wrapper,
  createRenderer,
  createSnapshot,
  cssReboot,
} from "../../../test-helpers";
import { render, screen } from "@testing-library/react";

describe("components/Form/Controls/Label", () => {
  let renderer: IRenderer;

  beforeEach(() => {
    renderer = createRenderer();
    cssReboot(renderer);
  });

  afterEach(() => {
    renderer.clear();
  });

  it("should render a label", async () => {
    const component = <Label htmlFor="foobar">Label</Label>;
    render(<Wrapper renderer={renderer}>{component}</Wrapper>);

    expect(screen.getByTestId("form-label")).toBeInTheDocument();
    expect(screen.getByTestId("form-label")).toHaveClass("form-label");

    expect(screen.getByTestId("form-label")).toHaveAttribute("for", "foobar");
    expect(screen.getByTestId("form-label")).toHaveTextContent("Label");

    const snapshot = await createSnapshot({ component, renderer });
    expect(snapshot).toMatchSnapshot();
  });
});
